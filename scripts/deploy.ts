import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("Shoppy");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Shoppy deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
