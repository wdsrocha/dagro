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
        uint256 quantity;
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
        uint256 price,
        uint256 quantity
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
        products[i].quantity = quantity;
        products[i].sellerId = payable(msg.sender);
        productList.push(i);
    }

    // ============================== ORDERS ============================== //
    struct Order {
        uint256 id;
        string status;
        uint256 productId;
        address buyerId;
        address sellerId;
    }

    mapping(uint256 => Order) public orders;
    uint256[] public orderList;

    function getOrderCount() public view returns (uint256 orderCount) {
        return orderList.length;
    }

    function buyProduct(uint256 productId, uint256 quantity) public payable {
        require(
            accounts[msg.sender].id == msg.sender,
            "Atualize seus dados para comprar um produto"
        );
        require(
            products[productId].quantity >= quantity,
            "Quantidade indisponivel"
        );
        require(
            msg.value == products[productId].price,
            "O valor enviado deve ser igual o valor do produto"
        );

        products[productId].sellerId.transfer(msg.value);
        products[productId].quantity -= quantity;

        uint256 i = orderList.length;
        orders[i].id = i;
        orders[i].status = "Pedido realizado";
        orders[i].productId = productId;
        orders[i].buyerId = msg.sender;
        orders[i].sellerId = products[productId].sellerId;
        orderList.push(i);
    }
}
