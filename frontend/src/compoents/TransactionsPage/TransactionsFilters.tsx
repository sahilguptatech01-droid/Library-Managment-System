import { Search } from "lucide-react";

export default function TransactionFilters() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search student, ID or transaction..."
            className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 pl-11 pr-4 outline-none transition focus:border-violet-500"
          />
        </div>

        <select className="h-12 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <option>All Status</option>
          <option>Paid</option>
          <option>Pending</option>
        </select>

        <select className="h-12 rounded-xl border border-zinc-800 bg-zinc-950 px-4">
          <option>This Month</option>
          <option>Today</option>
          <option>This Week</option>
          <option>All Time</option>
        </select>
      </div>
    </div>
  );
}