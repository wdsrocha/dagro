import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Shoppy, Shoppy__factory } from "../types/ethers-contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";

chai.use(chaiAsPromised);
const { expect } = chai;
const { parseEther } = ethers.utils;

describe("Shoppy", () => {
  let contract: Shoppy;
  let seller: SignerWithAddress;
  let buyer: SignerWithAddress;

  beforeEach(async () => {
    [seller, buyer] = await ethers.getSigners();

    const counterFactory = (await ethers.getContractFactory(
      "Shoppy",
      seller
    )) as Shoppy__factory;
    contract = await counterFactory.deploy();
    await contract.deployed();

    console.log({ contractAddress: contract.address });
    console.log({ sellerAddress: seller.address });

    expect(contract.address).to.properAddress;
  });

  it.only("should work", async () => {
    await expect(contract.sellerSignUp("Enrique")).to.be.revertedWith(
      "Bank Guarantee of 5ETH Required"
    );
    await expect(
      contract.sellerSignUp("Enrique", {
        value: parseEther("5"),
      })
    ).to.be.fulfilled;
    await expect(contract.sellerSignUp("Enrique")).to.be.revertedWith(
      "You are Already Registered"
    );

    const addProduct = contract.addProduct(
      "0",
      "Banana - 1kg",
      parseEther("4"),
      "Manaus",
      "Normal"
    );
    await expect(addProduct).to.be.fulfilled;

    const addProductWithSameId = contract.addProduct(
      "0",
      "Alface - Un.",
      parseEther("3"),
      "Careiro da Várzea",
      "Normal"
    );
    await expect(addProductWithSameId).to.be.revertedWith(
      "Product With this Id is already Active. Use other UniqueId"
    );

    const addAnotherProduct = contract.addProduct(
      "1",
      "Alface - Un.",
      parseEther("3"),
      "Careiro da Várzea",
      "Normal"
    );
    await expect(addAnotherProduct).to.be.fulfilled;

    interface Product {
      id: string;
      name: string;
      price: BigNumber;
      isActive: boolean;
    }
    const products: Product[] = [];
    for (let i = 0; ; i++) {
      try {
        const product = await contract.allProducts(i);
        products.push({
          id: product.productId,
          name: product.name,
          price: product.price,
          isActive: product.isActive,
        });
      } catch (error) {
        break;
      }
    }
    products.forEach((product) => console.log({ product }));

    const productById = products.reduce((acc, product) => {
      if (product.isActive) {
        acc[product.id] = product;
      }
      return acc;
    }, {} as { [id: string]: Product });

    const buyerContract = await contract.connect(buyer);

    await buyerContract.createAccount(
      "Wesley Rocha",
      "wsr.snf17@uea.edu.br",
      "69050-120"
    );

    await buyerContract.buyProduct("0", { value: productById["0"].price });
    await buyerContract.buyProduct("1", { value: productById["1"].price });

    const ordersPlaced = await contract.getOrdersPlaced(0);

    console.log({
      ordersPlaced: JSON.parse(JSON.stringify(ordersPlaced, null, 2)),
    });

    let myOrders = await buyerContract.myOrders(0);
    console.log({ myOrders: JSON.parse(JSON.stringify(myOrders, null, 2)) });

    myOrders = await buyerContract.myOrders(1);
    console.log({ myOrders: JSON.parse(JSON.stringify(myOrders, null, 2)) });
  });
});
