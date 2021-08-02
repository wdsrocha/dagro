// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Shoppy {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    uint256 id;
    uint256 purchaseId;
    struct seller {
        string name;
        address addr;
        uint256 bankGuaraantee;
        bool bgPaid;
    }
    struct product {
        string productId;
        string name;
        uint256 price;
        string location;
        string method;
        address payable seller;
        bool isActive;
    }
    struct ordersPlaced {
        string productId;
        uint256 purchaseId;
        address orderedBy;
    }
    struct sellerShipment {
        string productId;
        uint256 purchaseId;
        string shipmentStatus;
        string deliveryAddress;
        address payable orderedBy;
        bool isActive;
        bool isCanceled;
    }
    struct user {
        string name;
        string email;
        string deliveryAddress;
        bool isCreated;
    }
    struct orders {
        string productId;
        string orderStatus;
        uint256 purchaseId;
        string shipmentStatus;
    }
    mapping(address => seller) public sellers;
    mapping(string => product) products;
    product[] public allProducts;
    mapping(address => ordersPlaced[]) sellerOrders;
    mapping(address => mapping(uint256 => sellerShipment)) sellerShipments;
    mapping(address => user) users;
    mapping(address => orders[]) userOrders;

    function sellerSignUp(string memory _name) public payable {
        require(!sellers[msg.sender].bgPaid, "You are Already Registered");
        require(msg.value == 5 ether, "Bank Guarantee of 5ETH Required");
        owner.transfer(msg.value);
        sellers[msg.sender].name = _name;
        sellers[msg.sender].addr = msg.sender;
        sellers[msg.sender].bankGuaraantee = msg.value;
        sellers[msg.sender].bgPaid = true;
    }

    function createAccount(
        string memory _name,
        string memory _email,
        string memory _deliveryAddress
    ) public {
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].deliveryAddress = _deliveryAddress;
        users[msg.sender].isCreated = true;
    }

    function buyProduct(string memory _productId) public payable {
        require(users[msg.sender].isCreated, "You Must Be Registered to Buy");
        require(
            msg.value == products[_productId].price,
            "Value Must be Equal to Price of Product"
        );

        products[_productId].seller.transfer(msg.value);

        purchaseId = id++;
        orders memory order = orders(
            _productId,
            "Order Placed With Seller",
            purchaseId,
            sellerShipments[products[_productId].seller][purchaseId]
                .shipmentStatus
        );
        userOrders[msg.sender].push(order);
        ordersPlaced memory ord = ordersPlaced(
            _productId,
            purchaseId,
            msg.sender
        );
        sellerOrders[products[_productId].seller].push(ord);

        sellerShipments[products[_productId].seller][purchaseId]
            .productId = _productId;
        sellerShipments[products[_productId].seller][purchaseId]
            .orderedBy = payable(msg.sender);
        sellerShipments[products[_productId].seller][purchaseId]
            .purchaseId = purchaseId;
        sellerShipments[products[_productId].seller][purchaseId]
            .deliveryAddress = users[msg.sender].deliveryAddress;
        sellerShipments[products[_productId].seller][purchaseId]
            .isActive = true;
    }

    function addProduct(
        string memory _productId,
        string memory _name,
        uint256 _price,
        string memory _location,
        string memory _method
    ) public {
        require(sellers[msg.sender].bgPaid, "You are not Registered as Seller");
        require(
            !products[_productId].isActive,
            "Product With this Id is already Active. Use other UniqueId"
        );

        product memory newProduct = product(
            _productId,
            _name,
            _price,
            _location,
            _method,
            payable(msg.sender),
            true
        );
        products[_productId].productId = _productId;
        products[_productId].name = _name;
        products[_productId].price = _price;
        products[_productId].location = _location;
        products[_productId].method = _method;
        products[_productId].seller = payable(msg.sender);
        products[_productId].isActive = true;
        allProducts.push(newProduct);
    }

    function cancelOrder(string memory _productId, uint256 _purchaseId)
        public
        payable
    {
        require(
            sellerShipments[products[_productId].seller][_purchaseId]
                .orderedBy == msg.sender,
            "Aww Crap.. You are not Authorized to This Product PurchaseId"
        );
        require(
            sellerShipments[products[_productId].seller][purchaseId].isActive,
            "Aww crap..You Already Canceled This order"
        );

        sellerShipments[products[_productId].seller][_purchaseId]
            .shipmentStatus = "Order Canceled By Buyer, Payment will Be  Refunded";
        sellerShipments[products[_productId].seller][_purchaseId]
            .isCanceled = true;
        sellerShipments[products[_productId].seller][_purchaseId]
            .isActive = false;
    }

    function updateShipment(uint256 _purchaseId, string memory _shipmentDetails)
        public
    {
        require(
            sellerShipments[msg.sender][_purchaseId].isActive,
            "Order is either inActive or cancelled"
        );

        sellerShipments[msg.sender][_purchaseId]
            .shipmentStatus = _shipmentDetails;
    }

    function refund(string memory _productId, uint256 _purchaseId)
        public
        payable
    {
        require(
            sellerShipments[msg.sender][_purchaseId].isCanceled,
            "Order is not Yet Cancelled"
        );
        require(
            !sellerShipments[products[_productId].seller][purchaseId].isActive,
            "Order is Active and not yet Cancelled"
        );
        require(
            msg.value == products[_productId].price,
            "Value Must be Equal to Product Price"
        );
        sellerShipments[msg.sender][_purchaseId].orderedBy.transfer(msg.value);
        sellerShipments[products[_productId].seller][_purchaseId]
            .shipmentStatus = "Order Canceled By Buyer, Payment Refunded";
    }

    function myOrders(uint256 _index)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory
        )
    {
        return (
            userOrders[msg.sender][_index].productId,
            userOrders[msg.sender][_index].orderStatus,
            userOrders[msg.sender][_index].purchaseId,
            sellerShipments[
                products[userOrders[msg.sender][_index].productId].seller
            ][userOrders[msg.sender][_index].purchaseId].shipmentStatus
        );
    }

    function getOrdersPlaced(uint256 _index)
        public
        view
        returns (
            string memory,
            uint256,
            address,
            string memory
        )
    {
        return (
            sellerOrders[msg.sender][_index].productId,
            sellerOrders[msg.sender][_index].purchaseId,
            sellerOrders[msg.sender][_index].orderedBy,
            sellerShipments[msg.sender][
                sellerOrders[msg.sender][_index].purchaseId
            ].shipmentStatus
        );
    }

    function getShipmentDetails(uint256 _purchaseId)
        public
        view
        returns (
            string memory,
            string memory,
            address,
            string memory
        )
    {
        return (
            sellerShipments[msg.sender][_purchaseId].productId,
            sellerShipments[msg.sender][_purchaseId].shipmentStatus,
            sellerShipments[msg.sender][_purchaseId].orderedBy,
            sellerShipments[msg.sender][_purchaseId].deliveryAddress
        );
    }
}
