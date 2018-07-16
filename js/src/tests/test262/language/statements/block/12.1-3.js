// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.1-3
description: "12.1 - block '{ StatementListopt };' is not allowed: try-finally"
---*/


assert.throws(SyntaxError, function() {
            eval("try{};finally{}");
});

reportCompare(0, 0);
