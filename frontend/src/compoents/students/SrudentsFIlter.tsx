export default function StudentsFilters() {
  return (
    <div className="flex flex-wrap gap-4">

      <select className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white">
        <option>All Students</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <select className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white">
        <option>Newest First</option>
        <option>Oldest First</option>
        <option>Name A-Z</option>
      </select>

    </div>
  );
}