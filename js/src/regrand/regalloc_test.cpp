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

int main(int argc, char* argv[])
{


//Observe AllocatableRegisterSet::takeAnyGeneral()
    // AllocatableRegisterSet hackregs(RegisterSet::Volatile());
    // Register hackreg;
    // for (int i = 0; i< 16; i++) {
    //     hackreg = hackregs.takeAnyGeneral();
    //     YPHPRINT("Hack AllocatableRegisterSet::takeAnyGeneral: %ith get %s", i, hackreg.name());
    // }

//Observe MacroAssebmbler::loadTraceLogger
//Register loggerReg = regs.takeAnyGeneral();
//masm.loadTraceLogger(loggerReg);

    js::jit::AllocatableGeneralRegisterSet regs(js::jit::GeneralRegisterSet::All());
    return 0;
}

