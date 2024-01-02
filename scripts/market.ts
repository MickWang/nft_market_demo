import { ethers } from "hardhat";
const MarketAbi = require("../artifacts/contracts/KuiperMarketplace.sol/KuiperNFTMarketplace.json");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0x119023Fd971d6ED2649C34fe3ddb75948B65Da84"; // "0xaFb4484c58EDD9AbED5fe0f68DF7Af4E7Dd41e3c"; // change to your nft from createCollection
const provider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  API_KEY
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const Marketplace = new ethers.Contract(CONTRACT_ADDRESS, MarketAbi.abi, signer);

// console.log(JSON.stringify(contract.abi));
const Receipt = "0xeAeE49c44157652d541D8f0847AB79C084ab4682"; //"0xBda6C92e43331924b69FEdeAcCfd6425a64859d4";
async function main() {
  try {
    for (let i = 0; i < 10; i++) {
      await KuiperNFT.safeMint(Receipt, "https://ipfs.io/ip/somtheing");
    }
  } catch (e) {
    console.log(e);
  }
}
main();
