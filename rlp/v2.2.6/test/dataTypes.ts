import * as testing from "../../../test_deps.js";
import {
  BN,
  Buffer,
} from "../deps.js";
import * as RLP from "../mod.ts";

Deno.test({
  name: "should not crash on an invalid rlp",
  fn() {
    const errCases = [
      // deno-fmt-ignore
      {input: Buffer.from([239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 239, 191, 189, 29, 239, 191, 189, 77, 239, 191, 189, 239, 191, 189, 239, 191, 189, 93, 122, 239, 191, 189, 239, 191, 189, 239, 191, 189, 103, 239, 191, 189, 239, 191, 189, 239, 191, 189, 26, 239, 191, 189, 18, 69, 27, 239, 191, 189, 239, 191, 189, 116, 19, 239, 191, 189, 239, 191, 189, 66, 239, 191, 189, 64, 212, 147, 71, 239, 191, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 239, 191, 189, 11, 222, 155, 122, 54, 42, 194, 169, 239, 191, 189, 70, 239, 191, 189, 72, 239, 191, 189, 239, 191, 189, 54, 53, 239, 191, 189, 100, 73, 239, 191, 189, 55, 239, 191, 189, 239, 191, 189, 59, 1, 239, 191, 189, 109, 239, 191, 189, 239, 191, 189, 93, 239, 191, 189, 208, 128, 239, 191, 189, 239, 191, 189, 0, 239, 191, 189, 239, 191, 189, 239, 191, 189, 15, 66, 64, 239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 4, 239, 191, 189, 79, 103, 239, 191, 189, 85, 239, 191, 189, 239, 191, 189, 239, 191, 189, 74, 239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 54, 239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 239, 191, 189, 83, 239, 191, 189, 14, 239, 191, 189, 239, 191, 189, 239, 191, 189, 4, 63, 239, 191, 189, 63, 239, 191, 189, 41, 239, 191, 189, 239, 191, 189, 239, 191, 189, 67, 28, 239, 191, 189, 239, 191, 189, 11, 239, 191, 189, 31, 239, 191, 189, 239, 191, 189, 104, 96, 100, 239, 191, 189, 239, 191, 189, 12, 239, 191, 189, 239, 191, 189, 206, 152, 239, 191, 189, 239, 191, 189, 31, 112, 111, 239, 191, 189, 239, 191, 189, 65, 239, 191, 189, 41, 239, 191, 189, 239, 191, 189, 53, 84, 11, 239, 191, 189, 239, 191, 189, 12, 102, 24, 12, 42, 105, 109, 239, 191, 189, 58, 239, 191, 189, 4, 239, 191, 189, 104, 82, 9, 239, 191, 189, 6, 66, 91, 43, 38, 102, 117, 239, 191, 189, 105, 239, 191, 189, 239, 191, 189, 239, 191, 189, 89, 127, 239, 191, 189, 114])},
      {
        input: Buffer.from("efdebd", "hex"),
        msg: "invalid RLP: not enough bytes for string length",
      },
      {
        input: Buffer.from("efb83600", "hex"),
        msg: "invalid RLP: expected string length to be greater than 55",
      },
      {
        input: Buffer.from(
          "efdebdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          "hex",
        ),
        msg: "invalid RLP: not enough bytes for string",
      },
    ];

    errCases.forEach(({ input, msg }) => {
      try {
        RLP.decode(input);
        testing.assert(false);
      } catch (e) {
        if (msg) {
          testing.assertEquals(e.message, msg);
        } else {
          testing.assert(true);
        }
      }
    });
  },
});

Deno.test({
  name:
    "RLP encoding string should return itself if single byte and less than 0x7f",
  fn() {
    const input = "a";
    const encodedSelf = RLP.encode(input);
    testing.assertEquals(encodedSelf.toString(), input);
    testing.assertEquals(RLP.getLength(encodedSelf), 1);
  },
});

Deno.test("RLP encoding string of length 0-55 should return (0x80+len(data)) plus data", function () {
  const encodedDog = RLP.encode("dog");
  testing.assertEquals(4, encodedDog.length);
  testing.assertEquals(RLP.getLength(encodedDog), 4);
  testing.assertEquals(encodedDog[0], 131);
  testing.assertEquals(encodedDog[1], 100);
  testing.assertEquals(encodedDog[2], 111);
  testing.assertEquals(encodedDog[3], 103);
});

Deno.test("RLP encoding string of length >55 should return 0xb7+len(len(data)) plus len(data) plus data", function () {
  const encodedLongString = RLP.encode(
    "zoo255zoo255zzzzzzzzzzzzssssssssssssssssssssssssssssssssssssssssssssss",
  );
  testing.assertEquals(72, encodedLongString.length);
  testing.assertEquals(RLP.getLength(encodedLongString), 2);
  testing.assertEquals(encodedLongString[0], 184);
  testing.assertEquals(encodedLongString[1], 70);
  testing.assertEquals(encodedLongString[2], 122);
  testing.assertEquals(encodedLongString[3], 111);
  testing.assertEquals(encodedLongString[12], 53);
});

Deno.test("RLP encoding list of length 0-55 should return (0xc0+len(data)) plus data", function () {
  const encodedArrayOfStrings = RLP.encode(["dog", "god", "cat"]);
  testing.assertEquals(13, encodedArrayOfStrings.length);
  testing.assertEquals(encodedArrayOfStrings[0], 204);
  testing.assertEquals(encodedArrayOfStrings[1], 131);
  testing.assertEquals(encodedArrayOfStrings[11], 97);
  testing.assertEquals(encodedArrayOfStrings[12], 116);
});

Deno.test("RLP can encode a BigInt value", function () {
  const encodedBN = RLP.encode(BigInt(3));
  testing.assertEquals(encodedBN[0], 3);
});

Deno.test("RLP can encode a BN value", function () {
  const encodedBN = RLP.encode(new BN(3));
  testing.assertEquals(encodedBN[0], 3);
});

Deno.test("RLP encoding int should return itself if single byte and less than 0x7f", function () {
  const encodedNumber = RLP.encode(15);
  testing.assertEquals(1, encodedNumber.length);
  testing.assertEquals(encodedNumber[0], 15);
});

Deno.test("RLP encoding int of length 0-55 should return (0x80+len(data)) plus data", function () {
  const encodedNumber = RLP.encode(1024);
  testing.assertEquals(3, encodedNumber.length);
  testing.assertEquals(encodedNumber[0], 130);
  testing.assertEquals(encodedNumber[1], 4);
  testing.assertEquals(encodedNumber[2], 0);
});

Deno.test("RLP encoding handles zero correctly", function () {
  testing.assertEquals(RLP.encode(0).toString("hex"), "80");
});

Deno.test("RLP decoding string first byte < 0x7f, returns byte itself", function () {
  const decodedStr = RLP.decode(Buffer.from([97]));
  testing.assertEquals(1, decodedStr.length);
  testing.assertEquals(decodedStr.toString(), "a");
});

Deno.test("RLP decoding string first byte < 0xb7, return everything except first byte", function () {
  const decodedStr = RLP.decode(Buffer.from([131, 100, 111, 103]));
  testing.assertEquals(3, decodedStr.length);
  testing.assertEquals(decodedStr.toString(), "dog");
});

Deno.test("RLP decodes array correctly", function () {
  // deno-fmt-ignore
  const decodedBufferArray = RLP.decode(Buffer.from([204, 131, 100, 111, 103, 131, 103, 111, 100, 131, 99, 97, 116]))
  testing.assertEquals(decodedBufferArray, [
    Buffer.from("dog"),
    Buffer.from("god"),
    Buffer.from("cat"),
  ]);
});

Deno.test("RLP decoding number first byte first byte < 0x7f, return itself", function () {
  const decodedSmallNum = RLP.decode(Buffer.from([15]));
  testing.assertEquals(1, decodedSmallNum.length);
  testing.assertEquals(decodedSmallNum[0], 15);
});

Deno.test("RLP decoding number byte first byte < 0xb7, data is everything except first byte", function () {
  const decodedNum = RLP.decode(Buffer.from([130, 4, 0]));
  testing.assertEquals(2, decodedNum.length);
  testing.assertEquals(decodedNum.toString("hex"), "0400");
});

Deno.test("RLP handles strings over 55 bytes long", function () {
  const testString =
    "This function takes in a data, convert it to buffer if not, and a length for recursion";
  const testBuffer = Buffer.from(testString);

  const encoded = RLP.encode(testBuffer);
  testing.assertEquals(encoded[0], 184);
  testing.assertEquals(encoded[1], 86);

  testing.assertEquals(RLP.decode(encoded).toString(), testString);
});

Deno.test("RLP handles a list over 55 bytes long", function () {
  // deno-fmt-ignore
  const testString = ['This', 'function', 'takes', 'in', 'a', 'data', 'convert', 'it', 'to', 'buffer', 'if', 'not', 'and', 'a', 'length', 'for', 'recursion', 'a1', 'a2', 'a3', 'ia4', 'a5', 'a6', 'a7', 'a8', 'ba9']
  const encoded = RLP.encode(testString);
  const decodedBuffer = RLP.decode(encoded);
  const decoded: string[] = [];
  for (let i = 0; i < decodedBuffer.length; i++) {
    decoded[i] = decodedBuffer[i].toString();
  }
  testing.assertEquals(decoded, testString);
});

Deno.test("RLP handles nested lists", function () {
  // deno-fmt-ignore
  const nestedList = [
    [],
    [
      []
    ],
    [
      [],
      [
        []
      ]
    ]
  ];
  const valueList = [
    [1, 2, 3],
    [
      Buffer.from([4, 5, 6]),
      Buffer.from([7, 8, 9]),
      [Buffer.from([0]), Buffer.from("abcd", "hex")],
    ],
  ];
  const encoded = RLP.encode(nestedList);
  testing.assertEquals(
    encoded,
    Buffer.from([0xc7, 0xc0, 0xc1, 0xc0, 0xc3, 0xc0, 0xc1, 0xc0]),
  );
  testing.assertEquals(nestedList, RLP.decode(encoded));

  const valueEncoded = RLP.encode(valueList);
  testing.assertEquals(
    valueEncoded,
    // deno-fmt-ignore
    Buffer.from([0xd2, 0xc3, 0x01, 0x02, 0x03, 0xcd, 0x83, 0x04, 0x05, 0x06, 0x83, 0x07, 0x08, 0x09, 0xc4, 0x00, 0x82, 0xab, 0xcd]),
  );
});

Deno.test("RLP handles typed lists", function () {
  const valueList = [
    [1, 2, 3],
    [
      new Uint8Array([4, 5, 6]),
      new Uint8Array([7, 8, 9]),
      [new Uint8Array([0]), Buffer.from("abcd", "hex")],
    ],
  ];

  testing.assertEquals(
    RLP.encode(valueList),
    // deno-fmt-ignore
    new Buffer([0xd2, 0xc3, 0x01, 0x02, 0x03, 0xcd, 0x83, 0x04, 0x05, 0x06, 0x83, 0x07, 0x08, 0x09, 0xc4, 0x00, 0x82, 0xab, 0xcd]),
  );
});

Deno.test("RLP handles null values", function () {
  const nestedList = [null];
  let encoded = RLP.encode(nestedList);
  testing.assertEquals(encoded, Buffer.from([0xc1, 0x80]));

  testing.assertEquals(Buffer.from([]), RLP.decode(Buffer.from("80", "hex")));
});

Deno.test("RLP handles zero", function () {
  let encoded = RLP.encode(Buffer.from([0]));
  testing.assertEquals(encoded, Buffer.from([0]));

  testing.assertEquals(RLP.decode(Buffer.from([0])), Buffer.from([0]));
});

Deno.test("RLP handles empty values", function () {
  testing.assertEquals(
    RLP.decode(Buffer.from([])),
    Buffer.from([]),
  );
});

Deno.test("RLP fails on wrong encoded zero", function () {
  const val = Buffer.from(
    "f9005f030182520894b94f5374fce5edbc8e2a8697c15331677e6ebf0b0a801ca098ff921201554726367d2be8c804a7ff89ccf285ebc57dff8ae4c44b9c19ac4aa08887321be575c8095f789dd4c743dfe42c1820f9231f98a962b210e3ac2452a3",
    "hex",
  );

  testing.assertThrows(() => RLP.decode(val));
});

Deno.test("RLP fails on invalid length", function () {
  const a = Buffer.from(
    "f86081000182520894b94f5374fce5edbc8e2a8697c15331677e6ebf0b0a801ca098ff921201554726367d2be8c804a7ff89ccf285ebc57dff8ae4c44b9c19ac4aa08887321be575c8095f789dd4c743dfe42c1820f9231f98a962b210e3ac2452a3",
    "hex",
  );

  testing.assertThrows(() => RLP.decode(a));
});

Deno.test("RLP fails on extra data at end", function () {
  const c =
    "f90260f901f9a02a3c692012a15502ba9c39f3aebb36694eed978c74b52e6c0cf210d301dbf325a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a0b6c9fd1447d0b414a1f05957927746f58ef5a2ebde17db631d460eaf6a93b18da0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000001832fefd8825208845509814280a00451dd53d9c09f3cfb627b51d9d80632ed801f6330ee584bffc26caac9b9249f88c7bffe5ebd94cc2ff861f85f800a82c35094095e7baea6a6c7c4c2dfeb977efac326af552d870a801ba098c3a099885a281885f487fd37550de16436e8c47874cd213531b10fe751617fa044b6b81011ce57bffcaf610bf728fb8a7237ad261ea2d937423d78eb9e137076c0ef";

  const a = Buffer.from(c, "hex");

  testing.assertThrows(() => RLP.decode(a));
});

Deno.test("RLP fails on extra data at end", function () {
  const c =
    "f9ffffffc260f901f9a02a3c692012a15502ba9c39f3aebb36694eed978c74b52e6c0cf210d301dbf325a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a0b6c9fd1447d0b414a1f05957927746f58ef5a2ebde17db631d460eaf6a93b18da0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000001832fefd8825208845509814280a00451dd53d9c09f3cfb627b51d9d80632ed801f6330ee584bffc26caac9b9249f88c7bffe5ebd94cc2ff861f85f800a82c35094095e7baea6a6c7c4c2dfeb977efac326af552d870a801ba098c3a099885a281885f487fd37550de16436e8c47874cd213531b10fe751617fa044b6b81011ce57bffcaf610bf728fb8a7237ad261ea2d937423d78eb9e137076c0";

  const a = Buffer.from(c, "hex");

  testing.assertThrows(() => RLP.decode(a));
});

Deno.test("RLP fails on list length longer than data", function () {
  const c =
    "f9ffffffc260f901f9a02a3c692012a15502ba9c39f3aebb36694eed978c74b52e6c0cf210d301dbf325a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a0b6c9fd1447d0b414a1f05957927746f58ef5a2ebde17db631d460eaf6a93b18da0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000001832fefd8825208845509814280a00451dd53d9c09f3cfb627b51d9d80632ed801f6330ee584bffc26caac9b9249f88c7bffe5ebd94cc2ff861f85f800a82c35094095e7baea6a6c7c4c2dfeb977efac326af552d870a801ba098c3a099885a281885f487fd37550de16436e8c47874cd213531b10fe751617fa044b6b81011ce57bffcaf610bf728fb8a7237ad261ea2d937423d78eb9e137076c0";

  const a = Buffer.from(c, "hex");

  testing.assertThrows(() => RLP.decode(a));
});

Deno.test("RLP handles prefixed and non-prefixed hex values", function () {
  const a = RLP.encode("0x88f");
  const b = RLP.encode("88f");
  testing.assertNotEquals(a.toString("hex"), b.toString("hex"));
});
