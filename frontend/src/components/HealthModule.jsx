import { motion } from "framer-motion";
import healthIcon from "../assets/health-icon.svg";
import { clamp, getHealthRiskLabel } from "../domain/decision";
import Badge from "./Badge";

const requiredFields = ["source", "region", "disease", "riskScore", "summary"];

function HealthModule({ healthAlert, loading, error }) {
  const score = clamp(healthAlert?.riskScore, 0, 100);
  const circumference = 2 * Math.PI * 86;
  const gaugeOffset = circumference - (score / 100) * circumference;
  const completeness = healthAlert
    ? Math.round(
        (requiredFields.filter((field) => healthAlert[field] !== undefined && healthAlert[field] !== "").length /
          requiredFields.length) * 100,
      )
    : 0;
  const recordedAt = healthAlert?.timestamp
    ? new Date(healthAlert.timestamp * 1000).toLocaleString()
    : "No Sepolia record available";

  return (
    <section id="intelligence" className="module-section module-section--health">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span /> Public health intelligence</div>
          <h2>Health signals with traceable context.</h2>
        </div>
        <div className="section-heading__meta">
          <span className={healthAlert ? "status-pill status-pill--live" : "status-pill"}>
            {loading ? "Synchronizing" : healthAlert ? "Sepolia record loaded" : "No record"}
          </span>
        </div>
      </div>

      <div className="health-grid">
        <motion.article className="glass-card risk-card" whileHover={{ y: -3 }}>
          <div className="card-kicker"><img src={healthIcon} alt="" /> Latest health signal</div>
          <div className="risk-gauge" aria-label={`Health risk score ${score} out of 100`}>
            <svg viewBox="0 0 220 220" role="img">
              <circle className="risk-gauge__track" cx="110" cy="110" r="86" />
              <motion.circle
                className="risk-gauge__progress"
                cx="110" cy="110" r="86"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: gaugeOffset }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div className="risk-gauge__value"><strong>{loading ? "—" : score}</strong><span>/100</span></div>
          </div>
          <div className="risk-card__summary">
            <strong>{getHealthRiskLabel(score)}</strong>
            <span>CRE health threshold: 30</span>
          </div>
          <div className="confidence">
            <div><span>Record completeness</span><strong>{completeness}%</strong></div>
            <div className="confidence__track"><motion.span initial={{ width: 0 }} animate={{ width: `${completeness}%` }} /></div>
          </div>
        </motion.article>

        <article className="glass-card health-context">
          <div className="health-context__header">
            <div>
              <span className="overline">Latest public record</span>
              <h3>{healthAlert?.disease ?? "Health alert unavailable"}</h3>
              <p>{healthAlert?.region ?? error ?? "Waiting for a registry response."}</p>
            </div>
            <div className="badge-row">
              <Badge>CDC Open Data</Badge><Badge tone="violet">Gemini</Badge><Badge tone="blue">Sepolia</Badge>
            </div>
          </div>
          <blockquote>
            {healthAlert?.summary ??
              "No on-chain health summary is available. Live climate and carbon signals can still be explored independently."}
          </blockquote>
          <div className="provenance-grid">
            <div><span>Declared source</span><strong>{healthAlert?.source ?? "Unavailable"}</strong></div>
            <div><span>Recorded at</span><strong>{recordedAt}</strong></div>
            <div><span>Registry model</span><strong>Permissionless demo</strong></div>
          </div>
          <div className="timeline" aria-label="Health signal workflow">
            {[
              ["01", "Collect", "CDC dataset"],
              ["02", "Analyze", "Gemini summary"],
              ["03", "Evaluate", "Decision Gate"],
              ["04", "Record", "Sepolia registry"],
            ].map(([number, title, detail], index) => (
              <div className="timeline__step" key={title}>
                <span>{number}</span><strong>{title}</strong><small>{detail}</small>
                {index < 3 ? <i /> : null}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default HealthModule;
