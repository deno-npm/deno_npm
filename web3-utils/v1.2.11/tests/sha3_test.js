import {
  sha3,
} from "../mod.js";
import * as testing from "../../../test_deps.js";
import {
  Hash,
} from "../../../deps.js";

const deno_sha3 = (str) => Hash.createHash("keccak256").update(str).toString();

Deno.test("sha3 should return sha3 with hex prefix", function () {
  testing.assertEquals(
    sha3("test123"),
    "0x" + deno_sha3("test123"),
  );
  testing.assertEquals(
    sha3("test(int)"),
    "0x" + deno_sha3("test(int)"),
  );
});

Deno.test("sha3 should return sha3 with hex prefix when hex input", function () {
  testing.assertEquals(
    sha3("test123"),
    "0xf81b517a242b218999ec8eec0ea6e2ddbef2a367a14e93f4a32a39e260f686ad",
  );
  testing.assertEquals(
    sha3("test(int)"),
    "0xf4d03772bec1e62fbe8c5691e1a9101e520e8f8b5ca612123694632bf3cb51b1",
  );
  testing.assertEquals(
    sha3("0x80"),
    "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  );
  testing.assertEquals(
    sha3("0x3c9229289a6125f7fdf1885a77bb12c37a8d3b4962d936f7e3084dece32a3ca1"),
    "0x82ff40c0a986c6a5cfad4ddf4c3aa6996f1a7837f9c398e17e5de5cbd5a12b28",
  );
});
