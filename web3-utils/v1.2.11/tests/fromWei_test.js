import {
  toBN,
  fromWei,
} from "../mod.js";
import * as testing from "../../../test_deps.js";

Deno.test({
  name: "fromWei should return the correct value",
  fn() {
    testing.assertEquals(
      fromWei("1000000000000000000", "wei"),
      "1000000000000000000",
    );
    testing.assertEquals(
      fromWei("1000000000000000000", "kwei"),
      "1000000000000000",
    );
    testing.assertEquals(
      fromWei("1000000000000000000", "mwei"),
      "1000000000000",
    );
    testing.assertEquals(fromWei("1000000000000000000", "gwei"), "1000000000");
    testing.assertEquals(fromWei("1000000000000000000", "szabo"), "1000000");
    testing.assertEquals(fromWei("1000000000000000000", "finney"), "1000");
    testing.assertEquals(fromWei("1000000000000000000", "ether"), "1");
    testing.assertEquals(fromWei("1000000000000000000", "kether"), "0.001");
    testing.assertEquals(fromWei("1000000000000000000", "grand"), "0.001");
    testing.assertEquals(fromWei("1000000000000000000", "mether"), "0.000001");
    testing.assertEquals(
      fromWei("1000000000000000000", "gether"),
      "0.000000001",
    );
    testing.assertEquals(
      fromWei("1000000000000000000", "tether"),
      "0.000000000001",
    );
  },
});

Deno.test({
  name: `fromWei should verify "number" arg is string or BN`,
  fn() {
    try {
      fromWei(100000000000, "wei");
      testing.fail();
    } catch (error) {
      testing.assert(
        error.message.includes("Please pass numbers as strings or BN objects"),
      );
    }
  },
});

Deno.test({
  name: "fromWei should return the correct type",
  fn() {
    const weiString = "100000000000000000";
    const weiBN = toBN(weiString);

    testing.assert(typeof fromWei(weiString) === "string");
    testing.assert(typeof fromWei(weiBN) === "string");
  },
});
