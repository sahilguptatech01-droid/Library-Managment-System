interface Stats{
  title:string,
  value:number
}


const StatsCard = ({
  title,value
}:Stats) => {
  return (
<div
  className="
    relative overflow-hidden
    rounded-2xl
    border border-zinc-800
    bg-zinc-900
    p-4
    transition-all duration-200
    hover:border-zinc-700
    hover:bg-zinc-900/90
    sm:p-5
    lg:p-6
  "
>
  {/* Subtle background detail */}
  <div className="
    pointer-events-none
    absolute -right-12 -top-12
    h-24 w-24
    rounded-full
    bg-white/2
    blur-2xl
  " />

  {/* Title */}
  <div className="relative flex items-center justify-between">
    <p className="
      text-xs
      font-medium
      uppercase
      tracking-wide
      text-zinc-500
      sm:text-sm
    ">
      {title}
    </p>
  </div>

  {/* Number */}
  <h2 className="
    relative
    mt-3
    text-3xl
    font-semibold
    tracking-tight
    text-white
    sm:mt-4
    sm:text-4xl
    lg:text-5xl
  ">
    {value}
  </h2>
</div>
  );
};

export default StatsCard;