// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.1
description: >
  Math.abs.name is "abs".
info: >
  Math.abs ( x )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Math.abs.name, "abs");

verifyNotEnumerable(Math.abs, "name");
verifyNotWritable(Math.abs, "name");
verifyConfigurable(Math.abs, "name");

reportCompare(0, 0);
