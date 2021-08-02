import React from "react";
import { ethers } from "ethers";
import { Shoppy } from "../types/ethers-contracts";
import { Tabs } from "antd";
import { SellTab } from "../components/SellTab";
import { BuyTab } from "../components/BuyTab";

const { TabPane } = Tabs;

interface Props {
  provider: ethers.providers.Web3Provider;
  account: string;
  contract: Shoppy;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Index = ({ provider, account, contract }: Props) => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Comprar" key="1">
      <BuyTab provider={provider} account={account} contract={contract} />
    </TabPane>
    <TabPane tab="Vender" key="2">
      <SellTab provider={provider} account={account} contract={contract} />
    </TabPane>
  </Tabs>
);

export default Index;
