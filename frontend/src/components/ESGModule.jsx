import Info from "./Info";

function ESGModule({ esg }) {
    return(
        <section className="mt-6 rounded-[2rem] border border-lime-500/30 bg-lime-950/20 p-6">
        <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-300">
            ESG Intelligence
          </p>
          <h2 className="mt-2 text-xl font-bold">
            UK Carbon Monitoring
          </h2>
        </div>
        <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm font-semibold text-lime-300">

          Live ESG Data

        </span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Info
          label="Current Carbon"
          value={esg ? `${esg.actual} gCO₂/kWh` : "Loading"}
        />
        <Info
          label="Forecast"
          value={esg ? `${esg.forecast} gCO₂/kWh` : "Loading"}
        />
        <Info
          label="Carbon Index"
          value={esg?.index ?? "Loading"}
        />
      </div>
    </section>

  );
}