const Loading = ({className="fixed inset-0 z-9999"}) => {
  return (
<div className= {`  flex
        items-center
        justify-center
        bg-black
        ${className}`} >
  <div className="relative h-10 w-10">

    {/* Outer ring */}
    <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />

    {/* Animated ring */}
    <div
      className="
        absolute inset-0
        animate-spin
        rounded-full
        border-4
        border-transparent
        border-t-white
      "
    />

  </div>
</div>
  );
};

export default Loading;