import * as testing from "../../test_deps.js";
import {
  randomBytes,
  sha3,
} from "./deps.js";
import {
  generate,
  getAddress,
  getChecksumAddress,
  privateToAccount,
  privateToPublic,
  publicToAddress,
} from "./mod.js";
// const ethUtil = require('ethereumjs-util');
//const SandboxedModule = require('sandboxed-module');

/*
SandboxedModule.registerBuiltInSourceTransformer('istanbul');
const invalidGetAddress = SandboxedModule.require('../index.js', {
  requires: {
    './getChecksumAddress.js': (addr) => addr + 1,
  },
  singleOnly: true,
}).getAddress;
*/

function randomBuffer(length) {
  const buffer = randomBytes(length);
  return buffer;
}

//TODO
//This was originally altered by npm's sandboxed-module
//Find a way to replace getChecksumAddress more elegantly
function invalidGetAddress(addressInput) {
  var address = addressInput; // eslint-disable-line
  var result = null; // eslint-disable-line

  if (typeof (address) !== "string") {
    throw new Error(
      `[ethjs-account] invalid address value ${
        JSON.stringify(address)
      } not a valid hex string`,
    );
  }

  // Missing the 0x prefix
  if (
    address.substring(0, 2) !== "0x" &&
    address.substring(0, 2) !== "XE"
  ) {
    address = `0x${address}`;
  }

  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    result = address + 1;

    // It is a checksummed address with a bad checksum
    if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && result !== address) {
      throw new Error("[ethjs-account] invalid address checksum");
    }

    // Maybe ICAP? (we only support direct mode)
  } else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    throw new Error(
      "[ethjs-account] ICAP and IBAN addresses, not supported yet..",
    );

    /*
    // It is an ICAP address with a bad checksum
    if (address.substring(2, 4) !== ibanChecksum(address)) {
      throw new Error('invalid address icap checksum');
    }

    result = (new BN(address.substring(4), 36)).toString(16);
    while (result.length < 40) { result = '0' + result; }
    result = getChecksumAddress('0x' + result);
    */
  } else {
    throw new Error(
      `[ethjs-account] invalid address value ${
        JSON.stringify(address)
      } not a valid hex string`,
    );
  }

  return result;
}

function randomHexString(length) {
  return `0x${randomBuffer(length).toString("hex")}`;
}

Deno.test({
  name: "privateToAccount should throw under invalid conditions",
  fn() {
    testing.assertThrows(() => privateToAccount(""), Error);
    testing.assertThrows(() => privateToAccount("0x"), Error);
    testing.assertThrows(() => privateToAccount({}), Error);
    testing.assertThrows(() => privateToAccount(null), Error);
    testing.assertThrows(() => privateToAccount(""), Error);
  },
});

Deno.test({
  name:
    "privateToAccount should prodice the same keys given a prefixed and non prefixed private key",
  fn() {
    const privateKey =
      "0xccb36826fbd5192c10bba496af42906a7e3b91f87a0ae803e79113fa88c5432c";
    const privateKey2 =
      "ccb36826fbd5192c10bba496af42906a7e3b91f87a0ae803e79113fa88c5432c";
    testing.assertEquals(
      privateToPublic(privateKey2),
      privateToPublic(privateKey),
    );
    testing.assertEquals(
      privateToAccount(privateKey2),
      privateToAccount(privateKey),
    );
  },
});

Deno.test({
  name: "privateToAccount should produce an account with correct properties",
  fn() {
    const testAccount = privateToAccount(sha3("sfddskj"));
    testing.assertEquals(typeof testAccount, "object");
    testing.assertEquals(typeof testAccount.privateKey, "string");
    testing.assertEquals(typeof testAccount.publicKey, "string");
    testing.assertEquals(typeof testAccount.address, "string");
    testing.assertEquals(Object.keys(testAccount).length, 3);
    testing.assertEquals(testAccount.privateKey.length, 66);
    testing.assertEquals(testAccount.publicKey.length, 130);
    testing.assertEquals(testAccount.address.length, 42);
  },
});

Deno.test("privateToPublic should throw under invalid conditions", () => {
  testing.assertThrows(() => privateToPublic(""), Error);
  testing.assertThrows(() => privateToPublic("0x"), Error);
  testing.assertThrows(() => privateToPublic({}), Error);
  testing.assertThrows(() => privateToPublic(null), Error);
  testing.assertThrows(() => privateToPublic(42323424342), Error);
  testing.assertThrows(() => privateToPublic(""), Error);
});

Deno.test("publicToAddress should throw under invalid conditions", () => {
  testing.assertThrows(() => publicToAddress(""), Error);
  testing.assertThrows(() => publicToAddress("0x"), Error);
  testing.assertThrows(() => publicToAddress({}), Error);
  testing.assertThrows(() => publicToAddress(null), Error);
  testing.assertThrows(() => publicToAddress(42323424342), Error);
  testing.assertThrows(() => publicToAddress(""), Error);
});

Deno.test("generate should throw under invalid conditions", () => {
  testing.assertThrows(() => generate({}), Error);
  testing.assertThrows(() => generate(3443432243), Error);
  testing.assertThrows(() => generate(undefined), Error);
  testing.assertThrows(() => generate(null), Error);
  testing.assertThrows(() => generate(""), Error);
});

Deno.test("generate should generate an address object", () => {
  const testAccount = generate(
    "fdsjklfsdjklsfdjkfsdkjlsfdkjsdfkljskljsdfkjfsdkjlsfkjsfdkjsfdkljsfdkljsdfkjlsdfkjsf",
  );

  testing.assertEquals(typeof testAccount, "object");
  testing.assertEquals(typeof testAccount.privateKey, "string");
  testing.assertEquals(typeof testAccount.publicKey, "string");
  testing.assertEquals(typeof testAccount.address, "string");
  testing.assertEquals(Object.keys(testAccount).length, 3);
  testing.assertEquals(testAccount.privateKey.length, 66);
  testing.assertEquals(testAccount.publicKey.length, 130);
  testing.assertEquals(testAccount.address.length, 42);
});

Deno.test("generate should generate many random addresses", () => {
  for (let i = 0; i < 500; i++) {
    const testAccount = generate(
      `fdsjklfsdjklsfdjkfsdkjlsfdkjsdfkljskljsdfkjfsdkjlsfkjsfdkjsfdkljsfd${i}`,
    );

    testing.assertEquals(typeof testAccount, "object");
    testing.assertEquals(typeof testAccount.privateKey, "string");
    testing.assertEquals(typeof testAccount.publicKey, "string");
    testing.assertEquals(typeof testAccount.address, "string");
    testing.assertEquals(Object.keys(testAccount).length, 3);
    testing.assertEquals(testAccount.privateKey.length, 66);
    testing.assertEquals(testAccount.publicKey.length, 130);
    testing.assertEquals(testAccount.address.length, 42);
  }
});

Deno.test({
  name: "getAddress should convert non hexed address",
  fn() {
    testing.assertEquals(
      getAddress("0000000000000000000000000000000000000000"),
      "0x0000000000000000000000000000000000000000",
    );
  },
});

Deno.test({
  name: "getAddress should work with ICAP",
  fn() {
    testing.assertEquals(
      getAddress("00c5496aee77c1ba1f0854206a26dda82a81d6d8").toLowerCase(),
      "0x00c5496aee77c1ba1f0854206a26dda82a81d6d8",
    );
  },
});

Deno.test({
  name: "getAddress doesn't support IBAN/ICAP",
  fn() {
    testing.assertThrows(() =>
      getAddress("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS")
    );
  },
});

Deno.test({
  name: "getAddress and checksumAddress should throw on invalud checksum",
  fn() {
    testing.assertThrows(() => getAddress("sdfjhs992"));
    testing.assertThrows(() => getChecksumAddress("sdfk^jsfdkjs9"));
    testing.assertThrows(() => getAddress(234234234));
    testing.assertThrows(() => getChecksumAddress(234234234));
  },
});

Deno.test("getAddress should throw on invalid checksum address", () => {
  testing.assertThrows(() =>
    invalidGetAddress("0xaB41D5688Facc5EB21aD86098BA230D23Cde0E31")
  );
});

// describe('ethjs-account', () => {
//   describe('privateToAccount', () => {
//     /*
//     it('should be the same as ethereumjs-util', () => {
//       const privateKey = '0xccb36826fbd5192c10bba496af42906a7e3b91f87a0ae803e79113fa88c5432c';
//       const accountTest = privateToAccount(privateKey);
//       const publicKey = new Buffer(accountTest.publicKey.slice(2), 'hex');
//       const address = accountTest.address.toLowerCase();

//       assert.deepEqual(publicKey, privateToPublic(privateKey));
//       assert.equal(address.toLowerCase(), `0x${ethUtil.privateToAddress(new Buffer(privateKey.slice(2), 'hex')).toString('hex')}`);
//       assert.deepEqual(publicKey, ethUtil.privateToPublic(new Buffer(privateKey.slice(2), 'hex')));
//       assert.equal(publicToAddress(publicKey).toLowerCase(), `0x${ethUtil.publicToAddress(accountTest.publicKey, true).toString('hex')}`);
//     });
//     */

//   describe('publicToAddress', () => {
//     /*
//     it('should be the same as ethereumjs-util', () => {
//       const accountTest = privateToAccount(sha3('kjsdfkjfkjsf'));
//       const publicKey = new Buffer(accountTest.publicKey.slice(2), 'hex');

//       assert.equal(publicToAddress(publicKey).toLowerCase(), `0x${ethUtil.publicToAddress(accountTest.publicKey, true).toString('hex')}`);
//     });
//     */
//   });

//   describe('test checkSum address, and getAddress', () => {
//     /*
//     it('ethers getAddress should equal official toChecksumAddress', () => {
//       function testAddress(address) {
//         const official = ethUtil.toChecksumAddress(address);
//         const ethers = getAddress(address);
//         assert.equal(ethers, official, 'wrong address');
//       }

//       testAddress('0x0000000000000000000000000000000000000000');
//       testAddress('0xffffffffffffffffffffffffffffffffffffffff');
//       for (var i = 0; i < 10000; i++) { // eslint-disable-line
//         testAddress(randomHexString(20));
//       }
//     });
//     */
//   });
// });
