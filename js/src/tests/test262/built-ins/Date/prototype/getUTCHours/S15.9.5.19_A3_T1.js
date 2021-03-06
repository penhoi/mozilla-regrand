// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getUTCHours property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getutchours
es5id: 15.9.5.19_A3_T1
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

var x = Date.prototype.getUTCHours.length;
verifyNotWritable(Date.prototype.getUTCHours, "length", null, 1);
if (Date.prototype.getUTCHours.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCHours.length has the attribute ReadOnly');
}

reportCompare(0, 0);
