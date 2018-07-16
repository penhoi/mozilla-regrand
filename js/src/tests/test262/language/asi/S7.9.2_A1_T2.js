// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check examples for automatic semicolon insertion from the Standart
es5id: 7.9.2_A1_T2
description: >
    { 1 \n 2 } 3 is a valid sentence in the ECMAScript grammar with
    automatic semicolon insertion
---*/

//CHECK#1
{ 1
2 } 3

reportCompare(0, 0);
