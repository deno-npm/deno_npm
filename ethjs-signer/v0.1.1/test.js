import * as testing from "../../test_deps.js";
import {
  sign,
  recover,
} from "./mod.js";
import {
  BN,
  Buffer as BufferModule,
  ethjs_account,
} from "./deps.js";

const { Buffer } = BufferModule;

const {
  generate,
  publicToAddress,
} = ethjs_account;

const stripHexPrefix = (str) => {
  if (typeof str !== "string") {
    return str;
  }

  const is_hex_string = str.slice(0, 2) === "0x";

  return is_hex_string ? str.slice(2) : str;
};

Deno.test({
  name: "recover should recover from signed tx string",
  fn(){
    const testAccount = generate('sdkjfhskjhskhjsfkjhsf093j9sdjfpisjdfoisjdfisdfsfkjhsfkjhskjfhkshdf');
    const rawTx = {
      to: testAccount.address.toLowerCase(),
      nonce: `0x${new BN(0).toString(16)}`,
      gasPrice: `0x${new BN(0).toString(16)}`,
      gasLimit: `0x${new BN(0).toString(16)}`,
      value: `0x${new BN(0).toString(16)}`,
      data: '0',
    };
    const signedTx = sign(rawTx, testAccount.privateKey, true);
    const signedTxString = sign(rawTx, testAccount.privateKey);
    const publicKey = recover(signedTxString,
      (new BN(signedTx[6].toString('hex'), 16).toNumber(10)),
      signedTx[7],
      signedTx[8]);
    const address = publicToAddress(publicKey);
    testing.assertEquals(address, testAccount.address);
  }
});

Deno.test({
  name: "recover should recover from signed tx buffer",
  fn(){
    const testAccount = generate('sdkjfhskjhskhjsfkjhsf093j9sdjfpisjdfoisjdfisdfsfkjhsfkjhskjfhkshdf');
    const rawTx = {
      to: testAccount.address.toLowerCase(),
      nonce: `0x${new BN(0).toString(16)}`,
      gasPrice: `0x${new BN(0).toString(16)}`,
      gasLimit: `0x${new BN(0).toString(16)}`,
      value: `0x${new BN(0).toString(16)}`,
      data: '0x',
    };
    const signedTx = sign(rawTx, testAccount.privateKey, true);
    const signedTxBuffer = new Buffer(stripHexPrefix(sign(rawTx, testAccount.privateKey)), 'hex');
    const publicKey = recover(signedTxBuffer,
      (new BN(signedTx[6].toString('hex'), 16).toNumber(10)),
      signedTx[7],
      signedTx[8]);
    const address = publicToAddress(publicKey);
    testing.assertEquals(address, testAccount.address);
  }
});

const account = generate('sdkjfhskjhskhjsfkjhsf093j9sdjfpisjdfoisjdfisdfsfkjhsfkjhskjfhkshdf')

Deno.test({
  name: "sign should work with gas shim",
  fn(){
    testing.assertEquals(
      sign({ to: account.address, gas: 3000000 }, account.privateKey),
      sign({ to: account.address, gasLimit: 3000000 }, account.privateKey)
    );
  }
});

Deno.test({
  name: "sign should sign a valid tx",
  fn(){
    testing.assertEquals(typeof sign({ to: account.address }, account.privateKey), 'string');
    testing.assertEquals(typeof sign({ to: account.address }, account.privateKey, true), 'object');
  }
});

Deno.test({
  name: "sign should throw on invalid arguments",
  fn(){
    testing.assertThrows(() => sign(''), Error);
    testing.assertThrows(() => sign({}, ''), Error);
    testing.assertThrows(() => sign({ to: account.address, gas: '0x89724982892748972349874239847987s29sdfhkjjsfh8823927482978923793248829724397' }, account.privateKey), Error);
    testing.assertThrows(() => sign({ to: '0x00' }, account.privateKey), Error);
    testing.assertThrows(() => sign({}, '0xfsd98'), Error);
    testing.assertThrows(() => sign({}, '0xkjdsfkjfsdkjs'), Error);
    testing.assertThrows(() => sign({}, 234879243), Error);
    testing.assertThrows(() => sign({}, null), Error);
    testing.assertThrows(() => sign(null, 243249), Error);
  }
});