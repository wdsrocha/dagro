import { Alert, Button, Card, Form, Input, List, Space, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import Text from "antd/lib/typography/Text";
import { Shoppy } from "../types/ethers-contracts";
import { BigNumber, ethers } from "ethers";
import { id } from "ethers/lib/utils";

interface BuyerAccount {
  name: string;
  email: string;
  postalCode: string;
}

interface Props {
  buyerAccount: BuyerAccount;
  contract: Shoppy;
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Catalog = ({ buyerAccount, contract }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, [buyerAccount]);

  async function getProducts() {
    const newProducts: Product[] = [];
    for (let i = 0; ; i++) {
      try {
        const rawProduct = await contract.allProducts(i);
        const rawSeller = await contract.sellers(rawProduct.seller);
        newProducts.push({
          id: rawProduct.productId,
          name: rawProduct.name,
          price: ethers.utils.formatEther(
            BigNumber.from(rawProduct.price._hex).toString()
          ),
          realPrice: rawProduct.price,
          description: rawProduct.description
            ? rawProduct.description
            : "Produto sem descrição",
          sellerName: rawSeller.name,
          isActive: rawProduct.isActive,
        });
      } catch (error) {
        break;
      }
    }
    setProducts(newProducts);
  }

  async function buyProduct(product: Product) {
    const transaction = await contract.buyProduct(product.id, {
      value: product.realPrice,
    });
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
                disabled={!product.isActive}
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
