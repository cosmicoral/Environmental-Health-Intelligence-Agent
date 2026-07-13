import { BrowserProvider, Contract } from "ethers";
import {
  HEALTH_ALERT_REGISTRY_ADDRESS,
  SEPOLIA_CHAIN_ID,
} from "./blockchainConfig";
import { registryAbi } from "./registryAbi";

export async function getWritableRegistry() {
  if (!window.ethereum) {
    throw new Error("A browser wallet is required for contract writes");
  }

  const provider = new BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const network = await provider.getNetwork();

  if (network.chainId !== SEPOLIA_CHAIN_ID) {
    throw new Error("Connect your wallet to Ethereum Sepolia");
  }

  return new Contract(
    HEALTH_ALERT_REGISTRY_ADDRESS,
    registryAbi,
    await provider.getSigner(),
  );
}
