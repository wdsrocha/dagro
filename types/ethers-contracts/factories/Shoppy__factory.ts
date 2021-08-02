/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Shoppy } from "../Shoppy";

export class Shoppy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Shoppy> {
    return super.deploy(overrides || {}) as Promise<Shoppy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Shoppy {
    return super.attach(address) as Shoppy;
  }
  connect(signer: Signer): Shoppy__factory {
    return super.connect(signer) as Shoppy__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Shoppy {
    return new Contract(address, _abi, signerOrProvider) as Shoppy;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_productId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allProducts",
    outputs: [
      {
        internalType: "string",
        name: "productId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_productId",
        type: "string",
      },
    ],
    name: "buyProduct",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_productId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_purchaseId",
        type: "uint256",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_deliveryAddress",
        type: "string",
      },
    ],
    name: "createAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getOrdersPlaced",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_purchaseId",
        type: "uint256",
      },
    ],
    name: "getShipmentDetails",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "myOrders",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_productId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_purchaseId",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "sellerSignUp",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sellers",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bankGuaraantee",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "bgPaid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_purchaseId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_shipmentDetails",
        type: "string",
      },
    ],
    name: "updateShipment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613b64806100606000396000f3fe6080604052600436106100c25760003560e01c80639617e8851161007f578063cfaaef5611610059578063cfaaef5614610258578063edd924161461029a578063f800d332146102b6578063fd6141de146102df576100c2565b80639617e885146101d3578063a3061742146101ef578063bc53c0c41461022f576100c2565b80631e1cdf6c146100c7578063364e022f146100e35780635f22ba3b146100ff578063693d70aa146101285780636d47ab72146101685780638da5cb5b146101a8575b600080fd5b6100e160048036038101906100dc9190612c09565b61031f565b005b6100fd60048036038101906100f89190612c09565b6105dd565b005b34801561010b57600080fd5b5061012660048036038101906101219190612e3d565b610ecc565b005b34801561013457600080fd5b5061014f600480360381019061014a9190612e10565b610fd8565b60405161015f94939291906131f7565b60405180910390f35b34801561017457600080fd5b5061018f600480360381019061018a9190612bdc565b6112ff565b60405161019f94939291906131ab565b60405180910390f35b3480156101b457600080fd5b506101bd6113e4565b6040516101ca9190613190565b60405180910390f35b6101ed60048036038101906101e89190612db4565b611408565b005b3480156101fb57600080fd5b5061021660048036038101906102119190612e10565b61182c565b6040516102269493929190613321565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612c52565b611b57565b005b34801561026457600080fd5b5061027f600480360381019061027a9190612e10565b611cbc565b604051610291969594939291906132ab565b60405180910390f35b6102b460048036038101906102af9190612db4565b611ecd565b005b3480156102c257600080fd5b506102dd60048036038101906102d89190612cf9565b612233565b005b3480156102eb57600080fd5b5061030660048036038101906103019190612e10565b6125da565b6040516103169493929190613251565b60405180910390f35b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156103af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a690613454565b60405180910390fd5b674563918244f4000034146103f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f090613434565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561045f573d6000803e3d6000fd5b5080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906104b6929190612a12565b5033600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555050565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1661066c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066390613474565b60405180910390fd5b60048160405161067c9190613162565b90815260200160405180910390206002015434146106cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c690613374565b60405180910390fd5b6004816040516106df9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610756573d6000803e3d6000fd5b506001600081548092919061076a90613685565b91905055600281905550600060405180608001604052808381526020016040518060400160405280601881526020017f4f7264657220506c6163656420576974682053656c6c6572000000000000000081525081526020016002548152602001600760006004866040516107de9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006002548152602001908152602001600020600201805461086b90613622565b80601f016020809104026020016040519081016040528092919081815260200182805461089790613622565b80156108e45780601f106108b9576101008083540402835291602001916108e4565b820191906000526020600020905b8154815290600101906020018083116108c757829003601f168201915b50505050508152509050600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000019080519060200190610973929190612a12565b506020820151816001019080519060200190610990929190612a12565b506040820151816002015560608201518160030190805190602001906109b7929190612a12565b5050506000604051806060016040528084815260200160025481526020013373ffffffffffffffffffffffffffffffffffffffff16815250905060066000600485604051610a059190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000019080519060200190610ab7929190612a12565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050508260076000600486604051610b209190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060025481526020019081526020016000206000019080519060200190610bb5929190612a12565b503360076000600486604051610bcb9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060025460076000600486604051610ca29190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060010181905550600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160076000600486604051610d7e9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006002548152602001908152602001600020600301908054610e0c90613622565b610e17929190612a98565b50600160076000600486604051610e2e9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160146101000a81548160ff021916908315150217905550505050565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160149054906101000a900460ff16610f6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6390613394565b60405180910390fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206002019080519060200190610fd3929190612a12565b505050565b60608060006060600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020600001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600201600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600088815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060030183805461115890613622565b80601f016020809104026020016040519081016040528092919081815260200182805461118490613622565b80156111d15780601f106111a6576101008083540402835291602001916111d1565b820191906000526020600020905b8154815290600101906020018083116111b457829003601f168201915b505050505093508280546111e490613622565b80601f016020809104026020016040519081016040528092919081815260200182805461121090613622565b801561125d5780601f106112325761010080835404028352916020019161125d565b820191906000526020600020905b81548152906001019060200180831161124057829003601f168201915b5050505050925080805461127090613622565b80601f016020809104026020016040519081016040528092919081815260200182805461129c90613622565b80156112e95780601f106112be576101008083540402835291602001916112e9565b820191906000526020600020905b8154815290600101906020018083116112cc57829003601f168201915b5050505050905093509350935093509193509193565b600360205280600052604060002060009150905080600001805461132290613622565b80601f016020809104026020016040519081016040528092919081815260200182805461134e90613622565b801561139b5780601f106113705761010080835404028352916020019161139b565b820191906000526020600020905b81548152906001019060200180831161137e57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900460ff16905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600760006004856040516114339190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461152a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611521906133f4565b60405180910390fd5b6007600060048460405161153e9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160149054906101000a900460ff1661160d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611604906134b4565b60405180910390fd5b604051806060016040528060328152602001613ad4603291396007600060048560405161163a9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060020190805190602001906116cd929190612a12565b506001600760006004856040516116e49190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160156101000a81548160ff0219169083151502179055506000600760006004856040516117919190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160146101000a81548160ff0219169083151502179055505050565b60606000806060600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085815481106118845761188361372c565b5b9060005260206000209060030201600001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002086815481106118e6576118e561372c565b5b906000526020600020906003020160010154600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002087815481106119495761194861372c565b5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a81548110611a0d57611a0c61372c565b5b9060005260206000209060030201600101548152602001908152602001600020600201838054611a3c90613622565b80601f0160208091040260200160405190810160405280929190818152602001828054611a6890613622565b8015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b50505050509350808054611ac890613622565b80601f0160208091040260200160405190810160405280929190818152602001828054611af490613622565b8015611b415780601f10611b1657610100808354040283529160200191611b41565b820191906000526020600020905b815481529060010190602001808311611b2457829003601f168201915b5050505050905093509350935093509193509193565b82600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190611bad929190612a12565b5081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019080519060200190611c04929190612a12565b5080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002019080519060200190611c5b929190612a12565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff021916908315150217905550505050565b60058181548110611ccc57600080fd5b9060005260206000209060050201600091509050806000018054611cef90613622565b80601f0160208091040260200160405190810160405280929190818152602001828054611d1b90613622565b8015611d685780601f10611d3d57610100808354040283529160200191611d68565b820191906000526020600020905b815481529060010190602001808311611d4b57829003601f168201915b505050505090806001018054611d7d90613622565b80601f0160208091040260200160405190810160405280929190818152602001828054611da990613622565b8015611df65780601f10611dcb57610100808354040283529160200191611df6565b820191906000526020600020905b815481529060010190602001808311611dd957829003601f168201915b505050505090806002015490806003018054611e1190613622565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3d90613622565b8015611e8a5780601f10611e5f57610100808354040283529160200191611e8a565b820191906000526020600020905b815481529060010190602001808311611e6d57829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060040160159054906101000a900460ff16611f6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f64906133b4565b60405180910390fd5b60076000600484604051611f819190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160149054906101000a900460ff1615612051576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161204890613494565b60405180910390fd5b6004826040516120619190613162565b90815260200160405180910390206002015434146120b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120ab906134d4565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561216d573d6000803e3d6000fd5b50604051806060016040528060298152602001613b06602991396007600060048560405161219b9190613162565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600201908051906020019061222e929190612a12565b505050565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff166122c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122b9906133d4565b60405180910390fd5b6004846040516122d29190613162565b908152602001604051809103902060040160149054906101000a900460ff1615612331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232890613414565b60405180910390fd5b60006040518060c001604052808681526020018581526020018481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016001151581525090508460048660405161238c9190613162565b908152602001604051809103902060000190805190602001906123b0929190612a12565b50836004866040516123c29190613162565b908152602001604051809103902060010190805190602001906123e6929190612a12565b50826004866040516123f89190613162565b9081526020016040518091039020600201819055508160048660405161241e9190613162565b90815260200160405180910390206003019080519060200190612442929190612a12565b50336004866040516124549190613162565b908152602001604051809103902060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016004866040516124b59190613162565b908152602001604051809103902060040160146101000a81548160ff02191690831515021790555060058190806001815401808255809150506001900390600052602060002090600502016000909190919091506000820151816000019080519060200190612525929190612a12565b506020820151816001019080519060200190612542929190612a12565b50604082015181600201556060820151816003019080519060200190612569929190612a12565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff02191690831515021790555050505050505050565b60608060006060600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085815481106126325761263161372c565b5b9060005260206000209060040201600001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002086815481106126945761269361372c565b5b9060005260206000209060040201600101600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002087815481106126f6576126f561372c565b5b906000526020600020906004020160020154600760006004600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208b8154811061275f5761275e61372c565b5b906000526020600020906004020160000160405161277d9190613179565b908152602001604051809103902060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a8154811061283c5761283b61372c565b5b906000526020600020906004020160020154815260200190815260200160002060020183805461286b90613622565b80601f016020809104026020016040519081016040528092919081815260200182805461289790613622565b80156128e45780601f106128b9576101008083540402835291602001916128e4565b820191906000526020600020905b8154815290600101906020018083116128c757829003601f168201915b505050505093508280546128f790613622565b80601f016020809104026020016040519081016040528092919081815260200182805461292390613622565b80156129705780601f1061294557610100808354040283529160200191612970565b820191906000526020600020905b81548152906001019060200180831161295357829003601f168201915b5050505050925080805461298390613622565b80601f01602080910402602001604051908101604052809291908181526020018280546129af90613622565b80156129fc5780601f106129d1576101008083540402835291602001916129fc565b820191906000526020600020905b8154815290600101906020018083116129df57829003601f168201915b5050505050905093509350935093509193509193565b828054612a1e90613622565b90600052602060002090601f016020900481019282612a405760008555612a87565b82601f10612a5957805160ff1916838001178555612a87565b82800160010185558215612a87579182015b82811115612a86578251825591602001919060010190612a6b565b5b509050612a949190612b25565b5090565b828054612aa490613622565b90600052602060002090601f016020900481019282612ac65760008555612b14565b82601f10612ad75780548555612b14565b82800160010185558215612b1457600052602060002091601f016020900482015b82811115612b13578254825591600101919060010190612af8565b5b509050612b219190612b25565b5090565b5b80821115612b3e576000816000905550600101612b26565b5090565b6000612b55612b5084613519565b6134f4565b905082815260208101848484011115612b7157612b7061378f565b5b612b7c8482856135e0565b509392505050565b600081359050612b9381613aa5565b92915050565b600082601f830112612bae57612bad61378a565b5b8135612bbe848260208601612b42565b91505092915050565b600081359050612bd681613abc565b92915050565b600060208284031215612bf257612bf1613799565b5b6000612c0084828501612b84565b91505092915050565b600060208284031215612c1f57612c1e613799565b5b600082013567ffffffffffffffff811115612c3d57612c3c613794565b5b612c4984828501612b99565b91505092915050565b600080600060608486031215612c6b57612c6a613799565b5b600084013567ffffffffffffffff811115612c8957612c88613794565b5b612c9586828701612b99565b935050602084013567ffffffffffffffff811115612cb657612cb5613794565b5b612cc286828701612b99565b925050604084013567ffffffffffffffff811115612ce357612ce2613794565b5b612cef86828701612b99565b9150509250925092565b60008060008060808587031215612d1357612d12613799565b5b600085013567ffffffffffffffff811115612d3157612d30613794565b5b612d3d87828801612b99565b945050602085013567ffffffffffffffff811115612d5e57612d5d613794565b5b612d6a87828801612b99565b9350506040612d7b87828801612bc7565b925050606085013567ffffffffffffffff811115612d9c57612d9b613794565b5b612da887828801612b99565b91505092959194509250565b60008060408385031215612dcb57612dca613799565b5b600083013567ffffffffffffffff811115612de957612de8613794565b5b612df585828601612b99565b9250506020612e0685828601612bc7565b9150509250929050565b600060208284031215612e2657612e25613799565b5b6000612e3484828501612bc7565b91505092915050565b60008060408385031215612e5457612e53613799565b5b6000612e6285828601612bc7565b925050602083013567ffffffffffffffff811115612e8357612e82613794565b5b612e8f85828601612b99565b9150509250929050565b612ea281613598565b82525050565b612eb181613586565b82525050565b612ec0816135aa565b82525050565b6000612ed18261355f565b612edb818561356a565b9350612eeb8185602086016135ef565b612ef48161379e565b840191505092915050565b6000612f0a8261355f565b612f14818561357b565b9350612f248185602086016135ef565b80840191505092915050565b60008154612f3d81613622565b612f47818661357b565b94506001821660008114612f625760018114612f7357612fa6565b60ff19831686528186019350612fa6565b612f7c8561354a565b60005b83811015612f9e57815481890152600182019150602081019050612f7f565b838801955050505b50505092915050565b6000612fbc60278361356a565b9150612fc7826137af565b604082019050919050565b6000612fdf60258361356a565b9150612fea826137fe565b604082019050919050565b6000613002601a8361356a565b915061300d8261384d565b602082019050919050565b600061302560208361356a565b915061303082613876565b602082019050919050565b6000613048603c8361356a565b91506130538261389f565b604082019050919050565b600061306b603a8361356a565b9150613076826138ee565b604082019050919050565b600061308e601f8361356a565b91506130998261393d565b602082019050919050565b60006130b1601a8361356a565b91506130bc82613966565b602082019050919050565b60006130d4601d8361356a565b91506130df8261398f565b602082019050919050565b60006130f760258361356a565b9150613102826139b8565b604082019050919050565b600061311a60298361356a565b915061312582613a07565b604082019050919050565b600061313d60248361356a565b915061314882613a56565b604082019050919050565b61315c816135d6565b82525050565b600061316e8284612eff565b915081905092915050565b60006131858284612f30565b915081905092915050565b60006020820190506131a56000830184612e99565b92915050565b600060808201905081810360008301526131c58187612ec6565b90506131d46020830186612ea8565b6131e16040830185613153565b6131ee6060830184612eb7565b95945050505050565b600060808201905081810360008301526132118187612ec6565b905081810360208301526132258186612ec6565b90506132346040830185612ea8565b81810360608301526132468184612ec6565b905095945050505050565b6000608082019050818103600083015261326b8187612ec6565b9050818103602083015261327f8186612ec6565b905061328e6040830185613153565b81810360608301526132a08184612ec6565b905095945050505050565b600060c08201905081810360008301526132c58189612ec6565b905081810360208301526132d98188612ec6565b90506132e86040830187613153565b81810360608301526132fa8186612ec6565b90506133096080830185612e99565b61331660a0830184612eb7565b979650505050505050565b6000608082019050818103600083015261333b8187612ec6565b905061334a6020830186613153565b6133576040830185612ea8565b81810360608301526133698184612ec6565b905095945050505050565b6000602082019050818103600083015261338d81612faf565b9050919050565b600060208201905081810360008301526133ad81612fd2565b9050919050565b600060208201905081810360008301526133cd81612ff5565b9050919050565b600060208201905081810360008301526133ed81613018565b9050919050565b6000602082019050818103600083015261340d8161303b565b9050919050565b6000602082019050818103600083015261342d8161305e565b9050919050565b6000602082019050818103600083015261344d81613081565b9050919050565b6000602082019050818103600083015261346d816130a4565b9050919050565b6000602082019050818103600083015261348d816130c7565b9050919050565b600060208201905081810360008301526134ad816130ea565b9050919050565b600060208201905081810360008301526134cd8161310d565b9050919050565b600060208201905081810360008301526134ed81613130565b9050919050565b60006134fe61350f565b905061350a8282613654565b919050565b6000604051905090565b600067ffffffffffffffff8211156135345761353361375b565b5b61353d8261379e565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000613591826135b6565b9050919050565b60006135a3826135b6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561360d5780820151818401526020810190506135f2565b8381111561361c576000848401525b50505050565b6000600282049050600182168061363a57607f821691505b6020821081141561364e5761364d6136fd565b5b50919050565b61365d8261379e565b810181811067ffffffffffffffff8211171561367c5761367b61375b565b5b80604052505050565b6000613690826135d6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156136c3576136c26136ce565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f56616c7565204d75737420626520457175616c20746f205072696365206f662060008201527f50726f6475637400000000000000000000000000000000000000000000000000602082015250565b7f4f726465722069732065697468657220696e416374697665206f722063616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f4f72646572206973206e6f74205965742043616e63656c6c6564000000000000600082015250565b7f596f7520617265206e6f7420526567697374657265642061732053656c6c6572600082015250565b7f41777720437261702e2e20596f7520617265206e6f7420417574686f72697a6560008201527f6420746f20546869732050726f64756374205075726368617365496400000000602082015250565b7f50726f647563742057697468207468697320496420697320616c72656164792060008201527f4163746976652e20557365206f7468657220556e697175654964000000000000602082015250565b7f42616e6b2047756172616e746565206f66203545544820526571756972656400600082015250565b7f596f752061726520416c72656164792052656769737465726564000000000000600082015250565b7f596f75204d757374204265205265676973746572656420746f20427579000000600082015250565b7f4f726465722069732041637469766520616e64206e6f74207965742043616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f41777720637261702e2e596f7520416c72656164792043616e63656c6564205460008201527f686973206f726465720000000000000000000000000000000000000000000000602082015250565b7f56616c7565204d75737420626520457175616c20746f2050726f64756374205060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b613aae81613586565b8114613ab957600080fd5b50565b613ac5816135d6565b8114613ad057600080fd5b5056fe4f726465722043616e63656c65642042792042757965722c205061796d656e742077696c6c2042652020526566756e6465644f726465722043616e63656c65642042792042757965722c205061796d656e7420526566756e646564a2646970667358221220b951e3711ee6c6e9042ee0f5784d35e477738f26628ef6687e0e27d20ccb567f64736f6c63430008060033";
