import { configureChains, createConfig } from "wagmi";
import {
  goerli,
  mainnet,
  sepolia,
  baseGoerli,
  polygonMumbai,
} from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";

import { Chain } from "wagmi";

export const BotanixTestnet = {
  id: 3636,
  name: "Botanix Network Testnet",
  network: "Botanix Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BotanixTestnet",
    symbol: "BTC",
  },
  rpcUrls: {
    public: { http: ["https://node.botanixlabs.dev/"] },
    default: { http: ["https://node.botanixlabs.dev/"] },
  },
  blockExplorers: {
    etherscan: { name: "Botanix", url: "https://3xpl.com/botanix" },
    default: { name: "Botanix", url: "https://3xpl.com/botanix" },
  },
} as const satisfies Chain;



const { chains, publicClient } = configureChains(
  [BotanixTestnet],
  [publicProvider()]
);


export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: "wagmi",
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  publicClient
 
});
