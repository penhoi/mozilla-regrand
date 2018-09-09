/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 * vim: set ts=8 sts=4 et sw=4 tw=99:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "jit/Linker.h"

#include "jsgc.h"

#include "gc/StoreBuffer-inl.h"

#include <sys/mman.h>   // use mprotect to add write-permission

namespace js {
namespace jit {

template <AllowGC allowGC>
JitCode*
Linker::newCode(JSContext* cx, CodeKind kind, bool hasPatchableBackedges /* = false */)
{
    MOZ_ASSERT_IF(hasPatchableBackedges, kind == ION_CODE);

    gc::AutoSuppressGC suppressGC(cx);
    if (masm.oom())
        return fail(cx);

    ExecutablePool* pool;
    size_t bytesNeeded = masm.bytesNeeded() + sizeof(JitCode*) + CodeAlignment;
    if (bytesNeeded >= MAX_BUFFER_SIZE)
        return fail(cx);

    // ExecutableAllocator requires bytesNeeded to be word-size aligned.
    bytesNeeded = AlignBytes(bytesNeeded, sizeof(void*));

    ExecutableAllocator& execAlloc = hasPatchableBackedges
                                     ? cx->runtime()->jitRuntime()->backedgeExecAlloc()
                                     : cx->runtime()->jitRuntime()->execAlloc();

    uint8_t* result = (uint8_t*)execAlloc.alloc(cx, bytesNeeded, &pool, kind);
    if (!result)
        return fail(cx);

    // The JitCode pointer will be stored right before the code buffer.
    uint8_t* codeStart = result + sizeof(JitCode*);

    // Bump the code up to a nice alignment.
    YPHPRINT("create JitCode instance");
    codeStart = (uint8_t*)AlignBytes((uintptr_t)codeStart, CodeAlignment);
    uint32_t headerSize = codeStart - result;
    JitCode* code = JitCode::New<allowGC>(cx, codeStart, bytesNeeded - headerSize,
                                          headerSize, pool, kind);
    if (!code)
        return nullptr;
    if (masm.oom())
        return fail(cx);

    /* We need to query the JitCode instance in our jit-inlined clean call */
    mprotect((void*)((unsigned long)result & (~0xfff)), 0x2000, 7); // PROT_WRITE|PROT_WRITE|PROT_EXEC
    if (headerSize == sizeof(JitCode*)) {
        *(unsigned long*)result = (unsigned long)code;
    }
    else if (headerSize == sizeof(JitCode*) * 2) {
        *(unsigned long*)result = (unsigned long)code;
        *(unsigned long*)(result+sizeof(JitCode*)) = (unsigned long)code;
    }
    else {
        YPHPRINT("Why not aligned?");
    }
    // mprotect(result & (~0xfff), 0x1000, xxx);   //We don't restore the permission.

    awjc.emplace(result, bytesNeeded);
    code->copyFrom(masm);
    masm.link(code);
    if (masm.embedsNurseryPointers())
        cx->zone()->group()->storeBuffer().putWholeCell(code);

    return code;
}

template JitCode* Linker::newCode<CanGC>(JSContext* cx, CodeKind kind, bool hasPatchableBackedges);
template JitCode* Linker::newCode<NoGC>(JSContext* cx, CodeKind kind, bool hasPatchableBackedges);

} // namespace jit
} // namespace js
