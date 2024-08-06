// This script generates a new private key and prints it to the console.

// Import the secp256k1 library and utils from ethereum-cryptography
const { keccak256 } = require("ethereum-cryptography/keccak");
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

// Generate a random private key
const privateKey = secp256k1.utils.randomPrivateKey();

// Print the private key in hex format
console.log("privateKey: ", toHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey, false);

console.log("publicKey: ", toHex(publicKey));

const keccakHash = keccak256(publicKey.slice(1)).slice(-20);

console.log("address: ", toHex(keccakHash));
