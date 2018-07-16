// Exercise triggering GC of atoms zone while off-thread parsing is happening.

if (helperThreadCount() === 0)
   quit();

gczeal(0);

// Reduce some GC parameters so that we can trigger a GC more easily.
gcparam('lowFrequencyHeapGrowth', 120);
gcparam('highFrequencyHeapGrowthMin', 120);
gcparam('highFrequencyHeapGrowthMax', 120);
gcparam('allocationThreshold', 1);
gc();

// Start an off-thread parse.
offThreadCompileScript("print('Finished')");

// Allocate lots of atoms, parsing occasionally.
for (let i = 0; i < 10; i++) {
    print(i);
    for (let j = 0; j < 10000; j++)
        Symbol.for(i + 10 * j);
    eval(`${i}`);
}

// Finish the off-thread parse.
runOffThreadScript();
