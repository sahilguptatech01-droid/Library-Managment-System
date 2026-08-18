import { Search } from "lucide-react";

export default function StudentsSearch() {
  return (
<div className="relative w-full">
  <Search
    size={19}
    className="
      pointer-events-none
      absolute left-3.5 top-1/2
      -translate-y-1/2
      text-zinc-500
      sm:left-4
    "
  />

  <input
    type="text"
    placeholder="Search by student name..."
    className="
      w-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      py-3 pl-11 pr-4
      text-sm text-white
      placeholder:text-zinc-600
      outline-none
      transition-all duration-200
      focus:border-zinc-600
      focus:bg-zinc-900
      focus:ring-2
      focus:ring-zinc-700/30
      sm:rounded-2xl
      sm:py-3.5
      sm:pl-12
      sm:text-base
    "
  />
</div>
  );
}