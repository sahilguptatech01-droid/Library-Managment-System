import { AlertTriangle, ArrowLeft, RefreshCw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GlobalError() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-black px-6">
      <div className="w-full max-w-xl rounded-3xl border border-red-500/20 bg-slate-900/80 p-10 text-center shadow-2xl backdrop-blur-xl">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/15">
          <AlertTriangle
            size={48}
            className="text-red-500"
          />
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-bold text-white">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg leading-7 text-slate-400">
          An unexpected error occurred while processing your request.
          Please try again or return to the previous page.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 rounded-xl border border-indigo-500 bg-indigo-500/10 px-6 py-3 font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
          >
            <Home size={18} />
            Home
          </button>

        </div>

      </div>
    </div>
  );
}