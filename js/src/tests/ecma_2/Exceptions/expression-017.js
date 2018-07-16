/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          expression-07.js
   Corresponds To:     ecma/Expressions/11.2.3-4-n.js
   ECMA Section:       11.2.3. Function Calls
   Description:
   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "expression-017";
var TITLE   = "Function Calls";

writeHeaderToLog( SECTION + " "+ TITLE);

var result = "Failed";
var exception = "No exception thrown";
var expect = "Passed";

try {
  result = nullvalueOf();
} catch ( e ) {
  result = expect;
  exception = e.toString();
}

new TestCase(
  "null.valueOf()" +
  " (threw " + exception +")",
  expect,
  result );

test();
