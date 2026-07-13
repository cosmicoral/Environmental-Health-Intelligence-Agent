export const DECISION_THRESHOLDS = Object.freeze({
  health: 30,
  climate: 3,
  esg: 3,
});

export function clamp(value, minimum, maximum) {
  return Math.min(Math.max(Number(value) || 0, minimum), maximum);
}

export function calculateClimateAssessment(temperature, uvIndex) {
  if (temperature >= 35 || uvIndex >= 8) {
    return {
      riskLevel: 5,
      safetyAdvice:
        "Extreme heat or UV risk. Avoid outdoor activity during peak hours.",
    };
  }

  if (temperature >= 30 || uvIndex >= 6) {
    return {
      riskLevel: 4,
      safetyAdvice: "High heat or UV risk. Reduce prolonged outdoor exposure.",
    };
  }

  if (temperature >= 26 || uvIndex >= 4) {
    return {
      riskLevel: 3,
      safetyAdvice:
        "Moderate heat risk. Stay hydrated and check vulnerable groups.",
    };
  }

  if (temperature >= 22) {
    return {
      riskLevel: 2,
      safetyAdvice: "Mild heat risk. Continue normal precautions.",
    };
  }

  return {
    riskLevel: 1,
    safetyAdvice: "Normal conditions. Monitor local weather updates.",
  };
}

export function calculateEsgRisk(carbonData) {
  if (!carbonData) return 0;

  const forecast = Number(carbonData.forecast ?? carbonData.actual ?? 0);
  const index = String(carbonData.index ?? "").toLowerCase();

  if (index === "very high" || forecast >= 300) return 5;
  if (index === "high" || forecast >= 200) return 4;
  if (index === "moderate" || forecast >= 100) return 3;
  return 1;
}

export function evaluateDecision({ healthAlert, climate, carbonData }) {
  const healthRisk = clamp(healthAlert?.riskScore, 0, 100);
  const climateRisk = clamp(climate?.riskLevel, 0, 5);
  const esgRisk = calculateEsgRisk(carbonData);
  const inputs = {
    health: {
      value: healthRisk,
      threshold: DECISION_THRESHOLDS.health,
      triggered: healthRisk >= DECISION_THRESHOLDS.health,
    },
    climate: {
      value: climateRisk,
      threshold: DECISION_THRESHOLDS.climate,
      triggered: climateRisk >= DECISION_THRESHOLDS.climate,
    },
    esg: {
      value: esgRisk,
      threshold: DECISION_THRESHOLDS.esg,
      triggered: esgRisk >= DECISION_THRESHOLDS.esg,
    },
  };

  return {
    inputs,
    shouldPublish:
      inputs.health.triggered ||
      inputs.climate.triggered ||
      inputs.esg.triggered,
  };
}

export function getHealthRiskLabel(score) {
  if (score < DECISION_THRESHOLDS.health) return "Low signal";
  if (score <= 70) return "Elevated signal";
  return "High signal";
}
