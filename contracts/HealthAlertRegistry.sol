// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HealthAlertRegistry{
    struct Alert {
        string source;
        string region;
        string disease;
        uint256 riskScore;
        string summary;
        uint256 timestamp;
    }

    Alert[] public alerts;

    event AlertRecorded(
        uint256 indexed alertId,
        string source,
        string region,
        string disease,
        uint256 riskScore,
        string summary,
        uint256 timestamp
    );

    function recordAlert(
        string memory source,
        string memory region,
        string memory disease,
        uint256 riskScore,
        string memory summary
    ) external {
        require(riskScore <= 100, "Risk score must be <= 100");
        alerts.push(Alert({
            source: source,
            region: region,
            disease: disease,
            riskScore: riskScore,
            summary: summary,
            timestamp: block.timestamp
        }));

        emit AlertRecorded(
            alerts.length -1,
            source, 
            region, 
            disease, 
            riskScore, 
            summary, 
            block.timestamp
        );
    }
    function onReport(bytes calldata report) external {
    (
        string memory source,
        string memory region,
        string memory disease,
        uint256 riskScore,
        string memory summary
    ) = abi.decode(report, (string, string, string, uint256, string));

    require(riskScore <= 100, "Risk score must be <= 100");

    alerts.push(Alert({
        source: source,
        region: region,
        disease: disease,
        riskScore: riskScore,
        summary: summary,
        timestamp: block.timestamp
    }));

    emit AlertRecorded(
        alerts.length - 1,
        source,
        region,
        disease,
        riskScore,
        summary,
        block.timestamp
    );
}
    function getAlert(uint256 alertId) external view returns(Alert memory){
        return alerts[alertId];
}
    function getAlertCount() external view returns (uint256){
        return alerts.length;
    }
}