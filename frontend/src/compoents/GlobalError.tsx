import { AlertTriangle, RefreshCw, } from "lucide-react";

export default function GlobalError() {


  return (
   <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-6 sm:px-6">
  <div className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center shadow-2xl sm:rounded-3xl sm:p-10">

    {/* Icon */}
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 sm:h-24 sm:w-24">
      <AlertTriangle
        size={42}
        className="text-red-500 sm:h-12 sm:w-12"
      />
    </div>

    {/* Title */}
    <h1 className="mt-6 text-2xl font-bold text-white sm:mt-8 sm:text-4xl">
      Something Went Wrong
    </h1>

    {/* Description */}
    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
      An unexpected error occurred while processing your request.
      Please try again.
    </p>

    {/* Try Again */}
    <div className="mt-7 sm:mt-10">
      <button
        onClick={() => window.location.reload()}
        className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-white
          px-6
          py-3
          text-sm
          font-semibold
          text-black
          transition
          hover:bg-zinc-200
          active:scale-[0.98]
          sm:w-auto
        "
      >
        <RefreshCw size={18} />
        Try Again
      </button>
    </div>

  </div>
</div>
  );
}