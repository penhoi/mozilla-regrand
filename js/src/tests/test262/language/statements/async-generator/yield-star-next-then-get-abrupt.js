// This file was procedurally generated from the following sources:
// - src/async-generators/yield-star-next-then-get-abrupt.case
// - src/async-generators/default/async-declaration.template
/*---
description: Return abrupt after getting next().then (Async generator Function declaration)
esid: prod-AsyncGeneratorDeclaration
features: [Symbol.iterator, Symbol.asyncIterator, async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorDeclaration:
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }


    YieldExpression: yield * AssignmentExpression
    ...
    6. Repeat
      a. If received.[[Type]] is normal, then
        ii. Let innerResult be ? Invoke(iterator, "next",
            « received.[[Value]] »).
        iii. If generatorKind is async, then set innerResult to
             ? Await(innerResult).
    ...

    Await

    ...
    2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    3. Perform ! Call(promiseCapability.[[Resolve]], undefined, « promise »).
    ...

    Promise Resolve Functions

    ...
    8. Let then be Get(resolution, "then").
    ...
    10. Get thenAction be then.[[Value]].
    ...
    12. Perform EnqueueJob("PromiseJobs", PromiseResolveThenableJob, « promise,
        resolution, thenAction »).
    ...

---*/
var reason = {};
var obj = {
  get [Symbol.iterator]() {
    throw new Test262Error('it should not get Symbol.iterator');
  },
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          get then() {
            throw reason;
          }
        };
      }
    };
  }
};



var callCount = 0;

async function *gen() {
  callCount += 1;
  yield* obj;
    throw new Test262Error('abrupt completion closes iter');

}

var iter = gen();

iter.next().then(() => {
  throw new Test262Error('Promise incorrectly fulfilled.');
}, v => {
  assert.sameValue(v, reason, 'reject reason');

  iter.next().then(({ done, value }) => {
    assert.sameValue(done, true, 'the iterator is completed');
    assert.sameValue(value, undefined, 'value is undefined');
  }).then($DONE, $DONE);
}).catch($DONE);

assert.sameValue(callCount, 1);
