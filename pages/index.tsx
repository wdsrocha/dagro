import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Shoppy } from "../types/ethers-contracts";
import { Alert, Tabs } from "antd";
import { SellTab } from "../components/SellTab";

const { TabPane } = Tabs;

interface Product {
  name: string;
  value: number;
  description: string;
}

interface Props {
  provider: ethers.providers.Web3Provider;
  account: string;
  contract: Shoppy;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Index = ({ provider, account, contract }: Props) => {
  const [sellerUsername, setSellerUsername] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!contract) {
      return;
    }

    async function getProducts() {
      const products: Product[] = [];
      for (let i = 0; ; i++) {
        try {
          const product = await contract?.allProducts(i);
          console.log({ product });
        } catch (error) {
          break;
        }
      }

      // setProducts(products);
    }
    getProducts();
  }, [contract]);

  const handleContractError = (error: {
    data: { message: string | undefined } | undefined;
  }) => {
    const message = error?.data?.message;
    setErrorMessage(
      message
        ? message.slice(message.indexOf("'") + 1, message.lastIndexOf("'"))
        : "Unknown error"
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const transaction = await contract?.sellerSignUp(sellerUsername, {
        value: ethers.utils.parseEther("5"),
      });
      await transaction?.wait();
      console.log({ transaction });
    } catch (error) {
      handleContractError(error);
    }
  };

  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab="Comprar" key="1">
        {/* <BuyTab contract={contract} /> */}
      </TabPane>
      <TabPane tab="Vender" key="2">
        <SellTab provider={provider} account={account} contract={contract} />
      </TabPane>
    </Tabs>
  );

  return (
    <>
      {errorMessage ? (
        <Alert
          type="error"
          message={errorMessage}
          closable
          onClose={() => setErrorMessage(null)}
        />
      ) : null}
      {contract && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="seller-account">Username</label>
          <input
            id="seller-account"
            type="text"
            value={sellerUsername}
            onChange={(e) => setSellerUsername(e.target.value)}
          />
          <input type="submit" value="Criar conta" />
        </form>
      )}
    </>
  );
};

export default Index;
