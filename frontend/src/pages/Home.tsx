import { SignInButton, SignUpButton } from "@clerk/react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  Users,
  Wallet,
  BellRing,
  BadgeAlert,
  Armchair,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
  Menu,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-violet-400" />,
      title: "Multi Library Management",
      desc: "Manage multiple self-study library branches from one dashboard with complete control.",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Student Management",
      desc: "Manage students, memberships, profiles, renewals and seat assignments effortlessly.",
    },
    {
      icon: <Wallet className="h-8 w-8 text-green-400" />,
      title: "Fee Tracking",
      desc: "Track paid, pending and overdue fees with complete payment history.",
    },
    {
      icon: <BellRing className="h-8 w-8 text-orange-400" />,
      title: "Automatic Notifications",
      desc: "Automatically send due fee reminders and renewal notifications.",
    },
    {
      icon: <BadgeAlert className="h-8 w-8 text-red-400" />,
      title: "Late Fee Management",
      desc: "Automatically calculate late fees and maintain outstanding balances.",
    },
    {
      icon: <Armchair className="h-8 w-8 text-purple-400" />,
      title: "Seat Management",
      desc: "Assign seats, monitor occupancy and avoid duplicate seat allocations.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-sky-400" />,
      title: "Attendance Tracking",
      desc: "Track student check-ins and check-outs with daily attendance reports.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-400" />,
      title: "Business Analytics",
      desc: "Monitor revenue, occupancy, collections and business performance in real time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 font-bold">
              S
            </div>

            <div>
              <h1 className="text-xl font-bold">LibraryBoy</h1>
              <p className="text-xs text-gray-400">
                Self Study Library SaaS
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-400">
            <span >Features</span>
            <Link  to='/dashboard'>Dashboard</Link>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
          </div>

          <div className="hidden md:flex gap-3">
            <div className="px-5 py-2 text-gray-300">
              <SignInButton />
            </div>

            <div className="rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-2 font-semibold">
              <SignUpButton/>
            </div>
          </div>

          <button className="md:hidden">
            <Menu />
          </button>

        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              Built for Self Study Library Owners
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
              Manage Your
              <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Study Library
              </span>
              Without The Chaos
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Manage students, memberships, seat allocation, attendance,
              notifications, late fees, collections and multiple library
              branches from one powerful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-4 font-semibold transition hover:scale-105">
                Start Free Trial
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-white/10 px-7 py-4 hover:bg-white/5">
                Book Demo
              </button>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8">

              <div>
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="mt-2 text-gray-500">
                  Library Branches
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">1200+</h3>
                <p className="mt-2 text-gray-500">
                  Students Managed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">₹25L+</h3>
                <p className="mt-2 text-gray-500">
                  Fees Tracked
                </p>
              </div>

            </div>

          </div>

          {/* Dashboard */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-semibold">
                    Owner Dashboard
                  </h3>

                  <p className="text-gray-500">
                    Live Business Overview
                  </p>
                </div>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Live
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Today's Collection", "₹18,450"],
                  ["Active Students", "486"],
                  ["Available Seats", "38"],
                  ["Pending Fees", "₹12,800"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/5 bg-slate-900 p-6"
                  >
                    <p className="text-gray-400">{title}</p>
                    <h4 className="mt-2 text-3xl font-bold">
                      {value}
                    </h4>
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-2xl bg-linear-to-r from-violet-600 to-cyan-500 p-6">

                <h4 className="text-xl font-bold">
                  Business Overview
                </h4>

                <div className="mt-5 space-y-3">

                  {[
                    "3 Library Branches",
                    "486 Active Students",
                    "91% Seat Occupancy",
                    "24 Membership Renewals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} />
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <span className="text-violet-400 font-semibold">
            Everything You Need
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Manage Every Part of
            <span className="block text-cyan-400">
              Your Library Business
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Built for self-study library owners to automate operations,
            track collections, monitor students and grow their business.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              {feature.icon}

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

            {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Simple Workflow
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Get Started in
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}4 Easy Steps
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400">
              Everything is designed to save your time and automate your library.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                step: "01",
                title: "Create Library",
                desc: "Add your library information and configure seats, timings and membership plans."
              },
              {
                step: "02",
                title: "Add Students",
                desc: "Register students, upload details and assign memberships."
              },
              {
                step: "03",
                title: "Assign Seats",
                desc: "Allocate fixed or flexible seats and monitor occupancy."
              },
              {
                step: "04",
                title: "Track Business",
                desc: "Monitor fees, attendance, collections and notifications from one dashboard."
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="text-5xl font-black text-violet-500/30">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              Testimonials
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Trusted By
              <span className="text-cyan-400">
                {" "}Library Owners
              </span>
            </h2>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
              {
                name: "Rahul Kumar",
                library: "Patna Study Hub",
                review:
                  "Managing fees and attendance used to take hours. Now everything is automated.",
              },
              {
                name: "Amit Singh",
                library: "Success Point Library",
                review:
                  "The dashboard gives me complete visibility of collections, students and renewals.",
              },
              {
                name: "Neha Sharma",
                library: "Focus Zone Library",
                review:
                  "Managing multiple branches from one place has made our operations much easier.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <div className="mb-6 flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="leading-8 text-gray-300">
                  "{item.review}"
                </p>

                <div className="mt-8">

                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
                    {item.library}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="overflow-hidden rounded-[40px] bg-linear-to-r from-violet-700 via-violet-600 to-cyan-600 p-14 text-center">

            <h2 className="text-5xl font-black">
              Ready To Digitize
              <br />
              Your Self Study Library?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
              Join modern library owners who are managing students,
              attendance, fees, notifications and multiple branches
              from one beautiful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                Book Free Demo
              </button>

              <button className="rounded-xl border border-white/30 px-8 py-4 hover:bg-white/10">
                Start Free Trial
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="grid gap-10 md:grid-cols-4">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 font-bold">
                  S
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    StudySpace
                  </h3>

                  <p className="text-sm text-gray-500">
                    Self Study Library SaaS
                  </p>

                </div>

              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Simplifying library management with modern technology.
                Manage students, fees, attendance and multiple branches
                effortlessly.
              </p>

            </div>

            <div>
              <h4 className="font-semibold">Product</h4>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>Dashboard</li>
                <li>Student Management</li>
                <li>Seat Management</li>
                <li>Attendance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Company</h4>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Get Started</h4>

              <p className="mt-6 text-gray-400">
                Book a free demo and see how our software can transform your self-study library.
              </p>

              <button className="mt-6 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold">
                Schedule Demo
              </button>

            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
            © 2026 StudySpace. All Rights Reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}