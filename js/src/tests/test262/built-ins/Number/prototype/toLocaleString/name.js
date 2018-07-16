// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.4
description: >
  Number.prototype.toLocaleString.name is "toLocaleString".
info: >
  Number.prototype.toLocaleString( [ reserved1 [ , reserved2 ] ])

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Number.prototype.toLocaleString.name, "toLocaleString");

verifyNotEnumerable(Number.prototype.toLocaleString, "name");
verifyNotWritable(Number.prototype.toLocaleString, "name");
verifyConfigurable(Number.prototype.toLocaleString, "name");

reportCompare(0, 0);
