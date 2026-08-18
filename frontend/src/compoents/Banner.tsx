import { CheckCircle2 } from "lucide-react";

const Banner = () => {
  const features = [
    "Manage students and memberships",
    "Track fees and collections",
    "Monitor your library business",
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden border-r border-zinc-800 bg-zinc-950 px-10 xl:px-16">

      {/* Background Glow */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 max-w-xl">

        {/* Small Label */}
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          Built for Library Owners
        </span>

        {/* Heading */}
        <h1 className="mt-7 text-5xl font-black leading-tight xl:text-6xl">
          Manage Your
          <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Study Library
          </span>
          Smarter.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
          LibraryBoy helps you manage students, memberships, fees,
          collections and your library operations from one simple dashboard.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-zinc-300"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/10">
                <CheckCircle2
                  size={17}
                  className="text-violet-400"
                />
              </div>

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-500">
            Everything you need
          </p>

          <p className="mt-1 font-semibold text-white">
            One dashboard. One simple workflow.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Banner;