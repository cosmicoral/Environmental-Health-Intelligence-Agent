import { motion } from "framer-motion";
import decisionIllustration from "../assets/decision-gate-illustration.svg";
import healthIcon from "../assets/health-icon.svg";
import climateIcon from "../assets/climate-icon.svg";
import esgIcon from "../assets/esg-icon.svg";
import { evaluateDecision } from "../domain/decision";

function SignalInput({ icon, label, input, unit, delay }) {
  return (
    <motion.div className={`signal-input ${input.triggered ? "is-triggered" : ""}`} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay }}>
      <img src={icon} alt="" />
      <div><span>{label}</span><strong>{input.value}{unit}</strong><small>Threshold {input.threshold}{unit}</small></div>
      <i>{input.triggered ? "Triggered" : "Monitor"}</i>
    </motion.div>
  );
}

function DecisionGate({ healthAlert, climate, carbonData }) {
  const decision = evaluateDecision({ healthAlert, climate, carbonData });

  return (
    <section id="decision-gate" className="module-section decision-section">
      <div className="section-heading section-heading--center"><div><div className="eyebrow eyebrow--green"><span /> Deterministic Decision Gate</div><h2>Three signals. One publication decision.</h2><p>This client-side preview applies the same thresholds as the CRE workflow; it is not an on-chain execution receipt.</p></div></div>
      <article className="decision-console">
        <img className="decision-console__watermark" src={decisionIllustration} alt="" />
        <div className="decision-console__inputs">
          <SignalInput icon={healthIcon} label="Health risk" input={decision.inputs.health} unit="/100" delay={0} />
          <SignalInput icon={climateIcon} label="Climate risk" input={decision.inputs.climate} unit="/5" delay={0.08} />
          <SignalInput icon={esgIcon} label="Carbon risk" input={decision.inputs.esg} unit="/5" delay={0.16} />
        </div>
        <div className="decision-connector"><span /><span /><span /><i /></div>
        <motion.div className="decision-engine" initial={{ scale: 0.94, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
          <div className="decision-engine__core"><span>OR</span></div>
          <div><span className="overline">Policy engine</span><strong>Threshold evaluation</strong><small>Deterministic · auditable · off-chain</small></div>
        </motion.div>
        <div className="decision-arrow"><span>Decision output</span><i>↓</i></div>
        <motion.div className={`decision-result ${decision.shouldPublish ? "decision-result--publish" : "decision-result--skip"}`} layout>
          <div><span className="decision-result__pulse" /><div><small>Current preview</small><strong>{decision.shouldPublish ? "Publish CRE Report" : "Skip publication"}</strong></div></div>
          <p>{decision.shouldPublish ? "At least one signal meets its publication threshold." : "All signals remain below their configured thresholds."}</p>
          <span className="decision-result__chain">Next: {decision.shouldPublish ? "Ethereum Sepolia" : "Next scheduled run"}</span>
        </motion.div>
      </article>
    </section>
  );
}

export default DecisionGate;
