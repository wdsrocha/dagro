// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Marketplace {
    constructor() {}

    // ============================== ACCOUNT ============================== //
    struct Account {
        address id;
        string name;
        string email;
        string phone;
        string postalCode;
    }

    mapping(address => Account) public accounts;
    address[] public accountList;

    function updateAccount(
        string memory name,
        string memory email,
        string memory phone,
        string memory postalCode
    ) public {
        accounts[msg.sender].id = msg.sender;
        accounts[msg.sender].name = name;
        accounts[msg.sender].email = email;
        accounts[msg.sender].phone = phone;
        accounts[msg.sender].postalCode = postalCode;
        accountList.push(msg.sender);
    }

    // ============================== PRODUCT ============================== //
    struct Product {
        uint256 id;
        string name;
        string description;
        uint256 price;
        address payable sellerId;
    }

    mapping(uint256 => Product) public products;
    uint256[] public productList;

    function getProductCount() public view returns (uint256 productCount) {
        return productList.length;
    }

    function addProduct(
        string memory name,
        string memory description,
        uint256 price
    ) public {
        require(
            accounts[msg.sender].id == msg.sender,
            "Atualize seus dados para adicionar um produto"
        );

        uint256 i = productList.length;
        products[i].id = i;
        products[i].name = name;
        products[i].description = description;
        products[i].price = price;
        productList.push(i);
    }
}
