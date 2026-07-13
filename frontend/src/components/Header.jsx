import { motion } from "framer-motion";
import heroOrbit from "../assets/hero-orbit.jpg";
import planetIllustration from "../assets/planet-illustration.svg";

function Header({ lastUpdated, loading, onRefresh }) {
  const updateLabel = lastUpdated
    ? lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "Awaiting telemetry";

  return (
    <>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="TerraGuardian home">
          <span className="brand__mark">T</span>
          <span>TerraGuardian</span>
        </a>
        <div className="topbar__links">
          <a href="#intelligence">Intelligence</a>
          <a href="#decision-gate">Decision Gate</a>
          <a href="#architecture">Architecture</a>
        </div>
        <button className="refresh-button" onClick={onRefresh} disabled={loading}>
          <span className={loading ? "refresh-button__icon is-spinning" : "refresh-button__icon"}>↻</span>
          {loading ? "Synchronizing" : "Refresh data"}
        </button>
      </nav>

      <header id="top" className="hero">
        <img className="hero__background" src={heroOrbit} alt="" />
        <div className="hero__veil" />
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow"><span /> Environmental decision intelligence</div>
          <h1>Planetary signals.<br /><em>Decision-grade clarity.</em></h1>
          <p className="hero__lede">
            TerraGuardian combines public-health, climate, and carbon-intensity
            signals into a deterministic Chainlink CRE publication decision.
          </p>
          <div className="hero__actions">
            <a className="primary-button" href="#decision-gate">Explore decision gate <span>↘</span></a>
            <a className="secondary-button" href="#architecture">View system architecture</a>
          </div>
          <div className="hero__status-row">
            <div><span className="live-dot" /> Sepolia read channel</div>
            <div>Updated {updateLabel}</div>
            <div>CRE simulation architecture</div>
          </div>
        </motion.div>

        <motion.img
          className="hero__planet"
          src={planetIllustration}
          alt="Illustrated environmental intelligence globe"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        />
      </header>

      <div className="trust-rail" aria-label="Technology stack">
        {[
          ["Chainlink CRE", "Workflow"],
          ["Gemini 2.5", "AI analysis"],
          ["Ethereum", "Sepolia"],
          ["Groth16", "Independent proof demo"],
        ].map(([name, detail]) => (
          <div className="trust-rail__item" key={name}>
            <span>{name}</span><small>{detail}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
