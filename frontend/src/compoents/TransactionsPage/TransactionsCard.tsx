import { CalendarDays, IndianRupee } from "lucide-react";
import {type Transaction } from "./TransactionsList";

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }:TransactionCardProps) {
  

  
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-violet-500 hover:bg-zinc-900/80">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 font-semibold">
            {transaction.student.name.charAt(0)}
          </div>

          <div >
            <h3 className="font-semibold">
              {transaction.student.name}
            </h3>

            <p className="text-sm text-zinc-300 mt-2  ">
               {transaction.month}
            </p>

            <div className="mt-3 flex flex-wrap gap-5 text-sm text-zinc-400">
              <span className="flex items-center gap-1">
                <IndianRupee size={16} />
                {transaction.amount}
              </span>

              <span className="flex items-center gap-1">
                <CalendarDays size={16} />
                {transaction.createdAt.split('T')[0]}
              </span>
            </div>
          </div>
        </div>

        <div className="text-left lg:text-right">
          <p className="text-2xl font-bold">
            ₹{transaction.amount}
          </p>

          <span className="mt-2 inline-flex rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-400">
            Paid
          </span>
        </div>
      </div>
    </div>
  );
}