import { Alert, Button, Card, Form, Input, Space } from "antd";
import React, { useState, useEffect } from "react";
import Text from "antd/lib/typography/Text";
import { Shoppy } from "../types/ethers-contracts";
import { BigNumber, ethers } from "ethers";
import { getErrorMessage } from "../utils";
import Link from "antd/lib/typography/Link";
import Meta from "antd/lib/card/Meta";

interface BuyerAccount {
  name: string;
  email: string;
  postalCode: string;
}

interface Props {
  provider: ethers.providers.Web3Provider;
  account: string;
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

// const products: Product[] = [];
// console.log("products:");
// products.forEach((product) => console.log({ product }));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const BuyTab = ({ account, contract }: Props) => {
  const [buyerAccount, setBuyerAccount] = useState<BuyerAccount | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  async function getBuyerAccount() {
    const rawBuyerAccount = await contract.users(account);
    console.log({ rawBuyerAccount });
    if (rawBuyerAccount.name) {
      setBuyerAccount({
        name: rawBuyerAccount.name,
        email: rawBuyerAccount.email,
        postalCode: rawBuyerAccount.deliveryAddress,
      });
    }
  }

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
          description: rawProduct.description,
          sellerName: rawSeller.name,
          isActive: rawProduct.isActive,
        });
      } catch (error) {
        break;
      }
    }
    setProducts(newProducts);
  }

  useEffect(() => {
    getBuyerAccount();
  }, [contract]);

  useEffect(() => {
    if (buyerAccount) {
      getProducts();
    }
  }, [buyerAccount]);

  const handleSignUp = async ({
    name,
    email,
    postalCode,
  }: {
    name: string;
    email: string;
    postalCode: string;
  }) => {
    setErrorMessage(null);
    try {
      const transaction = await contract.createAccount(name, email, postalCode);
      await transaction?.wait();
      console.log({ transaction });
      await getBuyerAccount();
    } catch (error) {
      setErrorMessage(getErrorMessage(error?.data?.message));
    }
  };

  if (!buyerAccount) {
    return (
      <Space direction="vertical">
        <Text>Complete suas informações para ver e comprar os produtos.</Text>
        {errorMessage ? (
          <Alert
            type="error"
            message={errorMessage}
            closable
            onClose={() => setErrorMessage(null)}
          />
        ) : null}
        <Form layout="vertical" onFinish={handleSignUp}>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true }, { whitespace: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true }, { whitespace: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="CEP"
            name="postalCode"
            rules={[{ required: true }, { whitespace: false }]}
            extra={
              <Link href="https://buscacepinter.correios.com.br">
                Não sei meu CEP
              </Link>
            }
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar dados
            </Button>
          </Form.Item>
        </Form>
      </Space>
    );
  }

  async function buyProduct(product: Product) {
    const transaction = await contract.buyProduct(product.id, {
      value: product.realPrice,
    });
    await transaction?.wait();
    console.log({ transaction });
  }

  return (
    <>
      <Card title="Catálogo de produtos">
        {products.map((product) => (
          <Card
            title={product.name}
            type="inner"
            key={product.id}
            style={{ maxWidth: 300 }}
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
            <Text>
              {`Fornecedor: ${product.sellerName}`}
              <br />
              <span style={{ color: "gray" }}>{product.description}</span>
              <br />
              <b style={{ fontSize: 17 }}>{`${product.price} ETH`}</b>
              <br />
            </Text>
          </Card>
        ))}
      </Card>
    </>
  );
};
