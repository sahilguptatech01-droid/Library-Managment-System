import StudentsHeader from "../compoents/students/StudentsHeader";
// import StudentsGrid from "../components/students/StudentsGrid";
import Box from "../compoents/StudentTable";
import StudentsFilters from "../compoents/students/SrudentsFIlter";
import StudentsSearch from "../compoents/students/StudentsSearch";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black">

      <StudentsHeader />

      <div className="mx-auto max-w-7xl p-6 space-y-6">

        <StudentsSearch />

        <StudentsFilters />

        <Box/>

      </div>

    </div>
  );
}