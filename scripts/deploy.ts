import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("Marketplace");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Marketplace deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
