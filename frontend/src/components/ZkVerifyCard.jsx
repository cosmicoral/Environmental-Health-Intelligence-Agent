function shortenHash(value) {
  if (!value) return "Unavailable";

  return `${value.slice(0, 14)}...${value.slice(-12)}`;
}

function ZkVerifyCard() {
  const transactionHash =
    "0x942a124065c32cf758be3c90caaf562545e7b58cee1bba950e4a909747029a2f";

  const statementHash =
    "0xcb17b4b45cc94c05670e0f43c691143fce6f391d88adf7802bd28e2bf1baede5";

  return (
    <section className="mt-6 rounded-[2rem] border border-violet-500/30 bg-violet-950/20 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            zkVerify Proof Pipeline
          </p>

          <h2 className="mt-2 text-xl font-bold">
            Groth16 Proof Finalized
          </h2>
        </div>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
          Verified
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-500">Network</p>
          <p className="mt-2 font-semibold">
            zkVerify Volta Testnet
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-500">Proof System</p>
          <p className="mt-2 font-semibold">Groth16</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-500">
            Transaction Hash
          </p>

          <p
            className="mt-2 break-all font-mono text-sm text-cyan-300"
            title={transactionHash}
          >
            {shortenHash(transactionHash)}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-500">
            Statement Hash
          </p>

          <p
            className="mt-2 break-all font-mono text-sm text-cyan-300"
            title={statementHash}
          >
            {shortenHash(statementHash)}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        This proof was generated and submitted through the separate zkVerify
        proof pipeline. Automatic orchestration from the Chainlink CRE workflow
        is planned as a future integration.
      </p>
    </section>
  );
}

export default ZkVerifyCard;