import StudentsHeader from "../compoents/students/StudentsHeader";
// import StudentsGrid from "../components/students/StudentsGrid";
import Box from "../compoents/StudentTable";
import StudentsFilters from "../compoents/students/SrudentsFIlter";
import StudentsSearch from "../compoents/students/StudentsSearch";

export default function StudentsPage() {
  return (
<div className="min-h-screen w-full overflow-x-hidden bg-zinc-950 text-white">

  <StudentsHeader />

  <main className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

    <div className="space-y-4 sm:space-y-6">

      {/* Search */}
      <StudentsSearch />

      {/* Filters */}
      <StudentsFilters />

      {/* Students */}
      <Box />

    </div>

  </main>

</div>
  );
}