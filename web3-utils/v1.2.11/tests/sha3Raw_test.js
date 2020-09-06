import * as testing from "../../../test_deps.js";
import {
  sha3Raw,
} from "../mod.js";
import { Hash } from "../../../deps.js";

const deno_sha3 = (str) => Hash.createHash("keccak256").update(str).toString();

Deno.test("sha3Raw should return the sha3 hash with hex prefix", function () {
  testing.assertEquals(
    sha3Raw(""),
    "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
  );
});

Deno.test("sha3Raw should return sha3 with hex prefix", function () {
  testing.assertEquals(
    sha3Raw("test123"),
    "0x" + deno_sha3("test123"),
  );

  testing.assertEquals(
    sha3Raw("test(int)"),
    "0x" + deno_sha3("test(int)"),
  );
});
