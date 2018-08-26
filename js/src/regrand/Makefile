#!/usr/bin/make

CFG_DIR := /home/sgx/project/mozilla-regrand/config
JS_HOME := /home/sgx/project/mozilla-regrand/js/src
BLD_DIR := ${JS_HOME}/build_DBG.OBJ

TEST_CPP    := regalloc_test.cpp
TEST_OBJ    := $(TEST_CPP:.cpp=.o)
ALL_TEST    := $(TEST_CPP:.cpp=)

.phony: all clean

all: ${ALL_TEST}

%.o : %.cpp
	/usr/bin/g++ -std=gnu++14 -o $@ -c -I${BLD_DIR}/dist/system_wrappers -include ${CFG_DIR}/gcc_hidden.h -DDEBUG=1 -DENABLE_BINARYDATA -DENABLE_SIMD -DENABLE_WASM_THREAD_OPS -DWASM_HUGE_MEMORY -DJS_CACHEIR_SPEW -DENABLE_SHARED_ARRAY_BUFFER -DEXPORT_JS_API -DMOZ_HAS_MOZGLUE -I${JS_HOME} -I${BLD_DIR}/js/src -I${BLD_DIR}/dist/include -DMOZILLA_CLIENT -include ${BLD_DIR}/js/src/js-confdefs.h -Wall -Wempty-body -Wignored-qualifiers -Woverloaded-virtual -Wpointer-arith -Wsign-compare -Wtype-limits -Wunreachable-code -Wwrite-strings -Wno-invalid-offsetof -Wno-error=maybe-uninitialized -Wno-error=deprecated-declarations -Wno-error=array-bounds -Wno-error=free-nonheap-object -Wformat -Wformat-security -fno-sized-deallocation -fno-rtti -fno-exceptions -fno-math-errno -pthread -pipe -g -fno-omit-frame-pointer -Wno-shadow -Werror=format -fno-strict-aliasing $<

${ALL_TEST}:% : %.o
	${BLD_DIR}/_virtualenv/bin/python ${CFG_DIR}/expandlibs_exec.py --uselist --  /usr/bin/g++ -std=gnu++14 -o $@ -Wall -Wempty-body -Wignored-qualifiers -Woverloaded-virtual -Wpointer-arith -Wsign-compare -Wtype-limits -Wunreachable-code -Wwrite-strings -Wno-invalid-offsetof -Wno-error=maybe-uninitialized -Wno-error=deprecated-declarations -Wno-error=array-bounds -Wno-error=free-nonheap-object -Wformat -Wformat-security -fno-sized-deallocation -fno-rtti -fno-exceptions -fno-math-errno -pthread -pipe -g -fno-omit-frame-pointer  $< -lpthread -Wl,-z,noexecstack -Wl,-z,text -Wl,-z,relro -Wl,--build-id -B ${BLD_DIR}/build/unix/gold -rdynamic -Wl,-rpath-link,${BLD_DIR}/dist/bin -Wl,-rpath-link,/usr/local/lib   ${BLD_DIR}/mozglue/build/libmozglue.a ${BLD_DIR}/js/src/build/libjs_static.a   -lm -ldl  -lz -lm -ldl

clean:
	rm -rf regalloc_test.o regalloc_test


