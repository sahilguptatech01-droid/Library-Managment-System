import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentsHeader() {
  const navigate = useNavigate();

  return (
<div className="border-b border-zinc-800 bg-zinc-950">
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-3 py-5 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between lg:px-8">

    {/* Title */}
    <div className="min-w-0">
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Students
      </h1>

      <p className="mt-1 text-sm leading-6 text-zinc-400 sm:text-base">
        Manage all registered students.
      </p>
    </div>

    {/* Back Button */}
    <button
      onClick={() => navigate(-1)}
      className="
        flex w-full items-center justify-center gap-2
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        px-4 py-3
        text-sm font-medium
        text-zinc-300
        transition-all duration-200
        hover:border-zinc-600
        hover:bg-zinc-800
        hover:text-white
        active:scale-[0.98]
        sm:w-auto
        sm:px-5
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>

  </div>
</div>
  );
}