const CardSkeleton = () => {
  return (
<div
  className="
    animate-pulse
    rounded-2xl
    border border-zinc-800
    bg-zinc-950
    p-4
    sm:rounded-3xl
    sm:p-6
  "
>
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    {/* Student Info */}
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

      {/* Avatar */}
      <div
        className="
          h-12 w-12 shrink-0
          rounded-full
          bg-zinc-800
          sm:h-14 sm:w-14
        "
      />

      {/* Text */}
      <div className="min-w-0">
        <div
          className="
            mb-2
            h-4
            w-32
            rounded-md
            bg-zinc-800
            sm:w-40
          "
        />

        <div className="h-3 w-20 rounded-md bg-zinc-900 sm:w-24" />
      </div>

    </div>

    {/* Button */}
    <div
      className="
        h-10
        w-full
        rounded-lg
        bg-zinc-800
        sm:w-24
        sm:rounded-xl
      "
    />

  </div>
</div>
  );
};

export default CardSkeleton;