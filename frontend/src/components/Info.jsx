function Info({ label, value, detail, accent = "cyan" }) {
  return (
    <div className="metric-card">
      <span className={`metric-card__dot metric-card__dot--${accent}`} />
      <p className="metric-card__label">{label}</p>
      <p className="metric-card__value">{value}</p>
      {detail ? <p className="metric-card__detail">{detail}</p> : null}
    </div>
  );
}

export default Info;
