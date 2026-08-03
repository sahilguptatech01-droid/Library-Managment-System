import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Show,SignInButton,SignUpButton,UserButton } from "@clerk/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 text-lg font-bold text-white">
              S
            </div>

            <div>
              <h1 className="text-lg font-bold text-white sm:text-xl">
                LibraryBoy
              </h1>

              <p className="hidden text-xs text-gray-400 sm:block">
                Self Study Library SaaS
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 text-gray-300 lg:flex">
            <Link
              to="/"
              className="transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="transition hover:text-cyan-400"
            >
              Dashboard
            </Link>

            <Link
              to="/create"
              className="transition hover:text-cyan-400"
            >
              Create Library
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 lg:flex">
            <Show when="signed-out">
              <div className="rounded-xl border border-slate-700 px-5 py-2 text-gray-300 transition hover:border-cyan-500">
                <SignInButton />
              </div>

              <div className="rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-2 font-semibold text-white">
                <SignUpButton />
              </div>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-white transition hover:bg-slate-800 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-125 pb-6" : "max-h-0"
          }`}
        >
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-4">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              Dashboard
            </Link>

            <Link
              to="/create"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              Create Library
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-gray-300 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              Contact
            </Link>

            <div className="border-t border-slate-700 pt-4">

              <Show when="signed-out">
                <div className="flex flex-col gap-3">

                  <div className="rounded-xl border border-slate-700 py-3 text-center text-white">
                    <SignInButton />
                  </div>

                  <div className="rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 py-3 text-center font-semibold text-white">
                    <SignUpButton />
                  </div>

                </div>
              </Show>

              <Show when="signed-in">
                <div className="flex justify-center">
                  <UserButton/>
                </div>
              </Show>

            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}