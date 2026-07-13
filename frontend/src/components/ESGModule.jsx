import Info from "./Info";

function calculateEsgRisk(esg) {
  if (!esg) return 0;

  const forecast = Number(esg.forecast ?? esg.actual ?? 0);
  const index = String(esg.index ?? "").toLowerCase();

  if (index === "very high" || forecast >= 300) return 5;
  if (index === "high" || forecast >= 200) return 4;
  if (index === "moderate" || forecast >= 100) return 3;
  if (index === "low") return 1;

  return 1;
}

function ESGModule({ esg }) {
  const actual =
    esg?.actual !== undefined ? Number(esg.actual) : undefined;

  const forecast =
    esg?.forecast !== undefined ? Number(esg.forecast) : undefined;

  const index = String(esg?.index ?? "").toLowerCase();

  const displayIndex = index
    ? index.replace(/\b\w/g, (character) => character.toUpperCase())
    : "Loading";

  const esgRisk = calculateEsgRisk(esg);

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
    moderate: "Normal operating conditions. Continue monitoring.",
    high: "Consider reducing non-essential electricity usage.",
    "very high":
      "Delay non-critical energy-intensive workloads where possible.",
  };

  const status = statusMap[index] || "Loading";

  const recommendation =
    recommendationMap[index] || "Awaiting ESG assessment.";

  return (
    <section className="mt-6 rounded-[2rem] border border-lime-500/30 bg-lime-950/20 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
            ESG Intelligence
          </p>

          <h2 className="mt-2 text-xl font-bold">
            UK Carbon Monitoring
          </h2>
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

        <Info label="Carbon Index" value={displayIndex} />

        <Info label="ESG Risk" value={esg ? `${esgRisk}/5` : "Loading"} />

        <Info label="Trend" value={trend} />

        <Info label="Status" value={status} />

        <Info label="Region" value="Great Britain" />

        <Info
          label="Source"
          value={esg?.source || "Carbon Intensity API"}
        />

        <Info
          label="Data Window"
          value={
            esg?.from && esg?.to
              ? `${esg.from} — ${esg.to}`
              : esg?.from || "Live API response"
          }
        />
      </div>

      <div className="mt-5 rounded-3xl border border-slate-800 bg-black/30 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
          ESG Assessment
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-200">
          Current grid carbon intensity is{" "}
          {actual !== undefined ? `${actual} gCO₂/kWh` : "loading"} and is
          classified as {displayIndex}. The short-term forecast is{" "}
          {forecast !== undefined ? `${forecast} gCO₂/kWh` : "loading"}, with
          an ESG risk level of {esg ? `${esgRisk}/5` : "loading"}.
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