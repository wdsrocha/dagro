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

interface ShoppyInterface extends ethers.utils.Interface {
  functions: {
    "addProduct(string,string,string,uint256,string)": FunctionFragment;
    "allProducts(uint256)": FunctionFragment;
    "buyProduct(string)": FunctionFragment;
    "cancelOrder(string,uint256)": FunctionFragment;
    "createAccount(string,string,string)": FunctionFragment;
    "getOrdersPlaced(uint256)": FunctionFragment;
    "getShipmentDetails(uint256)": FunctionFragment;
    "myOrders(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "refund(string,uint256)": FunctionFragment;
    "sellerSignUp(string)": FunctionFragment;
    "sellers(address)": FunctionFragment;
    "updateShipment(uint256,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [string, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allProducts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buyProduct", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrdersPlaced",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getShipmentDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "myOrders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellerSignUp",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "sellers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateShipment",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrdersPlaced",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShipmentDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "myOrders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellerSignUp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateShipment",
    data: BytesLike
  ): Result;

  events: {};
}

export class Shoppy extends Contract {
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

  interface: ShoppyInterface;

  functions: {
    addProduct(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addProduct(string,string,string,uint256,string)"(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allProducts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, boolean] & {
        productId: string;
        productName: string;
        Category: string;
        price: BigNumber;
        description: string;
        seller: string;
        isActive: boolean;
      }
    >;

    "allProducts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, boolean] & {
        productId: string;
        productName: string;
        Category: string;
        price: BigNumber;
        description: string;
        seller: string;
        isActive: boolean;
      }
    >;

    buyProduct(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyProduct(string)"(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    cancelOrder(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "cancelOrder(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    createAccount(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAccount(string,string,string)"(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getOrdersPlaced(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string, string]>;

    "getOrdersPlaced(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string, string]>;

    getShipmentDetails(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    "getShipmentDetails(uint256)"(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    myOrders(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, string]>;

    "myOrders(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    refund(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "refund(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    sellerSignUp(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sellerSignUp(string)"(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    sellers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean] & {
        name: string;
        addr: string;
        bankGuaraantee: BigNumber;
        bgPaid: boolean;
      }
    >;

    "sellers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean] & {
        name: string;
        addr: string;
        bankGuaraantee: BigNumber;
        bgPaid: boolean;
      }
    >;

    updateShipment(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateShipment(uint256,string)"(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addProduct(
    _productId: string,
    _productName: string,
    _category: string,
    _price: BigNumberish,
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addProduct(string,string,string,uint256,string)"(
    _productId: string,
    _productName: string,
    _category: string,
    _price: BigNumberish,
    _description: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allProducts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, string, boolean] & {
      productId: string;
      productName: string;
      Category: string;
      price: BigNumber;
      description: string;
      seller: string;
      isActive: boolean;
    }
  >;

  "allProducts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, string, boolean] & {
      productId: string;
      productName: string;
      Category: string;
      price: BigNumber;
      description: string;
      seller: string;
      isActive: boolean;
    }
  >;

  buyProduct(
    _productId: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyProduct(string)"(
    _productId: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  cancelOrder(
    _productId: string,
    _purchaseId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "cancelOrder(string,uint256)"(
    _productId: string,
    _purchaseId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  createAccount(
    _name: string,
    _email: string,
    _deliveryAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAccount(string,string,string)"(
    _name: string,
    _email: string,
    _deliveryAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getOrdersPlaced(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string, string]>;

  "getOrdersPlaced(uint256)"(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string, string]>;

  getShipmentDetails(
    _purchaseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string]>;

  "getShipmentDetails(uint256)"(
    _purchaseId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string]>;

  myOrders(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, string]>;

  "myOrders(uint256)"(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, string]>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  refund(
    _productId: string,
    _purchaseId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "refund(string,uint256)"(
    _productId: string,
    _purchaseId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  sellerSignUp(
    _name: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sellerSignUp(string)"(
    _name: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  sellers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, boolean] & {
      name: string;
      addr: string;
      bankGuaraantee: BigNumber;
      bgPaid: boolean;
    }
  >;

  "sellers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, boolean] & {
      name: string;
      addr: string;
      bankGuaraantee: BigNumber;
      bgPaid: boolean;
    }
  >;

  updateShipment(
    _purchaseId: BigNumberish,
    _shipmentDetails: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateShipment(uint256,string)"(
    _purchaseId: BigNumberish,
    _shipmentDetails: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addProduct(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addProduct(string,string,string,uint256,string)"(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allProducts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, boolean] & {
        productId: string;
        productName: string;
        Category: string;
        price: BigNumber;
        description: string;
        seller: string;
        isActive: boolean;
      }
    >;

    "allProducts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, boolean] & {
        productId: string;
        productName: string;
        Category: string;
        price: BigNumber;
        description: string;
        seller: string;
        isActive: boolean;
      }
    >;

    buyProduct(_productId: string, overrides?: CallOverrides): Promise<void>;

    "buyProduct(string)"(
      _productId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrder(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createAccount(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createAccount(string,string,string)"(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getOrdersPlaced(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string, string]>;

    "getOrdersPlaced(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string, string]>;

    getShipmentDetails(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    "getShipmentDetails(uint256)"(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    myOrders(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, string]>;

    "myOrders(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, string]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    refund(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "refund(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sellerSignUp(_name: string, overrides?: CallOverrides): Promise<void>;

    "sellerSignUp(string)"(
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sellers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean] & {
        name: string;
        addr: string;
        bankGuaraantee: BigNumber;
        bgPaid: boolean;
      }
    >;

    "sellers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, boolean] & {
        name: string;
        addr: string;
        bankGuaraantee: BigNumber;
        bgPaid: boolean;
      }
    >;

    updateShipment(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateShipment(uint256,string)"(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addProduct(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addProduct(string,string,string,uint256,string)"(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allProducts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allProducts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buyProduct(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyProduct(string)"(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    cancelOrder(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "cancelOrder(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    createAccount(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAccount(string,string,string)"(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getOrdersPlaced(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOrdersPlaced(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShipmentDetails(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getShipmentDetails(uint256)"(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myOrders(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "myOrders(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "refund(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    sellerSignUp(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sellerSignUp(string)"(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    sellers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "sellers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateShipment(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateShipment(uint256,string)"(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProduct(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addProduct(string,string,string,uint256,string)"(
      _productId: string,
      _productName: string,
      _category: string,
      _price: BigNumberish,
      _description: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allProducts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allProducts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyProduct(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyProduct(string)"(
      _productId: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "cancelOrder(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAccount(string,string,string)"(
      _name: string,
      _email: string,
      _deliveryAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getOrdersPlaced(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOrdersPlaced(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShipmentDetails(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getShipmentDetails(uint256)"(
      _purchaseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myOrders(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "myOrders(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "refund(string,uint256)"(
      _productId: string,
      _purchaseId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    sellerSignUp(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sellerSignUp(string)"(
      _name: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    sellers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sellers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateShipment(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateShipment(uint256,string)"(
      _purchaseId: BigNumberish,
      _shipmentDetails: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}