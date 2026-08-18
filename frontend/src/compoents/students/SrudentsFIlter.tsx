export default function StudentsFilters() {
  return (
<div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

  <select
    className="
      w-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      px-4 py-3
      text-sm text-zinc-200
      outline-none
      transition
      focus:border-zinc-600
      focus:ring-2
      focus:ring-zinc-700/30
      sm:w-auto
      sm:px-5
    "
  >
    <option>All Students</option>
    <option>Active</option>
    <option>Inactive</option>
  </select>

  <select
    className="
      w-full
      rounded-xl
      border border-zinc-800
      bg-zinc-900
      px-4 py-3
      text-sm text-zinc-200
      outline-none
      transition
      focus:border-zinc-600
      focus:ring-2
      focus:ring-zinc-700/30
      sm:w-auto
      sm:px-5
    "
  >
    <option>Newest First</option>
    <option>Oldest First</option>
    <option>Name A-Z</option>
  </select>

</div>
  );
}