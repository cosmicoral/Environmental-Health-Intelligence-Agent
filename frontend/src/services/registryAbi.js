export const registryAbi = [
  "function getAlertCount() view returns (uint256)",
  "function getLatestAlert() view returns ((string source, string region, string disease, uint256 riskScore, string summary, uint256 timestamp))",
  "function getClimateAlertCount() view returns (uint256)",
  "function getLatestClimateAlert() view returns ((uint256 alertId, string city, int256 temperature, uint8 humidity, uint8 uvIndex, uint8 riskLevel, string safetyAdvice, string dataSource, bytes32 evidenceHash, uint256 timestamp, address publisher))",
  "function getEnvironmentalDecisionAlertCount() view returns (uint256)",
  "function getLatestEnvironmentalDecisionAlert() view returns ((uint256 alertId, string source, string region, string disease, uint256 healthRisk, uint8 climateRisk, uint8 esgRisk, bytes32 proofHash, string summary, uint256 timestamp, address publisher))",
  "function recordAlert(string source, string region, string disease, uint256 riskScore, string summary)",
  "function recordClimateAlert(string city, int256 temperature, uint8 humidity, uint8 uvIndex, uint8 riskLevel, string safetyAdvice, string dataSource, bytes32 evidenceHash) returns (uint256 alertId)",
  "function recordEnvironmentalDecisionAlert(string source, string region, string disease, uint256 healthRisk, uint8 climateRisk, uint8 esgRisk, bytes32 proofHash, string summary) returns (uint256 alertId)",
];
