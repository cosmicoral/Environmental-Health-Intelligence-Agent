function Workflow() {
  const steps = [
    "Public Health Data",
    "Climate Data",
    "Gemini Risk Analysis",
    "AI Decision Gate",
    "Solidity Registry",
    "Dashboard",
  ];

  return (
    <section className="mt-6 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-xl font-bold">Workflow</h2>

      <div className="mt-5 grid gap-3 md:grid-cols-6">
        {steps.map((step, i) => (
          <div key={step} className="rounded-2xl bg-slate-950 p-4 text-center">
            <p className="text-xs text-slate-500">Step {i + 1}</p>
            <p className="mt-2 font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workflow;