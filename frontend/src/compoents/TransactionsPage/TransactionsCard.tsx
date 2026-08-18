import { CalendarDays, IndianRupee } from "lucide-react";
import {type Transaction } from "./TransactionsList";

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }:TransactionCardProps) {
  

  
  return (
<div
  className="
    rounded-2xl
    border border-zinc-800
    bg-zinc-950
    p-4
    transition-all duration-200
    hover:border-violet-500/50
    hover:bg-zinc-900
    sm:p-5
  "
>
  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

    {/* Transaction Info */}
    <div className="flex min-w-0 gap-3 sm:gap-4">

      {/* Avatar */}
      <div
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-full
          border border-violet-500/20
          bg-violet-500/10
          text-sm font-semibold
          text-violet-400
          sm:h-12 sm:w-12 sm:text-base
        "
      >
        {transaction.student.name.charAt(0).toUpperCase()}
      </div>

      {/* Details */}
      <div className="min-w-0">

        <h3 className="truncate text-sm font-semibold text-white sm:text-base">
          {transaction.student.name}
        </h3>

        <p className="mt-1.5 text-sm text-zinc-400">
          {transaction.month}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500 sm:text-sm">

          <span className="flex items-center gap-1.5">
            <IndianRupee
              size={15}
              className="text-zinc-400"
            />
            {transaction.amount}
          </span>

          <span className="flex items-center gap-1.5">
            <CalendarDays
              size={15}
              className="text-zinc-400"
            />
            {transaction.createdAt.split("T")[0]}
          </span>

        </div>

      </div>
    </div>

    {/* Amount + Status */}
    <div
      className="
        flex
        items-center
        justify-between
        border-t border-zinc-800
        pt-4
        lg:block
        lg:border-0
        lg:pt-0
        lg:text-right
      "
    >

      <div>
        <p className="text-[11px] uppercase tracking-wider text-zinc-600">
          Amount
        </p>

        <p className="mt-0.5 text-xl font-bold text-white sm:text-2xl">
          ₹{transaction.amount}
        </p>
      </div>

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border border-emerald-500/20
          bg-emerald-500/10
          px-3 py-1
          text-xs
          font-medium
          text-emerald-400
          lg:mt-2
        "
      >
        Paid
      </span>

    </div>

  </div>
</div>
  );
}