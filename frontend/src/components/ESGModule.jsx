import { motion } from "framer-motion";
import esgIcon from "../assets/esg-icon.svg";
import { calculateEsgRisk } from "../domain/decision";

function ESGModule({ carbonData, loading, error }) {
  const actual = Number(carbonData?.actual ?? 0);
  const forecast = Number(carbonData?.forecast ?? 0);
  const risk = calculateEsgRisk(carbonData);
  const trend = !carbonData ? "Unavailable" : forecast > actual ? "Rising" : forecast < actual ? "Improving" : "Stable";
  const recommendation = risk >= 4
    ? "Defer non-critical energy-intensive workloads."
    : risk >= 3
      ? "Monitor grid conditions before scheduling flexible demand."
      : "Grid conditions support normal operating schedules.";
  const scale = Math.max(actual, forecast, 350);

  return (
    <section className="module-section module-section--esg">
      <div className="section-heading">
        <div><div className="eyebrow eyebrow--green"><span /> Carbon intelligence</div><h2>Institutional grid signal monitor.</h2></div>
        <span className="status-pill">{loading ? "Synchronizing" : "Great Britain · Live API"}</span>
      </div>
      <article className="glass-card esg-terminal">
        <div className="esg-terminal__masthead"><div><img src={esgIcon} alt="" /><div><span className="overline">National Grid ESO</span><h3>Carbon intensity</h3></div></div><div className="market-status"><span /> Market data live</div></div>
        <div className="esg-terminal__grid">
          <div className="carbon-primary"><span>Current intensity</span><strong>{carbonData ? actual : "—"}</strong><small>gCO₂ / kWh</small><div className="trend-chip">↗ {trend}</div></div>
          <div className="carbon-bars">
            {[["Actual", actual, "cyan"], ["Forecast", forecast, "green"]].map(([label, value, tone]) => (
              <div className="carbon-bar" key={label}><div><span>{label}</span><strong>{carbonData ? value : "—"}</strong></div><div className="carbon-bar__track"><motion.span className={`carbon-bar__fill carbon-bar__fill--${tone}`} initial={{ width: 0 }} animate={{ width: carbonData ? `${Math.min(100, (value / scale) * 100)}%` : "0%" }} transition={{ duration: 1 }} /></div></div>
            ))}
          </div>
          <div className="carbon-table">
            <div><span>Grid index</span><strong>{carbonData?.index ?? "Unavailable"}</strong></div>
            <div><span>Risk classification</span><strong>{carbonData ? `${risk} / 5` : "—"}</strong></div>
            <div><span>Direction</span><strong>{trend}</strong></div>
            <div><span>Window</span><strong>{carbonData?.from ? new Date(carbonData.from).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"}</strong></div>
          </div>
        </div>
        <div className="recommendation"><span>System recommendation</span><p>{carbonData ? recommendation : error ?? "Carbon-intensity data unavailable."}</p></div>
      </article>
    </section>
  );
}

export default ESGModule;
