import { WifiOff, RefreshCw } from "lucide-react";

const OfflineScreen = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="w-full max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 sm:h-24 sm:w-24">
          <WifiOff
            size={36}
            strokeWidth={1.8}
            className="text-zinc-400 sm:h-10 sm:w-10"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
          You're Offline
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500 sm:text-base">
          No internet connection was detected. Check your network
          connection and try again.
        </p>

        {/* Retry */}
        <button
          type="button"
          onClick={handleRetry}
          className="
            mt-7
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-zinc-200
            active:scale-[0.98]
          "
        >
          <RefreshCw size={17} />
          Try Again
        </button>

        {/* Status */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-600">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          No internet connection
        </div>

      </div>
    </div>
  );
};

export default OfflineScreen;