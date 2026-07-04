# Environmental Health Intelligence Agent

A verifiable AI agent for environmental, ESG, and public health monitoring.

This project explores how Chainlink CRE, public real-world data APIs, LLM-based analysis, zkVerify, and Solidity smart contracts can be combined to generate transparent and verifiable risk alerts.

--------
## Workflow Architecture
<img width="1017" height="439" alt="Screenshot 2026-07-02 at 00 57 16" src="https://github.com/user-attachments/assets/b67c3b01-ea08-49d8-8734-f38edbf6c63a" />

## Current Workflow

This project implements an AI-powered public health intelligence workflow:

1. A Chainlink CRE cron trigger runs the workflow.
2. The workflow fetches weekly COVID-19 hospitalization data from CDC Open Data.
3. Gemini 2.5 Flash analyzes the CDC data and returns structured JSON:
   - riskScore
   - disease
   - region
   - summary
4. The result is encoded and sent to `HealthAlertRegistry.recordAlert`.
5. The Solidity contract stores the alert on-chain.

## Current Status

- CDC API integration: completed
- Gemini API integration: completed
- CRE secret mapping: completed
- Sepolia contract deployment: completed
- CRE workflow simulation: completed
- Chainlink CRE deployment access: requested
---

## Smart Contract

HealthAlertRegistry.sol

- recordAlert()

- getAlert()

- getAlertCount()


## Modules

### Phase 1: Disease Outbreak Monitoring
- Query public health datasets
- Use AI to summarize outbreak risk
- Record alerts on-chain with Solidity

### Phase 2: Environmental & ESG Monitoring
- Heatwave alerts
- Carbon credit / renewable energy verification
- Air quality and water quality monitoring

### Phase 3: zkVerify Integration
- Verify proofs for trusted real-world data
- Consume verified results in smart contracts

## Tech Stack

- Chainlink CRE
- Scaffold CRE
- Remix IDE
- Solidity
- TypeScript
- Public health APIs
- LLM APIs
- zkVerify
