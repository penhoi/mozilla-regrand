// |reftest| error:SyntaxError
// Copyright (C) 2016 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `delete` UnaryExpression
info: >
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `delete` UnaryExpression
    ...

negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";
delete o.p ** 2;
