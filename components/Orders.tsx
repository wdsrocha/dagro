import { Alert, Button, Card, Form, Input, List, Space, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import Text from "antd/lib/typography/Text";
import { Marketplace } from "../types/ethers-contracts";
import { BigNumber, ethers } from "ethers";
import { id } from "ethers/lib/utils";

interface BuyerAccount {
  name: string;
  email: string;
  postalCode: string;
}

interface Props {
  buyerAccount: BuyerAccount;
  contract: Marketplace;
}

interface Product {
  id: string;
  name: string;
  price: string;
  realPrice: BigNumber;
  description: string;
  sellerName: string;
  isActive: boolean;
}

interface Order {
  id: number;
  productId: number;
  status: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Orders = ({ buyerAccount, contract }: Props) => {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    const newOrders: Order[] = [];
    const count = parseInt((await contract.getOrderCount())._hex);
    for (let i = 0; i < count; i++) {
      try {
        const rawOrder = await contract.orders(i);
        console.log(rawOrder);
        // const rawSeller = await contract.sellers(rawOrder.seller);
        newOrders.push({
          id: parseInt(rawOrder.id._hex),
          productId: parseInt(rawOrder.productId._hex),
          status: rawOrder.status,
        });
      } catch (error) {
        break;
      }
    }
    console.log("???");
    setOrders(newOrders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={orders}
      renderItem={(order) => (
        <List.Item>
          <Card
            title={order.id}
            type="inner"
            key={order.id}
            bodyStyle={{ height: "70%" }}
            style={{ width: 300, height: 200 }}
          >
            {order.status}
          </Card>
        </List.Item>
      )}
    />
  );
};
