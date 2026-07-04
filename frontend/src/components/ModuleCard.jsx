export default function ModuleCard({ icon, title, status, description }) {
  return (
    <div className="module-card">
      <div className="module-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="status">{status}</p>
      <p className="muted">{description}</p>
    </div>
  );
}