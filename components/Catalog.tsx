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
  id: number;
  name: string;
  price: string;
  realPrice: BigNumber;
  description: string;
  sellerName: string;
  quantity: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Catalog = ({ buyerAccount, contract }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, [buyerAccount]);

  async function getProducts() {
    const newProducts: Product[] = [];

    const productCount = parseInt((await contract.getProductCount())._hex);
    for (let i = 0; i < productCount; i++) {
      try {
        const rawProduct = await contract.products(i);
        const rawSeller = await contract.accounts(rawProduct.sellerId);
        newProducts.push({
          id: parseInt(rawProduct.id._hex),
          name: rawProduct.name,
          price: ethers.utils.formatEther(
            BigNumber.from(rawProduct.price._hex).toString()
          ),
          realPrice: rawProduct.price,
          description: rawProduct.description
            ? rawProduct.description
            : "Produto sem descrição",
          sellerName: rawSeller.name,
          quantity: parseInt(rawProduct.quantity._hex),
        });
      } catch (error) {
        break;
      }
    }
    setProducts(newProducts);
  }

  async function buyProduct(product: Product) {
    const transaction = await contract.buyProduct(
      product.id,
      product.quantity,
      {
        value: product.realPrice,
      }
    );
    await transaction?.wait();
    console.log({ transaction });
  }

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={products}
      renderItem={(product) => (
        <List.Item>
          <Card
            title={product.name}
            type="inner"
            key={product.id}
            bodyStyle={{ height: "70%" }}
            style={{ width: 300, height: 200 }}
            actions={[
              <Button
                disabled={product.quantity <= 0}
                type="primary"
                block
                onClick={() => buyProduct(product)}
              >
                Comprar
              </Button>,
            ]}
          >
            Fornecedor: <b>{product.sellerName}</b>
            <br />
            <span style={{ color: "gray" }}>{product.description}</span>
            <br />
            <b style={{ fontSize: 17 }}>{`${product.price} ETH`}</b>
          </Card>
        </List.Item>
      )}
    />
  );
};
