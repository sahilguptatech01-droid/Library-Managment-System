const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-zinc-900/90 px-10 py-8 shadow-2xl border border-zinc-700">

        {/* Spinner */}
        <div className="h-14 w-14 rounded-full border-4 border-zinc-700 border-t-indigo-500 animate-spin"></div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">
            Loading...
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Please wait a moment.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;