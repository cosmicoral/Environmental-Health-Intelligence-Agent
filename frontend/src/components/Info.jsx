function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-950/70 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </div>
  );
}

export default Info;