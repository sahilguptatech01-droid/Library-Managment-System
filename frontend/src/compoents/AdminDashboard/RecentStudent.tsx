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
<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6">

  {/* Header */}
  <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">

    <div className="min-w-0">
      <h2 className="text-lg font-semibold text-white sm:text-xl">
        Recent Students
      </h2>

      <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
        Latest registered students
      </p>
    </div>

    <button
      onClick={() => navigate("/students")}
      className="
        flex shrink-0 items-center gap-1
        rounded-lg
        px-2.5 py-2
        text-xs font-medium
        text-zinc-300
        transition
        hover:bg-zinc-800
        hover:text-white
        sm:px-3 sm:text-sm
      "
    >
      <span className="hidden xs:inline sm:inline">
        View All
      </span>

      <span className="sm:hidden">
        All
      </span>

      <ArrowRight size={15} />
    </button>

  </div>

  {/* Students */}
  <div className="space-y-2.5">

    {students.map((student) => (
      <div
        key={student.id}
        className="
          flex items-center gap-3
          rounded-xl
          border border-zinc-800
          bg-zinc-900/50
          p-3
          transition-colors duration-200
          hover:border-zinc-700
          hover:bg-zinc-900
          sm:gap-4
          sm:p-4
        "
      >

        {/* Student Info */}
        <div className="flex min-w-0 flex-1 items-center gap-3">

          {/* Avatar */}
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full
              border border-zinc-700
              bg-zinc-800
              text-sm font-semibold
              text-white
              sm:h-11 sm:w-11
              sm:text-base
            "
          >
            {student.name.charAt(0).toUpperCase()}
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">

            <h3 className="
              truncate
              text-sm font-medium text-white
              sm:text-base
            ">
              {student.name}
            </h3>

            <p className="
              mt-0.5
              truncate
              text-xs text-zinc-500
              sm:text-sm
            ">
              {student.mobileNo}
            </p>

          </div>

        </div>

        {/* View Button */}
        <button
          onClick={() => navigate(`/details/${student.id}`)}
          className="
            shrink-0
            rounded-lg
            border border-zinc-700
            bg-zinc-900
            px-3 py-2
            text-xs font-medium
            text-zinc-200
            transition
            hover:border-zinc-500
            hover:bg-white
            hover:text-black
            sm:px-4
            sm:text-sm
          "
        >
          View
        </button>

      </div>
    ))}

  </div>

  {/* Empty State */}
  {students.length === 0 && (
    <div
      className="
        rounded-xl
        border border-dashed border-zinc-800
        px-4 py-10
        text-center
        sm:py-12
      "
    >
      <UserPlus
        className="mx-auto text-zinc-600"
        size={38}
      />

      <p className="mt-4 text-sm text-zinc-500">
        No students found.
      </p>
    </div>
  )}

</div>
  );
}