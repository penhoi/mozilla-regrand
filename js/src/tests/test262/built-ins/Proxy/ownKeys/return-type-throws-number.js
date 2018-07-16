// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
description: >
    The returned list must not have entries whose type does not match
    « String, Symbol ».
info: >
    [[OwnPropertyKeys]] ( )

    ...
    7. Let trapResultArray be ? Call(trap, handler, « target »).
    8. Let trapResult be ?
        CreateListFromArrayLike(trapResultArray, « String, Symbol »).
    ...

    CreateListFromArrayLike ( obj [ , elementTypes ] )

    ...
    6. Repeat, while index < len
      ...
      d. If Type(next) is not an element of elementTypes,
          throw a TypeError exception.
---*/

var p = new Proxy({}, {
  ownKeys() {
    return [1];
  }
});

assert.throws(TypeError, function() {
  Object.keys(p);
});

reportCompare(0, 0);
