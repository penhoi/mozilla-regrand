// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.2
esid: sec-number.prototype.toexponential
description: >
  Return abrupt completion from ToInteger(fractionDigits)
info: |
  Number.prototype.toExponential ( fractionDigits )

  1. Let x be ? thisNumberValue(this value).
  2. Let f be ? ToInteger(fractionDigits).
  [...]
---*/

var fd1 = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var fd2 = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  NaN.toExponential(fd1);
}, "valueOf");

assert.throws(Test262Error, function() {
  NaN.toExponential(fd2);
}, "toString");

reportCompare(0, 0);
