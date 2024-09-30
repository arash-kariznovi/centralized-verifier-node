const secp = require('ethereum-cryptography/secp256k1');
const {toHex} = require('ethereum-cryptography/utils');
const {keccak256} = require('ethereum-cryptography/keccak');

const privateKey = secp.secp256k1.utils.randomPrivateKey();
console.log('Private key:', `0x${toHex(privateKey)}`);

const publicKey = secp.secp256k1.getPublicKey(privateKey);
console.log('Public key:', `0x${toHex(publicKey)}`);

// similar to ethereum the address is the first 20 bytes of hash of the publickey
const address = keccak256(publicKey.slice(1)).slice(-20);
console.log('address:',`0x${toHex(address)}`);



// Private key: 0x44435efc50120d6641e420927ebf61d47c46fa2c743e323477f4ae2c8f3e87c3
// Public key: 0x0392f42666d2615522984a8d2b5330e475a053ad6c516888b8715c0fc8a5fba42d
// address: 0xdfdc9486b130fa9f4125d4cb867b96dfbbc8b883

// Private key: 0x8f52962b55b7a6a23ad316383ea29e3c1b1d6a110b014edf3f84e2d6dfed5d6d
// Public key: 0x0379a5c7a4c21c40e6b5047d59da2c2a518008125864ab9112bef954b7a83bbd7d
// address: 0x1a60fa97eb7fe0950887b53f831a9d0a00e06a2b

// Private key: 0x3ed3f1a9ae05632fbd597ace4ba93eaf71930543b15710c89c9f4ddd1838634b
// Public key: 0x03362fcfc6a9cae14d0cca23e399fea9496f04b30c1eee3bd3f3846eb98f749255
// address: 0x3c70c043b05b5e864cecf0c07b3d62fbb01c16e4