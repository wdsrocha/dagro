import { Alert, Button, Form, Input, Space, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import Text from "antd/lib/typography/Text";
import { Marketplace } from "../types/ethers-contracts";
import { ethers } from "ethers";
import { getErrorMessage } from "../utils";
import Link from "antd/lib/typography/Link";
import { Catalog } from "../components/Catalog";
import { Orders } from "../components/Orders";

const { TabPane } = Tabs;

interface BuyerAccount {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
}

interface Props {
  provider: ethers.providers.Web3Provider;
  account: string;
  contract: Marketplace;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Page = ({ account, contract }: Props) => {
  const [buyerAccount, setBuyerAccount] = useState<BuyerAccount | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function getBuyerAccount() {
    const rawBuyerAccount = await contract.accounts(account);
    console.log({ rawBuyerAccount });
    if (rawBuyerAccount.name) {
      setBuyerAccount({
        name: rawBuyerAccount.name,
        email: rawBuyerAccount.email,
        phone: rawBuyerAccount.phone,
        postalCode: rawBuyerAccount.postalCode,
      });
    }
  }

  useEffect(() => {
    getBuyerAccount();
  }, [contract]);

  const handleSignUp = async ({
    name,
    email,
    phone,
    postalCode,
  }: {
    name: string;
    email: string;
    phone: string;
    postalCode: string;
  }) => {
    setErrorMessage(null);
    try {
      const transaction = await contract.updateAccount(
        name,
        email,
        phone,
        postalCode
      );
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
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Celular" name="phone">
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

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Catálogo" key="1">
        <Catalog buyerAccount={buyerAccount} contract={contract} />
      </TabPane>
      <TabPane tab="Pedidos" key="2">
        <Orders buyerAccount={buyerAccount} contract={contract} />
      </TabPane>
    </Tabs>
  );
};

export default Page;
