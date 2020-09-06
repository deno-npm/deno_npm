import * as testing from "../../test_deps.js";
import * as rnd from "./test_utils/randomData.js";
import * as rlp from "./src/rlp.js";
import * as Nat from "./src/nat.js";
import * as Account from "./src/account.js";
import { generate } from "./src/array.js";
import {
  keccak256,
} from "./src/hash.js";
import {
  ethjs_account,
  ethjs_signer,
  rlp as rlp_decoder,
} from "./deps.js";

const ethjs = {
  account: ethjs_account,
  signer: ethjs_signer,
};
const ref = { rlp: rlp_decoder };

const generateBytes = () => {
  return "0x" + generate(
    (Math.random() * 16 | 0) * 2,
    () => (Math.random() * 16 | 0).toString(16),
  ).join("");
};

const generateNBytes = (bytes) => {
  return "0x" + generate(
    bytes * 2,
    () => (Math.random() * 16 | 0).toString(16),
  )
    .join("");
};

const generateByteTree = () => {
  let list = [];
  while (Math.random() < 0.8) {
    if (Math.random() < 0.8) {
      list.push(generateBytes());
    } else {
      list.push(generateByteTree());
    }
  }
  return list;
};

Deno.test({
  name: "RLP operates identically to reference implementation",
  fn() {
    // Builds a test set of 256 random dataTrees + 2 default
    let dataTrees = [];
    dataTrees.push(
      [
        "0x00112233",
        "0x00",
        "0x44",
        "0x55",
        "0xf0",
        "0xff",
        ["0x66"],
        ["0x77", "0x88"],
        "0x",
        "0x",
        "0x99aabb",
      ],
    );
    dataTrees.push("0x00112233445566778899aabbccddeeff");
    for (let i = 0; i < 256; ++i) {
      dataTrees.push(rnd.dataTree());
    }

    // Tests if they encode and decode identically to the reference implementation
    dataTrees.forEach((dataTree) => {
      const refEnc = "0x" + ref.rlp.encode(dataTree).toString("hex");
      const impEnc = rlp.encode(dataTree);
      const impDec = rlp.decode(impEnc);
      testing.assertEquals(refEnc, impEnc);
      testing.assertEquals(JSON.stringify(impDec), JSON.stringify(dataTree));
    });
  },
});

Deno.test("RLP obeys law: `decode(encode(tree)) == tree`", () => {
  const byte_tree = generateByteTree();
  testing.assertEquals(rlp.decode(rlp.encode(byte_tree)), byte_tree);
});

Deno.test("Account must match expected values for complex pre-determined tests", () => {
  const accounts = [
    {
      "address": "0x9d8A62f656a8d1615C1294fd71e9CFb3E4855A4F",
      "publicKey":
        "0x4bc2a31265153f07e70e0bab08724e6b85e217f8cd628ceb62974247bb493382ce28cab79ad7119ee1ad3ebcdb98a16805211530ecc6cfefa1b88e6dff99232a",
      "privateKey":
        "0x4646464646464646464646464646464646464646464646464646464646464646",
      "transactions": [
        {
          "object": {
            "nonce": Nat.fromString("9"),
            "gasPrice": Nat.fromString("20000000000"),
            "gas": Nat.fromString("21000"),
            "to": "0x3535353535353535353535353535353535353535",
            "value": Nat.fromString("1000000000000000000"),
            "data": "0x",
          },
          "signature":
            "0xf86c098504a817c800825208943535353535353535353535353535353535353535880de0b6b3a76400008025a028ef61340bd939bc2195fe537567866003e1a15d3c71ff63e1590620aa636276a067cbe9d8997f761aecb703304b3800ccf555c9f3dc64214b297fb1966a3b6d83",
        },
      ],
    },
    {
      "address": "0xFCAd0B19bB29D4674531d6f115237E16AfCE377c",
      "publicKey":
        "0x4646ae5047316b4230d0086c8acec687f00b1cd9d1dc634f6cb358ac0a9a8ffffe77b4dd0a4bfb95851f3b7355c781dd60f8418fc8a65d14907aff47c903a559",
      "privateKey":
        "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
      "transactions": [
        {
          "object": {
            "nonce": Nat.fromString("0"),
            "gasPrice": Nat.fromString("230000000000"),
            "gas": Nat.fromString("21000"),
            "to": "0xFCAd0B19bB29D4674531d6f115237E16AfCE377c",
            "value": Nat.fromString("1000000000000000000"),
            "data": "0x0123abcd",
          },
          "signature":
            "0xf8708085358d117c0082520894fcad0b19bb29d4674531d6f115237e16afce377c880de0b6b3a7640000840123abcd25a032dbcf46a64b9892df24d8b961d2a52fd66b1dabd3a0d96940fd6795c01d8711a01b86df9475de7451554557d87b69456e3fa95aa5375584bf63d1ffd647a225d9",
          "oldSignature":
            "0xf8708085358d117c0082520894fcad0b19bb29d4674531d6f115237e16afce377c880de0b6b3a7640000840123abcd1ba04e289b471dd4469d5080ce3726b8359d5b0c649e012bbbdde53f9b6580ad21a2a0333663ea96846c112f3878705c8c24a763d1fbf8f97c174d26e350c7ef0d7263",
        },
      ],
    },
  ];

  // For each account
  accounts.forEach(function (correctAccount, i) {
    // Generates an address from this account's private key
    const testAccount = Account.fromPrivate(correctAccount.privateKey);

    // Generated address must match
    testing.assertEquals(testAccount.address, correctAccount.address);

    // For each transaction on this account
    correctAccount.transactions.forEach(function (transaction) {
      // Signs it, uing post-EIP 155 scheme
      const signature = Account.signTransaction(
        transaction.object,
        correctAccount.privateKey,
      );

      // Checks if the signature is as expected
      testing.assertEquals(transaction.signature, signature);

      //// Checks if we can recover the right address
      const recoveredAddress = Account.recoverTransaction(signature);
      testing.assertEquals(testAccount.address, recoveredAddress);

      //// If the test also provides a pre-EIP 155 signature
      if (transaction.oldSignature) {
        let txObj = {};
        for (let key in transaction.object) {
          txObj[key] = transaction.object[key].replace(/^0x$/, "0x0");
        }

        //Signs it, using pre-EIP 155 scheme (using the ethjs-signer lib)
        const oldSignature = ethjs.signer.sign(
          txObj,
          correctAccount.privateKey,
        );

        //// Checks if the signature is as expected
        testing.assertEquals(transaction.oldSignature, oldSignature);

        //// Checks if we can recover the right address from old sigs (using web3)
        const recoveredAddress = Account.recoverTransaction(oldSignature);
        testing.assertEquals(testAccount.address, recoveredAddress);
      }
    });
  });
});

Deno.test("Account can recover the same address that signed", () => {
  for (let x = 0; x < 32; x++) {
    const signer_account = Account.create("");
    const hash = keccak256(generateBytes());
    const sign = Account.sign(hash, signer_account.privateKey, 0);
    const address = Account.recover(hash, sign);

    testing.assertEquals(address, signer_account.address);
  }
});

Deno.test("Account must match the generated address with EthJS-account", () => {
  for (let x = 0; x < 128; x++) {
    const bytes = generateNBytes(32);
    const account = Account.fromPrivate(bytes);
    const ethjs_account = ethjs.account.privateToAccount(bytes);
    testing.assertEquals(account.address, ethjs_account.address);
  }
});
