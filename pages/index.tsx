import { FC, useEffect, useState } from "react";
import { ethers } from "ethers";
import { Greeter, Greeter__factory } from "../contracts/types";

const GREETER_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Index: FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();
  const [greeting, setGreeting] = useState<string>();
  const [greetingText, setGreetingText] = useState<string>("");
  const [greeter, setGreeter] = useState<Greeter>();

  useEffect(() => {
    if (provider && account) {
      const greeter = Greeter__factory.connect(
        GREETER_ADDRESS,
        provider.getSigner()
      );
      setGreeter(greeter);
    }
  }, [provider, account]);

  const connect = async () => {
    if (!window.ethereum?.request) {
      alert("MetaMask is not installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setProvider(provider);
    setAccount(accounts[0]);
  };

  const greet = async () => {
    if (greeter) {
      const greeting = await greeter.greet();
      setGreeting(greeting);
    }
  };

  const updateGreeting = async () => {
    if (greeter) {
      const transaction = await greeter.setGreeting(greetingText);
      await transaction.wait();
    }
  };

  return (
    <>
      <button onClick={connect}>Connect</button>
      <p>Account: {account}</p>
      <button onClick={greet}>See greeting!</button>
      <p>{greeting}</p>
      <input
        value={greetingText}
        onChange={(e) => setGreetingText(e.target.value)}
      />
      <button onClick={updateGreeting}>Update greeting</button>
      <p>{greetingText}</p>
    </>
  );
};

export default Index;
