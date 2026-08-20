import {
  UserPlus,
  CreditCard,
    ArrowRight,
    Clock10Icon,
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
      title: "Manage Shifts",
      description: "View and edit students",
      icon: Clock10Icon,
      color: "from-violet-500 to-fuchsia-500",
      route: "/create/shift",
    },
 
  ];

  return (
<section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6">

  {/* Header */}
  <div className="mb-6 sm:mb-8">
    <h2 className="text-xl font-semibold text-white sm:text-2xl">
      Quick Actions
    </h2>

    <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
      Frequently used shortcuts for managing your library.
    </p>
  </div>

  {/* Actions */}
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

    {actions.map((action) => {
      const Icon = action.icon;

      return (
        <button
          key={action.title}
          onClick={() => navigate(action.route)}
          className="
            group
            rounded-xl
            border border-zinc-800
            bg-zinc-900/50
            p-4
            text-left
            transition-colors duration-200
            hover:border-zinc-600
            hover:bg-zinc-900
            sm:p-5
          "
        >

          {/* Icon */}
          <div
            className="
              mb-4
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-zinc-700
              bg-zinc-800
              sm:h-12 sm:w-12
            "
          >
            <Icon
              size={22}
              className="text-zinc-200"
            />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-white sm:text-lg">
            {action.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {action.description}
          </p>

          {/* Open */}
          <div
            className="
              mt-5
              flex items-center gap-2
              text-sm font-medium
              text-zinc-300
              transition-transform duration-200
              group-hover:translate-x-1
            "
          >
            <span>Open</span>

            <ArrowRight
              size={16}
              className="text-zinc-500"
            />
          </div>

        </button>
      );
    })}

  </div>

</section>
  );
}