export default function AlertCard(){
    const alert= {
        source: "CDC Open Data + Gemini",
        disease: "COVID-19",
        region: "United States",
        riskScore: 10,
        summary:
        "COVID-19 hospitalization rates across the analyzed states are very low, suggesting minimal current risk.",
        status: "CRE simulation completed",
    };
      return (
    <section className="alert-card">

      <div>
        <p className="label">Latest Risk Score</p>
        <div className="score">{alert.riskScore}</div>
        <p className="muted">0 = low risk · 100 = high risk</p>

      </div>
      <div className="alert-details">
        <p><strong>Disease:</strong> {alert.disease}</p>
        <p><strong>Region:</strong> {alert.region}</p>
        <p><strong>Source:</strong> {alert.source}</p>
        <p><strong>Status:</strong> {alert.status}</p>
        <p className="summary">{alert.summary}</p>
      </div>

    </section>

  );
}