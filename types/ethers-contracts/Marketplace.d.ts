/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MarketplaceInterface extends ethers.utils.Interface {
  functions: {
    "accountList(uint256)": FunctionFragment;
    "accounts(address)": FunctionFragment;
    "addProduct(string,string,uint256,uint256)": FunctionFragment;
    "buyProduct(uint256,uint256)": FunctionFragment;
    "cancelOrder(uint256)": FunctionFragment;
    "getOrderCount()": FunctionFragment;
    "getProductCount()": FunctionFragment;
    "orderList(uint256)": FunctionFragment;
    "orders(uint256)": FunctionFragment;
    "productList(uint256)": FunctionFragment;
    "products(uint256)": FunctionFragment;
    "receiveProduct(uint256)": FunctionFragment;
    "shipProduct(uint256)": FunctionFragment;
    "updateAccount(string,string,string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "accounts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addProduct",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "productList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shipProduct",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAccount",
    values: [string, string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "productList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shipProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAccount",
    data: BytesLike
  ): Result;

  events: {};
}

export class Marketplace extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MarketplaceInterface;

  functions: {
    accountList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "accountList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        phone: string;
        postalCode: string;
      }
    >;

    "accounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        phone: string;
        postalCode: string;
      }
    >;

    addProduct(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addProduct(string,string,uint256,uint256)"(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    buyProduct(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyProduct(uint256,uint256)"(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    cancelOrder(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getOrderCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { orderCount: BigNumber }>;

    "getOrderCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { orderCount: BigNumber }>;

    getProductCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { productCount: BigNumber }>;

    "getProductCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { productCount: BigNumber }>;

    orderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "orderList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        status: string;
        productId: BigNumber;
        buyerId: string;
        sellerId: string;
        payment: BigNumber;
        productQuantity: BigNumber;
      }
    >;

    "orders(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        status: string;
        productId: BigNumber;
        buyerId: string;
        sellerId: string;
        payment: BigNumber;
        productQuantity: BigNumber;
      }
    >;

    productList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "productList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        name: string;
        description: string;
        price: BigNumber;
        quantity: BigNumber;
        sellerId: string;
      }
    >;

    "products(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        name: string;
        description: string;
        price: BigNumber;
        quantity: BigNumber;
        sellerId: string;
      }
    >;

    receiveProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receiveProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    shipProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "shipProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateAccount(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateAccount(string,string,string,string)"(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accountList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "accountList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  accounts(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string] & {
      id: string;
      name: string;
      email: string;
      phone: string;
      postalCode: string;
    }
  >;

  "accounts(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string] & {
      id: string;
      name: string;
      email: string;
      phone: string;
      postalCode: string;
    }
  >;

  addProduct(
    name: string,
    description: string,
    price: BigNumberish,
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addProduct(string,string,uint256,uint256)"(
    name: string,
    description: string,
    price: BigNumberish,
    quantity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  buyProduct(
    productId: BigNumberish,
    quantity: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyProduct(uint256,uint256)"(
    productId: BigNumberish,
    quantity: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  cancelOrder(
    orderId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "cancelOrder(uint256)"(
    orderId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getOrderCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getProductCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getProductCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  orderList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "orderList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orders(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
      id: BigNumber;
      status: string;
      productId: BigNumber;
      buyerId: string;
      sellerId: string;
      payment: BigNumber;
      productQuantity: BigNumber;
    }
  >;

  "orders(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
      id: BigNumber;
      status: string;
      productId: BigNumber;
      buyerId: string;
      sellerId: string;
      payment: BigNumber;
      productQuantity: BigNumber;
    }
  >;

  productList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "productList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  products(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, BigNumber, string] & {
      id: BigNumber;
      name: string;
      description: string;
      price: BigNumber;
      quantity: BigNumber;
      sellerId: string;
    }
  >;

  "products(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber, BigNumber, string] & {
      id: BigNumber;
      name: string;
      description: string;
      price: BigNumber;
      quantity: BigNumber;
      sellerId: string;
    }
  >;

  receiveProduct(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receiveProduct(uint256)"(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  shipProduct(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "shipProduct(uint256)"(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateAccount(
    name: string,
    email: string,
    phone: string,
    postalCode: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateAccount(string,string,string,string)"(
    name: string,
    email: string,
    phone: string,
    postalCode: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    accountList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "accountList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        phone: string;
        postalCode: string;
      }
    >;

    "accounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        phone: string;
        postalCode: string;
      }
    >;

    addProduct(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addProduct(string,string,uint256,uint256)"(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyProduct(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyProduct(uint256,uint256)"(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getOrderCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProductCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getProductCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    orderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "orderList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        status: string;
        productId: BigNumber;
        buyerId: string;
        sellerId: string;
        payment: BigNumber;
        productQuantity: BigNumber;
      }
    >;

    "orders(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber] & {
        id: BigNumber;
        status: string;
        productId: BigNumber;
        buyerId: string;
        sellerId: string;
        payment: BigNumber;
        productQuantity: BigNumber;
      }
    >;

    productList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "productList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        name: string;
        description: string;
        price: BigNumber;
        quantity: BigNumber;
        sellerId: string;
      }
    >;

    "products(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        name: string;
        description: string;
        price: BigNumber;
        quantity: BigNumber;
        sellerId: string;
      }
    >;

    receiveProduct(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shipProduct(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "shipProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAccount(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateAccount(string,string,string,string)"(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    accountList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "accountList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "accounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addProduct(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addProduct(string,string,uint256,uint256)"(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    buyProduct(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyProduct(uint256,uint256)"(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    cancelOrder(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getOrderCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getOrderCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProductCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getProductCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    orderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "orderList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "orders(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    productList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "productList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    products(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "products(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receiveProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    shipProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "shipProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateAccount(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateAccount(string,string,string,string)"(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "accountList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "accounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addProduct(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addProduct(string,string,uint256,uint256)"(
      name: string,
      description: string,
      price: BigNumberish,
      quantity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    buyProduct(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyProduct(uint256,uint256)"(
      productId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getOrderCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOrderCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProductCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getProductCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "orderList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "orders(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    productList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "productList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    products(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "products(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receiveProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    shipProduct(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "shipProduct(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateAccount(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateAccount(string,string,string,string)"(
      name: string,
      email: string,
      phone: string,
      postalCode: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
