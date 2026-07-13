import { motion } from "framer-motion";
import climateIcon from "../assets/climate-icon.svg";
import Info from "./Info";

function ClimateModule({ climate, climateSource, loading, error }) {
  const riskLevel = Number(climate?.riskLevel ?? 0);
  const heatCells = Array.from({ length: 18 }, (_, index) => {
    const intensity = Math.max(0.08, Math.min(1, (riskLevel + (index % 4)) / 8));
    return <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: intensity }} transition={{ delay: index * 0.025 }} />;
  });

  return (
    <section className="module-section module-section--climate">
      <div className="section-heading">
        <div><div className="eyebrow eyebrow--amber"><span /> Climate intelligence</div><h2>London atmospheric conditions.</h2></div>
        <span className="status-pill">{loading ? "Synchronizing" : climateSource}</span>
      </div>
      <div className="climate-layout">
        <article className="glass-card weather-visual">
          <div className="weather-visual__orb"><div className="weather-visual__sun" /><span className="weather-visual__ring" /></div>
          <div className="weather-visual__copy"><img src={climateIcon} alt="" /><span>{climate?.city ?? "London"}</span><strong>{climate ? `${climate.temperature}°` : "—"}</strong><p>{climate?.safetyAdvice ?? error ?? "Climate data unavailable."}</p></div>
        </article>
        <div className="climate-metrics">
          <Info label="Humidity" value={climate ? `${climate.humidity}%` : "—"} detail="Relative humidity" accent="amber" />
          <Info label="UV index" value={climate?.uvIndex ?? "—"} detail="Current Open-Meteo value" accent="amber" />
          <Info label="Wind" value={climate?.windSpeed !== undefined ? `${climate.windSpeed} km/h` : "—"} detail={climate?.windSpeed === undefined && climate ? "Not stored on-chain" : "10 m wind speed"} accent="blue" />
          <Info label="Climate risk" value={climate ? `${riskLevel}/5` : "—"} detail="Deterministic heat / UV rule" accent="rose" />
        </div>
        <article className="glass-card heatmap-card">
          <div className="heatmap-card__header"><div><span className="overline">Risk surface</span><h3>Heat signal matrix</h3></div><strong>{riskLevel || "—"}/5</strong></div>
          <div className="heatmap">{heatCells}</div>
          <div className="heatmap-card__legend"><span>Lower exposure</span><i /><span>Higher exposure</span></div>
        </article>
      </div>
    </section>
  );
}

export default ClimateModule;
