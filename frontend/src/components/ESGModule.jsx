import Info from "./Info";

function ESGModule({ esg }) {
  const actual = esg?.actual;
  const forecast = esg?.forecast;
  const index = esg?.index;

  const trend =
    actual !== undefined && forecast !== undefined
      ? forecast > actual
        ? "Increasing"
        : forecast < actual
          ? "Improving"
          : "Stable"
      : "Loading";

  const statusMap = {
    low: "Optimal",
    moderate: "Normal",
    high: "Monitor",
    "very high": "Critical",
  };

  const recommendationMap = {
    low: "Good time for energy-intensive workloads.",
    moderate: "Normal operating conditions.",
    high: "Consider reducing non-essential electricity usage.",
    "very high": "Delay non-critical energy-intensive workloads if possible.",
  };

  const status = statusMap[index] || "Loading";
  const recommendation = recommendationMap[index] || "Awaiting ESG assessment.";

  return (
    <section className="mt-6 rounded-[2rem] border border-lime-500/30 bg-lime-950/20 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
            ESG Intelligence
          </p>
          <h2 className="mt-2 text-xl font-bold">UK Carbon Monitoring</h2>
        </div>

        <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm font-semibold text-lime-300">
          {esg ? "Live ESG Data" : "Loading"}
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <Info
          label="Current Carbon"
          value={actual !== undefined ? `${actual} gCO₂/kWh` : "Loading"}
        />
        <Info
          label="Forecast"
          value={forecast !== undefined ? `${forecast} gCO₂/kWh` : "Loading"}
        />
        <Info label="Carbon Index" value={index || "Loading"} />
        <Info label="Trend" value={trend} />
        <Info label="Status" value={status} />
        <Info label="Region" value="Great Britain" />
        <Info label="Source" value={esg?.source || "Carbon Intensity API"} />
        <Info label="Updated" value={esg?.from || "Live API response"} />
      </div>

      <div className="mt-5 rounded-3xl border border-slate-800 bg-black/30 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
          ESG Assessment
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-200">
          Current grid carbon intensity is{" "}
          {actual !== undefined ? `${actual} gCO₂/kWh` : "loading"} and is
          classified as {index || "loading"}. The short-term forecast is{" "}
          {forecast !== undefined ? `${forecast} gCO₂/kWh` : "loading"}, with
          the trend currently marked as {trend}.
        </p>

        <p className="mt-4 text-sm font-semibold text-lime-300">
          Recommendation
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {recommendation}
        </p>
      </div>
    </section>
  );
}

export default ESGModule;