import * as testing from "../../../test_deps.js";
import * as RLP from "../mod.ts";
import {
  BN,
  Buffer,
} from "../deps.js";

const officialTests = await Deno.readTextFile(
  new URL("./fixture/rlptest.json", import.meta.url),
)
  .then((x) => JSON.parse(x));

Object.entries(officialTests.tests)
  .forEach(([name, test]: [string, any]) => {
    Deno.test(`should pass ${name} official test`, function () {
      let incoming = test.in;
      // if we are testing a big number
      if (incoming[0] === "#") {
        const bn = new BN(incoming.slice(1));
        incoming = Buffer.from(bn.toArray());
      }

      const encoded = RLP.encode(incoming);
      testing.assertEquals(
        "0x" + encoded.toString("hex"),
        test.out.toLowerCase(),
      );
    });
  });
