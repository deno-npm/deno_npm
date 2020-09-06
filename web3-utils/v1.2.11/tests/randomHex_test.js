import {
  randomHex,
} from "../mod.js";
import * as testing from "../../../test_deps.js";

// Expect 2 chars per bytes plus `0x` prefix
var tests = [
  { value: 0, expected: { prefix: "0x", type: "string", length: 2 } },
  { value: 15, expected: { prefix: "0x", type: "string", length: 32 } },
  { value: 16, expected: { prefix: "0x", type: "string", length: 34 } },
];

Deno.test({
  name: "randomHex",
  fn() {
    tests.forEach(({ expected, value }) => {
      const result = randomHex(value);

      testing.assertStrictEquals(typeof result, expected.type);
      testing.assertStrictEquals(result.slice(0, 2), expected.prefix);
      testing.assertStrictEquals(result.length, expected.length);
    });
  },
});
