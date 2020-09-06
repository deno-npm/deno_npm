import {
  isHex,
} from "../mod.js";
import {
  BN,
  BigNumber,
} from "../deps.js";
import * as testing from "../../../test_deps.js";

var tests = [
  { value: 1, expected: true },
  { value: "1", expected: true },
  { value: "0xH", expected: false },
  { value: "H", expected: false },
  { value: [1, 2, 3, { test: "data" }], expected: false },
  { value: { test: "test" }, expected: false },
  { value: '{"test": "test"}', expected: false },
  { value: "myString", expected: false },
  { value: "myString 34534!", expected: false },
  { value: new BN(15), expected: false },
  { value: new BigNumber(15), expected: false },
  { value: "Heeäööä👅D34ɝɣ24Єͽ-.,äü+#/", expected: false },
  { value: true, expected: false },
  { value: false, expected: false },
];

Deno.test({
  name: "isHex",
  fn() {
    tests.forEach(({ expected, value }) => {
      testing.assertEquals(isHex(value), expected);
    });
  },
});
