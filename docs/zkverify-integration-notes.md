# zkVerify Integration Notes

## Goal
Submit the generated environmental decision proof package to zkVerify and receive a verification receipt before recording the alert on-chain.

## Current Status
The workflow currently generates a zkVerify-ready proof package and proofHash, but does not submit it to zkVerify yet.

## Questions to Resolve
- Which zkVerify SDK/API should be used?
- What proof format is required?
- Which testnet/network should be used?
- Does verification return a receipt/hash that can be stored on-chain?