import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Marketplace, Marketplace__factory } from "../types/ethers-contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { formatEther, formatUnits, parseEther } from "ethers/lib/utils";
import { BigNumber } from "ethers";

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

    contracts[1].addProduct("Abacaxi (un.)", "Delicioso.", parseEther("5"), 1);
    contracts[1].addProduct("Alface (kg.)", "Fresquinho..", parseEther("3"), 1);

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
    await contracts[2].buyProduct(0, 1, {
      value: parseEther("5"),
    });

    await contracts[3].updateAccount(
      "Enrique Izel",
      "enrique.izel@gmail.com",
      "+55 (92) 9 8211-2358",
      "69050-001"
    );
    await expect(
      contracts[3].buyProduct(1, 2, {
        value: parseEther("3"),
      })
    ).to.be.reverted;
    await contracts[3].buyProduct(1, 1, {
      value: parseEther("3"),
    });

    // const sellerBalance = formatEther(await signers[1].getBalance());
    // const buyerBalance = formatEther(await signers[2].getBalance());
    // console.log({
    //   sellerBalance,
    //   buyerBalance,
    // });

    const orderCount = parseInt((await contract.getOrderCount())._hex);
    console.log({ orderCount });
    for (let i = 0; i < orderCount; i++) {
      console.log(await contract.orders(i));
    }

    // console.log(await contract.accounts(buyer.address));
  });
});
