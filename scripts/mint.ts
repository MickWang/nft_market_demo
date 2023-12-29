import { ethers } from "hardhat";
const contract = require("../artifacts/contracts/KuiperNFT.sol/KuiperNFT.json");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0xaFb4484c58EDD9AbED5fe0f68DF7Af4E7Dd41e3c"; // change to your nft from createCollection
const provider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  API_KEY
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const KuiperNFT = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

// console.log(JSON.stringify(contract.abi));
const Receipt = "0xBda6C92e43331924b69FEdeAcCfd6425a64859d4";
async function main() {
  try {
    await KuiperNFT.safeMint(Receipt, "https://ipfs.io/ip/somtheing");
  } catch (e) {
    console.log(e);
  }
}
main();
