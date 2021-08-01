import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Shoppy, Shoppy__factory } from "../types/ethers-contracts";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Shoppy", () => {
  let shoppy: Shoppy;

  beforeEach(async () => {
    const [owner] = await ethers.getSigners();

    const counterFactory = (await ethers.getContractFactory(
      "Shoppy",
      owner
    )) as Shoppy__factory;
    shoppy = await counterFactory.deploy();
    await shoppy.deployed();

    expect(shoppy.address).to.properAddress;
  });

  it("should register seller", async () => {
    const transaction = await shoppy.sellerSignUp("seller1", {
      value: ethers.utils.parseEther("5"),
    });
    console.log({ transaction });
  });
});
