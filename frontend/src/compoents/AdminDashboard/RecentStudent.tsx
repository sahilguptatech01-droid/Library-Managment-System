import { ArrowRight, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  mobileNo: string;
}

interface Props {
  students: Student[];
}

export default function RecentStudents({ students }: Props) {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Students
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest registered students
          </p>
        </div>

        <button
          onClick={() => navigate("/students")}
          className="flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Students */}
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between rounded-2xl bg-slate-800/70 p-4 transition hover:bg-slate-800"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-cyan-500 text-lg font-bold text-white">
                {student.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {student.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {student.mobileNo}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/details/${student.id}`)}
              className="rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {students.length === 0 && (
        <div className="py-10 text-center">
          <UserPlus className="mx-auto text-slate-600" size={42} />

          <p className="mt-4 text-slate-400">
            No students found.
          </p>
        </div>
      )}
    </div>
  );
}