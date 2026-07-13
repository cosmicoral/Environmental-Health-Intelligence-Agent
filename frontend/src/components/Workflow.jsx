const steps = [
  "Public Data",
  "Gemini Analysis",
  "Decision Gate",
  "Groth16 Proof",
  "zkVerify Volta",
  "Statement Hash",
  "Chainlink CRE",
  "Sepolia Registry",
  "Dashboard",
];

function Workflow() {
  return (
    <section className="mt-6 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Verifiable Workflow
        </p>

        <h2 className="mt-2 text-xl font-bold">
          Data to Verified On-chain Decision
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Step {index + 1}
            </p>

            <p className="mt-2 font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workflow;