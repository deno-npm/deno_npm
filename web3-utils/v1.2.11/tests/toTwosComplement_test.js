import {
  padLeft,
  toTwosComplement,
} from "../src/index.js";
import {
  BigNumber,
} from "../deps.js";
import * as testing from "../../../test_deps.js";

var tests = [
  {
    value: 1,
    expected: padLeft(new BigNumber(1).integerValue().toString(16), 64),
  },
  { value: "1", expected: padLeft(new BigNumber(1).toString(16), 64) },
  { value: "0x1", expected: padLeft(new BigNumber(1).toString(16), 64) },
  { value: "15", expected: padLeft(new BigNumber(15).toString(16), 64) },
  { value: "0xf", expected: padLeft(new BigNumber(15).toString(16), 64) },
  {
    value: -1,
    expected: new BigNumber(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      16,
    ).plus(new BigNumber(-1)).plus(1).toString(16),
  },
  {
    value: "-1",
    expected: new BigNumber(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      16,
    ).plus(new BigNumber(-1)).plus(1).toString(16),
  },
  {
    value: "-0x1",
    expected: new BigNumber(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      16,
    ).plus(new BigNumber(-1)).plus(1).toString(16),
  },
  {
    value: "-15",
    expected: new BigNumber(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      16,
    ).plus(new BigNumber(-15)).plus(1).toString(16),
  },
  {
    value: "-0xf",
    expected: new BigNumber(
      "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      16,
    ).plus(new BigNumber(-15)).plus(1).toString(16),
  },
  { value: 0, expected: padLeft(new BigNumber(0).toString(16), 64) },
  { value: "0", expected: padLeft(new BigNumber(0).toString(16), 64) },
  { value: "0x0", expected: padLeft(new BigNumber(0).toString(16), 64) },
  { value: -0, expected: padLeft(new BigNumber(0).toString(16), 64) },
  { value: "-0", expected: padLeft(new BigNumber(0).toString(16), 64) },
  { value: "-0x0", expected: padLeft(new BigNumber(0).toString(16), 64) },
  {
    value: new BigNumber(15),
    expected: padLeft(new BigNumber(15).toString(16), 64),
  },
];

Deno.test({
  name: "toTwosComplement",
  fn() {
    tests.forEach(({ expected, value }) => {
      testing.assertEquals(toTwosComplement(value).replace("0x", ""), expected);
    });
  },
});
