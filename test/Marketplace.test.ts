import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Marketplace, Marketplace__factory } from "../types/ethers-contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

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
    const [, buyer] = await ethers.getSigners();
    const buyerContract = await contract.connect(buyer);
    await buyerContract.updateAccount(
      "Wesley Rocha",
      "wsr.snf17@uea.edu.br",
      "+55 (92) 9 8210-0440",
      "69050-120"
    );

    console.log(await contract.accounts(buyer.address));
  });
});
