import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("Greeter");
  const contract = await factory.deploy("Hello, Hardhat!");
  await contract.deployed();
  console.log("Greeter deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
