import * as Hash from "./hash.js";
import * as Bytes from "./bytes.js";
import * as Desubits from "./desubits.js";

// Bytes -> Bytes
const bytesAddChecksum = (bytes) => {
  const hash = Hash.keccak256(bytes);
  const sum = Bytes.slice(0, 1, hash);
  return Bytes.concat(bytes, sum);
};

// Bytes -> Bool
const bytesChecksum = (bytes) => {
  const length = Bytes.length(bytes);
  const prefix = Bytes.slice(0, length - 1, bytes);
  return bytesAddChecksum(prefix) === bytes;
};

// () ~> Passphrase
export const create = () => {
  const bytes = bytesAddChecksum(Bytes.random(11));
  const seed = Desubits.fromBytes(bytes);
  const passphrase = seed.replace(/([a-z]{8})/g, "$1 ");
  return passphrase;
};

// Passphrase -> Bool
export const checksum = (passphrase) => bytesChecksum(toBytes(passphrase));

// Passphrase -> Bytes
const toBytes = (passphrase) => {
  const seed = passphrase.replace(/ /g, "");
  const bytes = Desubits.toBytes(passphrase);
  return bytes;
};

// Passphrase -> Bytes
export const toMasterKey = (passphrase) => {
  let hash = Hash.keccak256;
  let bytes = toBytes(passphrase);
  for (let i = 0, l = Math.pow(2, 12); i < l; ++i) {
    bytes = hash(bytes);
  }
  return bytes;
};
