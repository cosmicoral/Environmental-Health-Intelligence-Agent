import { BrowserProvider, Contract } from "ethers";
import contractJson from "./abi/HealthAlertRegistry.json";

const CONTRACT_ADDRESS = "0x18f1f45025436260f3fFDDF239751bCFb0306b0e";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("MetaMask not found");
  }

  const provider = new BrowserProvider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  const signer = await provider.getSigner();

  return new Contract(
    CONTRACT_ADDRESS,
    contractJson.abi,
    signer
  );
}

export async function getLatestAlert() {
  const contract = await getContract();

  const count = await contract.getAlertCount();

  if (count === 0n) {
    return null;
  }

  const latest = await contract.getAlert(count - 1n);

  return {
    source: latest.source,
    region: latest.region,
    disease: latest.disease,
    riskScore: Number(latest.riskScore),
    summary: latest.summary,
    timestamp: Number(latest.timestamp),
  };
}