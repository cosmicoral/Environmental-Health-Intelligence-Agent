function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Chainlink CRE × Gemini × zkVerify
        </p>

        <h1 className="mt-3 text-6xl font-extrabold tracking-tight text-white">
          Environmental Health Intelligence
        </h1>

        <p className="mt-2 text-slate-400">
          Verifiable AI monitoring for public health, climate risk, and ESG data.
        </p>
      </div>

      <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
        ● CRE Simulation Live
      </div>
    </header>
  );
}

export default Header;