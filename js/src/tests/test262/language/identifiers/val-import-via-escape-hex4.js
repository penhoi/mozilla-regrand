// |reftest| error:SyntaxError
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.6-36
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: import (import)
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var \u0069\u006d\u0070\u006f\u0072\u0074 = 123;
