const modules = [
  { icon: "🦠", title: "Public Health", status: "Active", text: "CDC + Gemini live risk workflow" },
  { icon: "🌡️", title: "Heatwave", status: "Active", text: "Connected Heatwave-Proof-AI module" },
  { icon: "🌱", title: "EU ESG", status: "Planned", text: "Carbon, water, energy indicators" },
  { icon: "🔐", title: "zkVerify", status: "Planned", text: "Proof-backed AI and data outputs" },
  { icon: "📈", title: "The Graph", status: "Planned", text: "Index alerts for dashboards" },
];

function ModuleGrid() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {modules.map((module) => (
        <div key={module.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="text-3xl">{module.icon}</div>
          <h3 className="mt-4 text-xl font-bold">{module.title}</h3>
          <p className="mt-2 text-sm font-semibold text-cyan-300">{module.status}</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">{module.text}</p>
        </div>
      ))}
    </section>
  );
}

export default ModuleGrid;