const StatsCard = ({
  title = "Revenue",
  value = "10000",
  growth = "+12.5%",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-500/10">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"></div>

      {/* Title */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
          {title}
        </p>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
          {growth}
        </span>
      </div>

      {/* Number */}
      <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
        {value}
      </h2>

    

    </div>
  );
};

export default StatsCard;