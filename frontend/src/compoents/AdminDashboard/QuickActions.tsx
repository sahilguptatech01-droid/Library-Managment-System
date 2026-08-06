import {
  UserPlus,
  CreditCard,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Student",
      description: "Register a new student",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500",
      route: "/add/student",
    },
    {
      title: "Collect Fee",
      description: "Record student payment",
      icon: CreditCard,
      color: "from-emerald-500 to-green-500",
      route: "/students",
    },
    {
      title: "Manage Students",
      description: "View and edit students",
      icon: BookOpen,
      color: "from-violet-500 to-fuchsia-500",
      route: "/students",
    },
 
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Frequently used shortcuts for managing your library.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.route)}
              className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r ${action.color}`}
              >
                <Icon className="text-white" size={28} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-cyan-400 transition group-hover:translate-x-1">
                <span className="text-sm font-medium">
                  Open
                </span>

                <ArrowRight size={16} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}