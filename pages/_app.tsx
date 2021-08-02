import { Button, ConfigProvider, Empty, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import type { AppProps } from "next/app";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Marketplace, Marketplace__factory } from "../types/ethers-contracts";
import ptBR from "antd/lib/locale/pt_BR";
import { Hyperlink } from "../utils";

const CONTRACT_ADDRESS = "0x5f271a322A6de460f3eC5047044c6b80bce0c1F7";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App({ Component, pageProps }: AppProps) {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();
  const [contract, setContract] = useState<Marketplace>();

  useEffect(() => {
    if (provider && account) {
      const newContract = Marketplace__factory.connect(
        CONTRACT_ADDRESS,
        provider.getSigner()
      );
      setContract(newContract);
    }
  }, [provider, account]);

  const connectWithMetaMask = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask não está instalado!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setProvider(provider);
    setAccount(accounts[0]);
  };

  const Account = () =>
    contract ? (
      <Text
        style={{
          color: "orange",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <b>Conta:</b> {account}
      </Text>
    ) : (
      <Button type="primary" onClick={connectWithMetaMask}>
        Conectar MetaMask
      </Button>
    );

  return (
    <ConfigProvider locale={ptBR}>
      <ErrorBoundary>
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              display: "flex",
              justifyContent: "start",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Hyperlink
              href="/"
              style={{
                fontFamily: "monospace",
                color: "white",
                fontSize: 25,
              }}
            >
              🥕 <span style={{ color: "orange" }}>D</span>
              <span style={{ color: "green" }}>Agro</span>
            </Hyperlink>
            <nav style={{ marginLeft: 32, display: "flex", flexGrow: 1 }}>
              <Menu mode="horizontal" theme="dark">
                <Menu.Item key="buy">
                  <Hyperlink href="/buy">Comprar</Hyperlink>
                </Menu.Item>
                <Menu.Item key="sell">
                  <Hyperlink href="/sell">Vender</Hyperlink>
                </Menu.Item>
              </Menu>
            </nav>
            <Account />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div
              style={{
                marginTop: 15,
                padding: 24,
                background: "white",
              }}
            >
              {contract ? (
                <Component
                  provider={provider}
                  account={account}
                  contract={contract}
                  {...pageProps}
                />
              ) : (
                <Empty />
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DAgro @2021 Criado por Wesley Rocha
          </Footer>
        </Layout>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
