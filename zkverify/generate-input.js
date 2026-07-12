import fs from "node:fs";
import { buildPoseidon } from "circomlibjs";

async function main() {
  const healthRisk = 85;
  const climateRisk = 3;
  const esgRisk = 4;

  // MVP encoding: combine the three decision scores into one integer.
  // Example: 85, 3, 4 => 850304
  const decisionSecret =
    BigInt(healthRisk * 10000 + climateRisk * 100 + esgRisk);

  const poseidon = await buildPoseidon();
  const hash = poseidon([decisionSecret]);
  const decisionHash = poseidon.F.toString(hash);

  const input = {
    decisionSecret: decisionSecret.toString(),
    decisionHash,
  };

  fs.writeFileSync(
    "./input.json",
    JSON.stringify(input, null, 2),
  );

  console.log("Generated input.json");
  console.log(input);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});