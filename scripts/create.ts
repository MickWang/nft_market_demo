import Contracts from "../output";
import { ethers } from "hardhat";
const contract = require("../artifacts/contracts/KuiperNFTFactory.sol/KuiperNFTFactory.json");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = Contracts.KuiperNFTFactory;
const provider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  API_KEY
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const KuiperNFTFactory = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

// console.log(JSON.stringify(contract.abi));
const Receipt = "0x2c3FeCd23f19876940aDDbaf4442958200b5E68c"; //"0xBda6C92e43331924b69FEdeAcCfd6425a64859d4";
async function main() {
  try {
    await KuiperNFTFactory.createNFTCollection("Mask", "Mask", 9970, Receipt);
  } catch (e) {
    console.log(e);
  }
}
main();
