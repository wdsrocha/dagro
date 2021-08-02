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
        address payable buyerId;
        address payable sellerId;
        uint256 payment;
        uint256 productQuantity;
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
            msg.value == products[productId].price * quantity,
            "Valor incorreto"
        );

        products[productId].sellerId.transfer(msg.value);
        products[productId].quantity -= quantity;

        uint256 i = orderList.length;
        orders[i].id = i;
        orders[i].status = "Pedido realizado";
        orders[i].productId = productId;
        orders[i].buyerId = payable(msg.sender);
        orders[i].sellerId = products[productId].sellerId;
        orders[i].payment = msg.value;
        orders[i].productQuantity = quantity;
        orderList.push(i);
    }

    function compareStrings(string memory a, string memory b)
        private
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function shipProduct(uint256 orderId) public {
        require(orders[orderId].id == orderId, "Pedido inexistente");
        require(
            msg.sender == orders[orderId].sellerId,
            "Somente o vendedor pode fazer isto"
        );
        require(compareStrings(orders[orderId].status, "Pedido realizado"));

        orders[orderId].status = "Produto enviado";
    }

    function receiveProduct(uint256 orderId) public {
        require(orders[orderId].id == orderId, "Pedido inexistente");
        require(
            msg.sender == orders[orderId].buyerId,
            "Somente o comprador pode fazer isto"
        );
        require(compareStrings(orders[orderId].status, "Produto enviado"));

        orders[orderId].status = "Produto recebido";
    }

    function cancelOrder(uint256 orderId) public payable {
        require(orders[orderId].id == orderId, "Pedido inexistente");
        require(
            orders[orderId].sellerId == msg.sender,
            "Somente o vendedor pode fazer isto"
        );
        require(!compareStrings(orders[orderId].status, "Produto recebido"));
        require(!compareStrings(orders[orderId].status, "Pedido cancelado"));

        orders[orderId].status = "Pedido cancelado";
        uint256 productId = orders[orderId].productId;
        products[productId].quantity += orders[orderId].productQuantity;
    }
}
