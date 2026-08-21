import {
  ArrowRight,
  CreditCard,
  IndianRupee,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getMonth } from "../TransactionsPage/TransactionsCard";

interface Transaction {
  id: number;
  student: {
    name:string
  };
  month: number;
  amount: number;
  paymentMode: string;
}

interface Props {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: Props) {
  const navigate=useNavigate()

  return (
<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6">

  {/* Header */}
  <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6">

    <div className="min-w-0">
      <h2 className="text-lg font-semibold text-white sm:text-xl">
        Recent Transactions
      </h2>

      <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
        Latest fee collections
      </p>
    </div>

    <button
      onClick={() => navigate("/transactions")}
      className="
        flex shrink-0 items-center gap-1
        rounded-lg
        px-2.5 py-2
        text-xs font-medium
        text-zinc-300
        transition
        hover:bg-zinc-800
        hover:text-white
        sm:px-3 sm:text-sm
      "
    >
      <span className="hidden sm:inline">
        View All
      </span>

      <span className="sm:hidden">
        All
      </span>

      <ArrowRight size={15} />
    </button>

  </div>

  {/* Transactions */}
  <div className="space-y-2.5">

    {transactions.map((payment) => (
      <div
        key={payment.id}
        className="
          flex items-center gap-3
          rounded-xl
          border border-zinc-800
          bg-zinc-900/50
          p-3
          transition-colors duration-200
          hover:border-zinc-700
          hover:bg-zinc-900
          sm:gap-4
          sm:p-4
        "
      >

        {/* Payment Info */}
        <div className="flex min-w-0 flex-1 items-center gap-3">

          {/* Icon */}
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              border border-zinc-700
              bg-zinc-800
              sm:h-11 sm:w-11
            "
          >
            <CreditCard
              size={19}
              className="text-zinc-300 sm:h-5 sm:w-5"
            />
          </div>

          {/* Student + Payment */}
          <div className="min-w-0 flex-1">

            <h3
              className="
                truncate
                text-sm font-medium text-white
                sm:text-base
              "
            >
              {payment.student.name}
            </h3>

            <p
              className="
                mt-0.5
                truncate
                text-xs text-zinc-500
                sm:text-sm
              "
            >
              {getMonth(payment.month)} • {payment.paymentMode}
            </p>

          </div>

        </div>

        {/* Amount */}
        <div
          className="
            flex shrink-0
            items-center gap-0.5
            text-sm font-semibold text-white
            sm:gap-1 sm:text-lg
          "
        >
          <IndianRupee
            size={15}
            className="sm:h-4.25 sm:w-4.25"
          />

          <span>
            {payment.amount}
          </span>
        </div>

      </div>
    ))}

  </div>

  {/* Empty State */}
  {transactions.length === 0 && (
    <div
      className="
        rounded-xl
        border border-dashed border-zinc-800
        px-4 py-10
        text-center
        sm:py-12
      "
    >
      <CreditCard
        size={38}
        className="mx-auto text-zinc-600"
      />

      <p className="mt-4 text-sm text-zinc-500">
        No transactions available.
      </p>
    </div>
  )}

</div>
  );
}