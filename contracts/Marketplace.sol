// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Marketplace {
    constructor() {}

    struct Account {
        address id;
        string name;
        string email;
        string phone;
        string postalCode;
    }

    mapping(address => Account) public accounts;

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
    }
}
