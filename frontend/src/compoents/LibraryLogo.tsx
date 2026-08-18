export const LibraryLogo = () => (
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 20a2 2 0 0 1 2-2h12M9 6h6M9 10h6"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <span className="text-lg font-semibold text-white">
      LibraryBoy
    </span>
  </div>
);