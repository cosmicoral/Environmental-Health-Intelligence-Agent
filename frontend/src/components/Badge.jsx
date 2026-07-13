function Badge({ children, tone = "cyan" }) {
  return <span className={`signal-badge signal-badge--${tone}`}>{children}</span>;
}

export default Badge;
