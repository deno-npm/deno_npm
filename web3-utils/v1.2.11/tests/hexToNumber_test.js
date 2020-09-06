import {
  hexToNumber,
} from "../src/index.js";
import * as testing from "../../../test_deps.js";

Deno.test({
  name: "hexToNumber should return the correct value",
  fn() {
    testing.assertEquals(hexToNumber("0x3e8"), 1000);
    testing.assertEquals(hexToNumber("0x1f0fe294a36"), 2134567897654);
    // allow compatiblity
    testing.assertEquals(hexToNumber(100000), 100000);
  },
});

Deno.test({
  name: "hexToNumber should validate only hex strings",
  fn() {
    try {
      hexToNumber("100000");
      testing.fail();
    } catch (error) {
      testing.assert(error.message.includes("is not a valid hex string"));
    }
  },
});
