function Badge({ children }) {
  return (
    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300">
      {children}
    </span>
  );
}

export default Badge;