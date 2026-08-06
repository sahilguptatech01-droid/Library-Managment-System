import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentsHeader() {
  const navigate = useNavigate();

  return (
    <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Students
          </h1>

          <p className="mt-1 text-slate-400">
            Manage all registered students.
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-white transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </div>
    </div>
  );
}