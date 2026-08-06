const CardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-full bg-slate-700"></div>

          <div>
            <div className="mb-2 h-4 w-40 rounded bg-slate-700"></div>
            <div className="h-3 w-24 rounded bg-slate-800"></div>
          </div>

        </div>

        <div className="h-10 w-24 rounded-xl bg-slate-700"></div>

      </div>

    </div>
  );
};

export default CardSkeleton;