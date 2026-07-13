import environmentGraph from "../assets/environment-node-graph.svg";
import blockchainIcon from "../assets/blockchain-icon.svg";

const capabilities = [
  ["01", "Multi-source collection", "CDC Open Data, Open-Meteo, and UK grid carbon intensity are normalized before evaluation."],
  ["02", "AI-assisted analysis", "Gemini produces a validated public-health score and concise summary; deterministic rules remain outside the model."],
  ["03", "CRE publication", "Threshold-qualified health alerts are encoded into a Chainlink CRE report and submitted to Sepolia."],
  ["04", "Transparent limits", "The registry is permissionless for demonstration, and zkVerify remains an independent historical proof demo."],
];

function ModuleGrid() {
  return (
    <section className="module-section capabilities-section">
      <div className="capabilities-visual"><img src={environmentGraph} alt="Environmental data node graph" /><div><img src={blockchainIcon} alt="" /><span>Built for transparent evaluation</span><strong>Intelligence you can trace.</strong></div></div>
      <div className="capabilities-grid">
        {capabilities.map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}
      </div>
      <footer><div className="brand"><span className="brand__mark">T</span><span>TerraGuardian</span></div><p>Environmental decision intelligence · Hackathon demonstration</p><span>Ethereum Sepolia · 2026</span></footer>
    </section>
  );
}

export default ModuleGrid;
