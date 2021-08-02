import { Alert, Button, Card, Form, Input, Space } from "antd";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import Text from "antd/lib/typography/Text";
import { Shoppy } from "../types/ethers-contracts";
import { ethers } from "ethers";
import { getErrorMessage } from "../utils";
import TextArea from "antd/lib/input/TextArea";
import { parseEther } from "ethers/lib/utils";

interface SellerAccount {
  name: string;
}

interface Props {
  provider: ethers.providers.Web3Provider;
  account: string;
  contract: Shoppy;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Page = ({ account, contract }: Props) => {
  const [sellerAccount, setSellerAccount] = useState<SellerAccount | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function getSellerAccount() {
    const rawSellerAccount = await contract.sellers(account);
    console.log({ rawSellerAccount });
    if (rawSellerAccount.name) {
      setSellerAccount({ name: rawSellerAccount.name });
    }
  }

  useEffect(() => {
    getSellerAccount();
  }, [contract]);

  const handleSignUp = async ({ sellerName }: { sellerName: string }) => {
    setErrorMessage(null);
    try {
      const transaction = await contract.sellerSignUp(sellerName, {
        value: ethers.utils.parseEther("5"),
      });
      await transaction?.wait();
      console.log({ transaction });
      await getSellerAccount();
    } catch (error) {
      setErrorMessage(getErrorMessage(error?.data?.message));
    }
  };

  if (!sellerAccount) {
    return (
      <Space direction="vertical">
        <Text>
          Você ainda não está cadastrado como vendedor. Preencha seu nome abaixo
          e comece a vender por apenas 5ETH!
        </Text>
        {errorMessage ? (
          <Alert
            type="error"
            message={errorMessage}
            closable
            onClose={() => setErrorMessage(null)}
          />
        ) : null}
        <Form layout="inline" onFinish={handleSignUp}>
          <Form.Item
            label="Nome"
            name="sellerName"
            rules={[{ required: true }, { whitespace: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Space>
    );
  }

  const addProduct = async ({
    name,
    price,
    description,
  }: {
    name: string;
    price: string;
    description: string;
  }) => {
    setErrorMessage(null);
    try {
      console.log({
        name,
        price: parseEther(price),
        description,
      });
      const transaction = await contract.addProduct(
        uuidv4(),
        name,
        parseEther(price),
        description
      );
      await transaction?.wait();
      console.log({ transaction });
    } catch (error) {
      setErrorMessage(getErrorMessage(error?.data?.message));
    }
  };

  return (
    <>
      <Card title="Cadastro de novo produto">
        <Space direction="vertical">
          {errorMessage ? (
            <Alert
              type="error"
              message={errorMessage}
              closable
              onClose={() => setErrorMessage(null)}
            />
          ) : null}
          <Form layout="vertical" onFinish={addProduct}>
            <Form.Item
              label="Nome"
              name="name"
              rules={[{ required: true }, { whitespace: false }]}
            >
              <Input placeholder="Cenoura" />
            </Form.Item>
            <Form.Item
              label="Preço"
              name="price"
              rules={[{ required: true }, { whitespace: false }]}
            >
              <Input placeholder="1" suffix="ETH" />
            </Form.Item>
            <Form.Item label="Informações adicionais" name="description">
              <TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Adicionar produto
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </>
  );
};

export default Page;
