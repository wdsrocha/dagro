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
        name: "_location",
        type: "string",
      },
      {
        internalType: "string",
        name: "_method",
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
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "method",
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
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613c92806100606000396000f3fe6080604052600436106100c25760003560e01c80638da5cb5b1161007f578063bc53c0c411610059578063bc53c0c414610258578063cfaaef5614610281578063edd92416146102c4578063fd6141de146102e0576100c2565b80638da5cb5b146101d15780639617e885146101fc578063a306174214610218576100c2565b80631337638a146100c75780631e1cdf6c146100f0578063364e022f1461010c5780635f22ba3b14610128578063693d70aa146101515780636d47ab7214610191575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e99190612de2565b610320565b005b61010a60048036038101906101059190612cf2565b610721565b005b61012660048036038101906101219190612cf2565b6109df565b005b34801561013457600080fd5b5061014f600480360381019061014a9190612f56565b6112ce565b005b34801561015d57600080fd5b5061017860048036038101906101739190612f29565b6113da565b6040516101889493929190613310565b60405180910390f35b34801561019d57600080fd5b506101b860048036038101906101b39190612cc5565b611701565b6040516101c894939291906132c4565b60405180910390f35b3480156101dd57600080fd5b506101e66117e6565b6040516101f391906132a9565b60405180910390f35b61021660048036038101906102119190612ecd565b61180a565b005b34801561022457600080fd5b5061023f600480360381019061023a9190612f29565b611c2e565b60405161024f949392919061344f565b60405180910390f35b34801561026457600080fd5b5061027f600480360381019061027a9190612d3b565b611f59565b005b34801561028d57600080fd5b506102a860048036038101906102a39190612f29565b6120be565b6040516102bb97969594939291906133c4565b60405180910390f35b6102de60048036038101906102d99190612ecd565b61235d565b005b3480156102ec57600080fd5b5061030760048036038101906103029190612f29565b6126c3565b604051610317949392919061336a565b60405180910390f35b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff166103af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a690613502565b60405180910390fd5b6004856040516103bf919061327b565b908152602001604051809103902060050160149054906101000a900460ff161561041e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041590613542565b60405180910390fd5b60006040518060e001604052808781526020018681526020018581526020018481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016001151581525090508560048760405161047f919061327b565b908152602001604051809103902060000190805190602001906104a3929190612afb565b50846004876040516104b5919061327b565b908152602001604051809103902060010190805190602001906104d9929190612afb565b50836004876040516104eb919061327b565b90815260200160405180910390206002018190555082600487604051610511919061327b565b90815260200160405180910390206003019080519060200190610535929190612afb565b5081600487604051610547919061327b565b9081526020016040518091039020600401908051906020019061056b929190612afb565b503360048760405161057d919061327b565b908152602001604051809103902060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016004876040516105de919061327b565b908152602001604051809103902060050160146101000a81548160ff0219169083151502179055506005819080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015181600001908051906020019061064e929190612afb565b50602082015181600101908051906020019061066b929190612afb565b50604082015181600201556060820151816003019080519060200190610692929190612afb565b5060808201518160040190805190602001906106af929190612afb565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff0219169083151502179055505050505050505050565b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890613582565b60405180910390fd5b674563918244f4000034146107fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f290613562565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610861573d6000803e3d6000fd5b5080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000190805190602001906108b8929190612afb565b5033600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555050565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16610a6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a65906135a2565b60405180910390fd5b600481604051610a7e919061327b565b9081526020016040518091039020600201543414610ad1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac8906134a2565b60405180910390fd5b600481604051610ae1919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b58573d6000803e3d6000fd5b5060016000815480929190610b6c906137b3565b91905055600281905550600060405180608001604052808381526020016040518060400160405280601881526020017f4f7264657220506c6163656420576974682053656c6c657200000000000000008152508152602001600254815260200160076000600486604051610be0919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060025481526020019081526020016000206002018054610c6d90613750565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9990613750565b8015610ce65780601f10610cbb57610100808354040283529160200191610ce6565b820191906000526020600020905b815481529060010190602001808311610cc957829003601f168201915b50505050508152509050600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000019080519060200190610d75929190612afb565b506020820151816001019080519060200190610d92929190612afb565b50604082015181600201556060820151816003019080519060200190610db9929190612afb565b5050506000604051806060016040528084815260200160025481526020013373ffffffffffffffffffffffffffffffffffffffff16815250905060066000600485604051610e07919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000019080519060200190610eb9929190612afb565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050508260076000600486604051610f22919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060025481526020019081526020016000206000019080519060200190610fb7929190612afb565b503360076000600486604051610fcd919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600254600760006004866040516110a4919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060010181905550600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160076000600486604051611180919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060030190805461120e90613750565b611219929190612b81565b50600160076000600486604051611230919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160146101000a81548160ff021916908315150217905550505050565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160149054906101000a900460ff1661136e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611365906134c2565b60405180910390fd5b80600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060020190805190602001906113d5929190612afb565b505050565b60608060006060600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020600001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020600201600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600088815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600089815260200190815260200160002060030183805461155a90613750565b80601f016020809104026020016040519081016040528092919081815260200182805461158690613750565b80156115d35780601f106115a8576101008083540402835291602001916115d3565b820191906000526020600020905b8154815290600101906020018083116115b657829003601f168201915b505050505093508280546115e690613750565b80601f016020809104026020016040519081016040528092919081815260200182805461161290613750565b801561165f5780601f106116345761010080835404028352916020019161165f565b820191906000526020600020905b81548152906001019060200180831161164257829003601f168201915b5050505050925080805461167290613750565b80601f016020809104026020016040519081016040528092919081815260200182805461169e90613750565b80156116eb5780601f106116c0576101008083540402835291602001916116eb565b820191906000526020600020905b8154815290600101906020018083116116ce57829003601f168201915b5050505050905093509350935093509193509193565b600360205280600052604060002060009150905080600001805461172490613750565b80601f016020809104026020016040519081016040528092919081815260200182805461175090613750565b801561179d5780601f106117725761010080835404028352916020019161179d565b820191906000526020600020905b81548152906001019060200180831161178057829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030160009054906101000a900460ff16905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660076000600485604051611835919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461192c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192390613522565b60405180910390fd5b60076000600484604051611940919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160149054906101000a900460ff16611a0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a06906135e2565b60405180910390fd5b604051806060016040528060328152602001613c026032913960076000600485604051611a3c919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206002019080519060200190611acf929190612afb565b50600160076000600485604051611ae6919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160156101000a81548160ff021916908315150217905550600060076000600485604051611b93919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060040160146101000a81548160ff0219169083151502179055505050565b60606000806060600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208581548110611c8657611c8561385a565b5b9060005260206000209060030201600001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208681548110611ce857611ce761385a565b5b906000526020600020906003020160010154600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208781548110611d4b57611d4a61385a565b5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a81548110611e0f57611e0e61385a565b5b9060005260206000209060030201600101548152602001908152602001600020600201838054611e3e90613750565b80601f0160208091040260200160405190810160405280929190818152602001828054611e6a90613750565b8015611eb75780601f10611e8c57610100808354040283529160200191611eb7565b820191906000526020600020905b815481529060010190602001808311611e9a57829003601f168201915b50505050509350808054611eca90613750565b80601f0160208091040260200160405190810160405280929190818152602001828054611ef690613750565b8015611f435780601f10611f1857610100808354040283529160200191611f43565b820191906000526020600020905b815481529060010190602001808311611f2657829003601f168201915b5050505050905093509350935093509193509193565b82600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190611faf929190612afb565b5081600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019080519060200190612006929190612afb565b5080600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201908051906020019061205d929190612afb565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff021916908315150217905550505050565b600581815481106120ce57600080fd5b90600052602060002090600602016000915090508060000180546120f190613750565b80601f016020809104026020016040519081016040528092919081815260200182805461211d90613750565b801561216a5780601f1061213f5761010080835404028352916020019161216a565b820191906000526020600020905b81548152906001019060200180831161214d57829003601f168201915b50505050509080600101805461217f90613750565b80601f01602080910402602001604051908101604052809291908181526020018280546121ab90613750565b80156121f85780601f106121cd576101008083540402835291602001916121f8565b820191906000526020600020905b8154815290600101906020018083116121db57829003601f168201915b50505050509080600201549080600301805461221390613750565b80601f016020809104026020016040519081016040528092919081815260200182805461223f90613750565b801561228c5780601f106122615761010080835404028352916020019161228c565b820191906000526020600020905b81548152906001019060200180831161226f57829003601f168201915b5050505050908060040180546122a190613750565b80601f01602080910402602001604051908101604052809291908181526020018280546122cd90613750565b801561231a5780601f106122ef5761010080835404028352916020019161231a565b820191906000526020600020905b8154815290600101906020018083116122fd57829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160149054906101000a900460ff16905087565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060040160159054906101000a900460ff166123fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123f4906134e2565b60405180910390fd5b60076000600484604051612411919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600254815260200190815260200160002060040160149054906101000a900460ff16156124e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124d8906135c2565b60405180910390fd5b6004826040516124f1919061327b565b9081526020016040518091039020600201543414612544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253b90613602565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156125fd573d6000803e3d6000fd5b50604051806060016040528060298152602001613c34602991396007600060048560405161262b919061327b565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060020190805190602001906126be929190612afb565b505050565b60608060006060600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020858154811061271b5761271a61385a565b5b9060005260206000209060040201600001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020868154811061277d5761277c61385a565b5b9060005260206000209060040201600101600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002087815481106127df576127de61385a565b5b906000526020600020906004020160020154600760006004600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208b815481106128485761284761385a565b5b90600052602060002090600402016000016040516128669190613292565b908152602001604051809103902060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208a815481106129255761292461385a565b5b906000526020600020906004020160020154815260200190815260200160002060020183805461295490613750565b80601f016020809104026020016040519081016040528092919081815260200182805461298090613750565b80156129cd5780601f106129a2576101008083540402835291602001916129cd565b820191906000526020600020905b8154815290600101906020018083116129b057829003601f168201915b505050505093508280546129e090613750565b80601f0160208091040260200160405190810160405280929190818152602001828054612a0c90613750565b8015612a595780601f10612a2e57610100808354040283529160200191612a59565b820191906000526020600020905b815481529060010190602001808311612a3c57829003601f168201915b50505050509250808054612a6c90613750565b80601f0160208091040260200160405190810160405280929190818152602001828054612a9890613750565b8015612ae55780601f10612aba57610100808354040283529160200191612ae5565b820191906000526020600020905b815481529060010190602001808311612ac857829003601f168201915b5050505050905093509350935093509193509193565b828054612b0790613750565b90600052602060002090601f016020900481019282612b295760008555612b70565b82601f10612b4257805160ff1916838001178555612b70565b82800160010185558215612b70579182015b82811115612b6f578251825591602001919060010190612b54565b5b509050612b7d9190612c0e565b5090565b828054612b8d90613750565b90600052602060002090601f016020900481019282612baf5760008555612bfd565b82601f10612bc05780548555612bfd565b82800160010185558215612bfd57600052602060002091601f016020900482015b82811115612bfc578254825591600101919060010190612be1565b5b509050612c0a9190612c0e565b5090565b5b80821115612c27576000816000905550600101612c0f565b5090565b6000612c3e612c3984613647565b613622565b905082815260208101848484011115612c5a57612c596138bd565b5b612c6584828561370e565b509392505050565b600081359050612c7c81613bd3565b92915050565b600082601f830112612c9757612c966138b8565b5b8135612ca7848260208601612c2b565b91505092915050565b600081359050612cbf81613bea565b92915050565b600060208284031215612cdb57612cda6138c7565b5b6000612ce984828501612c6d565b91505092915050565b600060208284031215612d0857612d076138c7565b5b600082013567ffffffffffffffff811115612d2657612d256138c2565b5b612d3284828501612c82565b91505092915050565b600080600060608486031215612d5457612d536138c7565b5b600084013567ffffffffffffffff811115612d7257612d716138c2565b5b612d7e86828701612c82565b935050602084013567ffffffffffffffff811115612d9f57612d9e6138c2565b5b612dab86828701612c82565b925050604084013567ffffffffffffffff811115612dcc57612dcb6138c2565b5b612dd886828701612c82565b9150509250925092565b600080600080600060a08688031215612dfe57612dfd6138c7565b5b600086013567ffffffffffffffff811115612e1c57612e1b6138c2565b5b612e2888828901612c82565b955050602086013567ffffffffffffffff811115612e4957612e486138c2565b5b612e5588828901612c82565b9450506040612e6688828901612cb0565b935050606086013567ffffffffffffffff811115612e8757612e866138c2565b5b612e9388828901612c82565b925050608086013567ffffffffffffffff811115612eb457612eb36138c2565b5b612ec088828901612c82565b9150509295509295909350565b60008060408385031215612ee457612ee36138c7565b5b600083013567ffffffffffffffff811115612f0257612f016138c2565b5b612f0e85828601612c82565b9250506020612f1f85828601612cb0565b9150509250929050565b600060208284031215612f3f57612f3e6138c7565b5b6000612f4d84828501612cb0565b91505092915050565b60008060408385031215612f6d57612f6c6138c7565b5b6000612f7b85828601612cb0565b925050602083013567ffffffffffffffff811115612f9c57612f9b6138c2565b5b612fa885828601612c82565b9150509250929050565b612fbb816136c6565b82525050565b612fca816136b4565b82525050565b612fd9816136d8565b82525050565b6000612fea8261368d565b612ff48185613698565b935061300481856020860161371d565b61300d816138cc565b840191505092915050565b60006130238261368d565b61302d81856136a9565b935061303d81856020860161371d565b80840191505092915050565b6000815461305681613750565b61306081866136a9565b9450600182166000811461307b576001811461308c576130bf565b60ff198316865281860193506130bf565b61309585613678565b60005b838110156130b757815481890152600182019150602081019050613098565b838801955050505b50505092915050565b60006130d5602783613698565b91506130e0826138dd565b604082019050919050565b60006130f8602583613698565b91506131038261392c565b604082019050919050565b600061311b601a83613698565b91506131268261397b565b602082019050919050565b600061313e602083613698565b9150613149826139a4565b602082019050919050565b6000613161603c83613698565b915061316c826139cd565b604082019050919050565b6000613184603a83613698565b915061318f82613a1c565b604082019050919050565b60006131a7601f83613698565b91506131b282613a6b565b602082019050919050565b60006131ca601a83613698565b91506131d582613a94565b602082019050919050565b60006131ed601d83613698565b91506131f882613abd565b602082019050919050565b6000613210602583613698565b915061321b82613ae6565b604082019050919050565b6000613233602983613698565b915061323e82613b35565b604082019050919050565b6000613256602483613698565b915061326182613b84565b604082019050919050565b61327581613704565b82525050565b60006132878284613018565b915081905092915050565b600061329e8284613049565b915081905092915050565b60006020820190506132be6000830184612fb2565b92915050565b600060808201905081810360008301526132de8187612fdf565b90506132ed6020830186612fc1565b6132fa604083018561326c565b6133076060830184612fd0565b95945050505050565b6000608082019050818103600083015261332a8187612fdf565b9050818103602083015261333e8186612fdf565b905061334d6040830185612fc1565b818103606083015261335f8184612fdf565b905095945050505050565b600060808201905081810360008301526133848187612fdf565b905081810360208301526133988186612fdf565b90506133a7604083018561326c565b81810360608301526133b98184612fdf565b905095945050505050565b600060e08201905081810360008301526133de818a612fdf565b905081810360208301526133f28189612fdf565b9050613401604083018861326c565b81810360608301526134138187612fdf565b905081810360808301526134278186612fdf565b905061343660a0830185612fb2565b61344360c0830184612fd0565b98975050505050505050565b600060808201905081810360008301526134698187612fdf565b9050613478602083018661326c565b6134856040830185612fc1565b81810360608301526134978184612fdf565b905095945050505050565b600060208201905081810360008301526134bb816130c8565b9050919050565b600060208201905081810360008301526134db816130eb565b9050919050565b600060208201905081810360008301526134fb8161310e565b9050919050565b6000602082019050818103600083015261351b81613131565b9050919050565b6000602082019050818103600083015261353b81613154565b9050919050565b6000602082019050818103600083015261355b81613177565b9050919050565b6000602082019050818103600083015261357b8161319a565b9050919050565b6000602082019050818103600083015261359b816131bd565b9050919050565b600060208201905081810360008301526135bb816131e0565b9050919050565b600060208201905081810360008301526135db81613203565b9050919050565b600060208201905081810360008301526135fb81613226565b9050919050565b6000602082019050818103600083015261361b81613249565b9050919050565b600061362c61363d565b90506136388282613782565b919050565b6000604051905090565b600067ffffffffffffffff82111561366257613661613889565b5b61366b826138cc565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006136bf826136e4565b9050919050565b60006136d1826136e4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561373b578082015181840152602081019050613720565b8381111561374a576000848401525b50505050565b6000600282049050600182168061376857607f821691505b6020821081141561377c5761377b61382b565b5b50919050565b61378b826138cc565b810181811067ffffffffffffffff821117156137aa576137a9613889565b5b80604052505050565b60006137be82613704565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156137f1576137f06137fc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f56616c7565204d75737420626520457175616c20746f205072696365206f662060008201527f50726f6475637400000000000000000000000000000000000000000000000000602082015250565b7f4f726465722069732065697468657220696e416374697665206f722063616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f4f72646572206973206e6f74205965742043616e63656c6c6564000000000000600082015250565b7f596f7520617265206e6f7420526567697374657265642061732053656c6c6572600082015250565b7f41777720437261702e2e20596f7520617265206e6f7420417574686f72697a6560008201527f6420746f20546869732050726f64756374205075726368617365496400000000602082015250565b7f50726f647563742057697468207468697320496420697320616c72656164792060008201527f4163746976652e20557365206f7468657220556e697175654964000000000000602082015250565b7f42616e6b2047756172616e746565206f66203545544820526571756972656400600082015250565b7f596f752061726520416c72656164792052656769737465726564000000000000600082015250565b7f596f75204d757374204265205265676973746572656420746f20427579000000600082015250565b7f4f726465722069732041637469766520616e64206e6f74207965742043616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f41777720637261702e2e596f7520416c72656164792043616e63656c6564205460008201527f686973206f726465720000000000000000000000000000000000000000000000602082015250565b7f56616c7565204d75737420626520457175616c20746f2050726f64756374205060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b613bdc816136b4565b8114613be757600080fd5b50565b613bf381613704565b8114613bfe57600080fd5b5056fe4f726465722043616e63656c65642042792042757965722c205061796d656e742077696c6c2042652020526566756e6465644f726465722043616e63656c65642042792042757965722c205061796d656e7420526566756e646564a2646970667358221220d835c6a8b0c97b3c978ed899a69ed6c9b191edf7cd02f4de03b6438a2d97ca8764736f6c63430008060033";
