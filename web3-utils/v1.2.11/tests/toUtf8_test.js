import {
  toUtf8,
} from "../mod.js";
import * as testing from "../../../test_deps.js";

var tests = [
  {
    value:
      "0x486565c3a4c3b6c3b6c3a4f09f9185443334c99dc9a33234d084cdbd2d2e2cc3a4c3bc2b232f",
    expected: "Heeäööä👅D34ɝɣ24Єͽ-.,äü+#/",
  },
  { value: "0x6d79537472696e67", expected: "myString" },
  { value: "0x6d79537472696e6700", expected: "myString" },
  {
    value: "0x65787065637465642076616c7565000000000000000000000000000000000000",
    expected: "expected value",
  },
  {
    value:
      "0x000000000000000000000000000000000000657870656374000065642076616c7565",
    expected: "expect\u0000\u0000ed value",
  },
];

Deno.test({
  name: "hexToUtf8",
  fn() {
    tests.forEach(({ expected, value }) => {
      testing.assertEquals(toUtf8(value), expected);
    });
  },
});
