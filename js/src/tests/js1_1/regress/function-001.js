/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:          boolean-001.js
 *  Description:
 *
 *  http://scopus.mcom.com/bugsplat/show_bug.cgi?id=99232
 *
 *  eval("function f(){}function g(){}") at top level is an error for JS1.2
 and above (missing ; between named function expressions), but declares f
 and g as functions below 1.2.
 *
 * Fails to produce error regardless of version:
 * js> version(100)
 120
 js> eval("function f(){}function g(){}")
 js> version(120);
 100
 js> eval("function f(){}function g(){}")
 js>
 *  Author:             christine@netscape.com
 *  Date:               11 August 1998
 */
var SECTION = "function-001.js";
var TITLE   = "functions not separated by semicolons are not errors in version 110 ";
var BUGNUMBER="99232";

printBugNumber(BUGNUMBER);
writeHeaderToLog( SECTION + " "+ TITLE);

result = "passed";

new TestCase(
  "eval(\"function f(){}function g(){}\")",
  void 0,
  eval("function f(){}function g(){}") );

test();

