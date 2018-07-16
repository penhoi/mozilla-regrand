'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-24-s
description: Strict Mode - SyntaxError is thrown when deleting a built-in (Date)
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
            eval("delete Date;");
});

reportCompare(0, 0);
