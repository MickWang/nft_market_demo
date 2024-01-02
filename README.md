# :full_moon: Kuiper Marketplace 
---
NFT marketplace Smart Contract.

---

## :rocket: Features
* :hammer: Create a new ERC721 collection.
    - :fuelpump: Support setting royalty fees.
* :star: Sell (list item) NFT on the marketplace.
* :star2: Offer listed items on the marketplace.
* :sparkles: Accept an offer on the marketplace.
* :boom: Create an auction on the marketplace.
* :fire: Bid place to auction.
* :european_castle: (Marketplace owner) Support set and update payable token, platform fee.

## Deploy Kuiper Marketplace Smart Contract

1. Install packages.
```bash
npm install
```

2. Compile Smart Contract
```bash
npx hardhat compile
```

3. Deploy Smart Contarct
```bash
npx hardhat run scripts/deploy.ts --network <network>
```
4. Test Smart Contract
```bash
npx hardhat test test/kuiper.ts --network <network>
```

## Marketplace Interafce

1. List NFT on the marketplace.

```
{
      "inputs": [
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_payToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "listNft",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
```

2. Make offer
   ```
       {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_payToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_offerPrice",
          "type": "uint256"
        }
      ],
      "name": "offerNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
   ```
   
3. Accept offer
```
{
      "inputs": [
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_offerer",
          "type": "address"
        }
      ],
      "name": "acceptOfferNFT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
```

