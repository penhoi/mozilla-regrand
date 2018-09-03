#include "jit/BaselineCompiler.h"

#include "mozilla/Casting.h"

#include "jsfun.h"

#include "jit/BaselineIC.h"
#include "jit/BaselineJIT.h"
#include "jit/FixedList.h"
#include "jit/IonAnalysis.h"
#include "jit/JitcodeMap.h"
#include "jit/JitSpewer.h"
#include "jit/Linker.h"
#ifdef JS_ION_PERF
# include "jit/PerfSpewer.h"
#endif
#include "jit/SharedICHelpers.h"
#include "jit/VMFunctions.h"
#include "js/UniquePtr.h"
#include "vm/AsyncFunction.h"
#include "vm/AsyncIteration.h"
#include "vm/EnvironmentObject.h"
#include "vm/Interpreter.h"
#include "vm/TraceLogging.h"
#include "vtune/VTuneWrapper.h"

#include "jsscriptinlines.h"

#include "jit/BaselineFrameInfo-inl.h"
#include "jit/MacroAssembler-inl.h"
#include "vm/Interpreter-inl.h"
#include "vm/NativeObject-inl.h"

using namespace js;
using namespace js::jit;


static JSClassOps global_ops = {
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    nullptr,
    JS_GlobalObjectTraceHook
};

/* The class of the global object. */
static JSClass global_class = {
    "global",
    JSCLASS_GLOBAL_FLAGS,
    &global_ops
};


void test_regalloc(void)
{



    //Observe AllocatableRegisterSet::takeAnyGeneral()
    AllocatableRegisterSet hackregs(RegisterSet::Volatile());
    Register hackreg;
    for (int i = 0; i< 8; i++) {
        hackreg = hackregs.takeAnyGeneral();
        printf("Hack AllocatableRegisterSet::takeAnyGeneral: %ith get %s", i, hackreg.name());
    }

    AllocatableRegisterSet regs(RegisterSet::Volatile());
    Register reg;


    // Observe MacroAssebmbler::loadTraceLogger
    MacroAssembler masm;
    reg = regs.takeAnyGeneral();
    masm.loadTraceLogger(reg);
}


#include "jsapi.h"
#include "js/Initialization.h"



int main(int argc, const char *argv[])
{
    // Start the engine.
    if (!JS_Init())
        return 1;

    JSContext *cx = JS_NewContext(8L * 1024 * 1024);
    if (!cx)
        return 1;

    if (!JS::InitSelfHostedCode(cx))
        return 1;

    { // Scope for our various stack objects (JSAutoRequest, RootedObject), so they all go
        // out of scope before we JS_DestroyContext.

        JSAutoRequest ar(cx); // In practice, you would want to exit this any
        // time you're spinning the event loop

        JS::CompartmentOptions options;
        JS::RootedObject global(cx, JS_NewGlobalObject(cx, &global_class, nullptr, JS::FireOnNewGlobalHook, options));
        if (!global)
            return 1;

        JS::RootedValue rval(cx);

        { // Scope for JSAutoCompartment
            JSAutoCompartment ac(cx, global);
            JS_InitStandardClasses(cx, global);

            // const char *script = "'hello'+'world, it is '+new Date()";
            // const char *filename = "noname";
            // int lineno = 1;
            // JS::CompileOptions opts(cx);
            // opts.setFileAndLine(filename, lineno);
            // bool ok = JS::Evaluate(cx, opts, script, strlen(script), &rval);
            // if (!ok)
            //     return 1;

            test_regalloc();
        }

        JSString *str = rval.toString();
        printf("%s\n", JS_EncodeString(cx, str));
    }

    JS_DestroyContext(cx);
    JS_ShutDown();
    return 0;
}
