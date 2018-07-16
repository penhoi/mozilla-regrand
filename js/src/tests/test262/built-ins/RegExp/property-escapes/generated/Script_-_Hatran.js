// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Hatran`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0108E0, 0x0108F2],
    [0x0108F4, 0x0108F5],
    [0x0108FB, 0x0108FF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Hatran}+$/u,
  matchSymbols,
  "\\p{Script=Hatran}"
);
testPropertyEscapes(
  /^\p{Script=Hatr}+$/u,
  matchSymbols,
  "\\p{Script=Hatr}"
);
testPropertyEscapes(
  /^\p{sc=Hatran}+$/u,
  matchSymbols,
  "\\p{sc=Hatran}"
);
testPropertyEscapes(
  /^\p{sc=Hatr}+$/u,
  matchSymbols,
  "\\p{sc=Hatr}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0108F3
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0108DF],
    [0x0108F6, 0x0108FA],
    [0x010900, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Hatran}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hatran}"
);
testPropertyEscapes(
  /^\P{Script=Hatr}+$/u,
  nonMatchSymbols,
  "\\P{Script=Hatr}"
);
testPropertyEscapes(
  /^\P{sc=Hatran}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hatran}"
);
testPropertyEscapes(
  /^\P{sc=Hatr}+$/u,
  nonMatchSymbols,
  "\\P{sc=Hatr}"
);

reportCompare(0, 0);
