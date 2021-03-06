/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.13.js
   ECMA Section:       15.9.5.13
   Description:        Date.prototype.getUTCDay

   1.Let t be this time value.
   2.If t is NaN, return NaN.
   3.Return WeekDay(t).

   Author:             christine@netscape.com
   Date:               12 november 1997
*/

var SECTION = "15.9.5.13";
var TITLE   = "Date.prototype.getUTCDay()";

writeHeaderToLog( SECTION + " "+ TITLE);

new TestCase( "(new Date(NaN)).getUTCDay()",
              NaN,
              (new Date(NaN)).getUTCDay() );

new TestCase( "Date.prototype.getUTCDay.length",
              0,
              Date.prototype.getUTCDay.length );

test();
