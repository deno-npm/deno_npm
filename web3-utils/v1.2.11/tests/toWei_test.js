import {
  isBN,
  toBN,
  toWei,
} from "../mod.js";
import * as testing from "../../../test_deps.js";

Deno.test({
  name: "toWei should return the correct value",
  fn() {
    testing.assertEquals(toWei("1", "wei"), "1");
    testing.assertEquals(toWei("1", "kwei"), "1000");
    testing.assertEquals(toWei("1", "Kwei"), "1000");
    testing.assertEquals(toWei("1", "babbage"), "1000");
    testing.assertEquals(toWei("1", "mwei"), "1000000");
    testing.assertEquals(toWei("1", "Mwei"), "1000000");
    testing.assertEquals(toWei("1", "lovelace"), "1000000");
    testing.assertEquals(toWei("1", "gwei"), "1000000000");
    testing.assertEquals(toWei("1", "Gwei"), "1000000000");
    testing.assertEquals(toWei("1", "shannon"), "1000000000");
    testing.assertEquals(toWei("1", "szabo"), "1000000000000");
    testing.assertEquals(toWei("1", "finney"), "1000000000000000");
    testing.assertEquals(toWei("1", "ether"), "1000000000000000000");
    testing.assertEquals(toWei("1", "kether"), "1000000000000000000000");
    testing.assertEquals(toWei("1", "grand"), "1000000000000000000000");
    testing.assertEquals(toWei("1", "mether"), "1000000000000000000000000");
    testing.assertEquals(toWei("1", "gether"), "1000000000000000000000000000");
    testing.assertEquals(
      toWei("1", "tether"),
      "1000000000000000000000000000000",
    );

    testing.assertEquals(toWei("1", "kwei"), toWei("1", "femtoether"));
    testing.assertEquals(toWei("1", "szabo"), toWei("1", "microether"));
    testing.assertEquals(toWei("1", "finney"), toWei("1", "milliether"));
    testing.assertEquals(toWei("1", "milli"), toWei("1", "milliether"));
    testing.assertEquals(toWei("1", "milli"), toWei("1000", "micro"));

    testing.assertThrows(function () {
      toWei(1, "wei1");
    });
  },
});

Deno.test({
  name: `toWei should verify "number" arg is string or BN`,
  fn() {
    try {
      toWei(1, "wei");
      testing.fail();
    } catch (error) {
      testing.assert(
        error.message.includes(
          "Please pass numbers as strings or BN objects",
        ),
      );
    }
  },
});

// toWei returns string when given string, BN when given BN
Deno.test({
  name: "toWei should return the correct type",
  fn() {
    const weiString = "1";
    const weiBN = toBN(weiString);
    const bn = toWei(weiBN);

    testing.assert(isBN(bn));
    testing.assertStrictEquals(typeof toWei(weiString), "string");
  },
});
