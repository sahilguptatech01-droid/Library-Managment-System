import { Search } from "lucide-react";

export default function StudentsSearch() {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        size={20}
      />

      <input
        type="text"
        placeholder="Search by student name..."
        className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
      />

    </div>
  );
}