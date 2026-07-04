export function createZkVerifyRecord(alert) {
  if (!alert) return null;

  const payload = {
    source: alert.source,
    disease: alert.disease,
    region: alert.region,
    riskScore: alert.riskScore,
    summary: alert.summary,
    timestamp: alert.timestamp,
  };

  const encoded = JSON.stringify(payload);

  return {
    status: "Proof reference generated",
    network: "zkVerify testnet",
    proofType: "AI output integrity proof",
    payloadHash: simpleHash(encoded),
    note: "This record represents the AI-generated alert payload that can be submitted to zkVerify for proof verification.",
  };
}

function simpleHash(input) {
  let hash = 0;

  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }

  return `0x${Math.abs(hash).toString(16).padStart(8, "0")}`;
}