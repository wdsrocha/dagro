# DAgro

DAgro é um aplicativo de ecommerce descentralizado.

## Tecnologias

- [Typescript](https://github.com/microsoft/TypeScript)
- [Prettier](https://github.com/prettier/prettier)
- [ESLint](https://github.com/eslint/eslint)
- [Ethers.js](https://github.com/ethers-io/ethers.js/)
- [React]()
- [Ant Design]()
- [Next.js](https://github.com/vercel/next.js)
- [Typechain](https://github.com/ethereum-ts/TypeChain)
- [Hardhat](https://hardhat.org/)

# Como usar

1. Baixe este repositório localmente
1. Rode `yarn` para instalar as dependências
1. Rode `yarn compile` para compilar e gerar as tipagens do contrato principal
1. Rode `npx hardhat node` para iniciar o servidor blockchain
1. Rode `npx hardhat run scripts/deploy.ts --network localhost` para realizar o deploy do contrato
1. Copie o endereço do contrato e cole na constante `CONTRACT_ADDRESS` no arquivo `_app.tsx`
1. Rode `yarn dev` para iniciar o servidor _front-end_
1. Acesse a aplicação em http://localhost:3000/

# Referências

- [Documentação oficial do Solidity](https://docs.soliditylang.org/en/v0.8.6/index.html)
- [The Complete Guide to Full Stack Ethereum Development - Tutorial for Beginners [2021]](https://www.youtube.com/watch?v=a0osIaAOFSE)
- [Ethereum Shopping Smart Contract Development Walkthrough](https://medium.datadriveninvestor.com/creating-shopping-smartcontract-f7f80add48c4)
- [Building a Smart Contract to Sell Goods by Everis Brasil](https://everisbrasil.medium.com/building-a-smart-contract-to-sell-goods-772107f521ac)
