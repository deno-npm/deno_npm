import {
  hexToNumberString,
} from "../src/index.js";
import * as testing from "../../../test_deps.js";

Deno.test({
  name: "hexToNumberString should return the correct value",
  fn() {
    testing.assertEquals(hexToNumberString("0x3e8"), "1000");
    testing.assertEquals(hexToNumberString("0x1f0fe294a36"), "2134567897654");
    // allow compatiblity
    testing.assertEquals(hexToNumberString(100000), "100000");
  },
});

Deno.test({
  name: "hexToNumberString should only validate hex strings",
  fn() {
    try {
      hexToNumberString("100000");
      testing.fail();
    } catch (error) {
      testing.assert(error.message.includes("is not a valid hex string"));
    }
  },
});
