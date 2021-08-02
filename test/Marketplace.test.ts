import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Marketplace, Marketplace__factory } from "../types/ethers-contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { formatEther, formatUnits, parseEther } from "ethers/lib/utils";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Marketplace", () => {
  let contract: Marketplace;
  let seller: SignerWithAddress;
  let buyer: SignerWithAddress;

  beforeEach(async () => {
    [seller, buyer] = await ethers.getSigners();

    const counterFactory = (await ethers.getContractFactory(
      "Marketplace"
    )) as Marketplace__factory;
    contract = await counterFactory.deploy();
    await contract.deployed();

    console.log({ contractAddress: contract.address });
    console.log({ sellerAddress: seller.address });

    expect(contract.address).to.properAddress;
  });

  it.only("should work", async () => {
    const signers = await ethers.getSigners();
    const contracts: Marketplace[] = [];
    for (const signer of signers) {
      contracts.push(await contract.connect(signer));
    }

    await contracts[1].updateAccount(
      "Wesley Rocha",
      "wsr.snf17@uea.edu.br",
      "+55 (92) 9 8210-0440",
      "69050-120"
    );

    contracts[1].addProduct("Abacaxi (un.)", "Delicioso.", parseEther("5"));
    contracts[1].addProduct("Alface (kg.)", "Fresquinho..", parseEther("3"));

    const productCount = parseInt((await contract.getProductCount())._hex);
    console.log({ productCount });
    for (let i = 0; i < productCount; i++) {
      console.log(await contract.products(i));
    }

    await contracts[2].updateAccount(
      "Adham Lucas",
      "adham.lucas@gmail.com",
      "+55 (92) 9 8204-1337",
      "69000-123"
    );

    // contracts.

    // console.log(await contract.accounts(buyer.address));
  });
});
