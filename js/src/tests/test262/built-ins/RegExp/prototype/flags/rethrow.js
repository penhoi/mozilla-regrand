// |reftest| skip -- regexp-dotall is not supported
// Copyright (C) 2017 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-regexp.prototype.flags
description: Rethrows exceptions raised in property gets
info: >
  get RegExp.prototype.flags

  [...]
  4. Let global be ToBoolean(? Get(R, "global")).
  6. Let ignoreCase be ToBoolean(? Get(R, "ignoreCase")).
  8. Let multiline be ToBoolean(? Get(R, "multiline")).
  10. Let dotAll be ToBoolean(? Get(R, "dotAll")).
  12. Let unicode be ToBoolean(? Get(R, "unicode")).
  14. Let sticky be ToBoolean(? Get(R, "sticky")).
features: [regexp-dotall]
---*/

var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;

assert.throws(Test262Error, function() {
  get.call({
    get global() {
      throw new Test262Error();
    },
  });
}, 'Let global be ToBoolean(? Get(R, "global"))');

assert.throws(Test262Error, function() {
  get.call({
    get ignoreCase() {
      throw new Test262Error();
    },
  });
}, 'Let ignoreCase be ToBoolean(? Get(R, "ignoreCase"))');

assert.throws(Test262Error, function() {
  get.call({
    get multiline() {
      throw new Test262Error();
    },
  });
}, 'Let multiline be ToBoolean(? Get(R, "multiline"))');

assert.throws(Test262Error, function() {
  get.call({
    get dotAll() {
      throw new Test262Error();
    },
  });
}, 'Let dotAll be ToBoolean(? Get(R, "dotAll"))');

assert.throws(Test262Error, function() {
  get.call({
    get unicode() {
      throw new Test262Error();
    },
  });
}, 'Let unicode be ToBoolean(? Get(R, "unicode"))');

assert.throws(Test262Error, function() {
  get.call({
    get sticky() {
      throw new Test262Error();
    },
  });
}, 'Let sticky be ToBoolean(? Get(R, "sticky"))');

reportCompare(0, 0);
