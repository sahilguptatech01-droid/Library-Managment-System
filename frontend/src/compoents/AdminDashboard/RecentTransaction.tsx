import {
  ArrowRight,
  CreditCard,
  IndianRupee,
} from "lucide-react";

interface Transaction {
  id: number;
  student: {
    name:string
  };
  month: string;
  amount: number;
  paymentMode: string;
}

interface Props {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: Props) {

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Recent Transactions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest fee collections
          </p>
        </div>

        <button
          className="flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          View All

          <ArrowRight size={16} />
        </button>

      </div>

      <div className="space-y-4">

        {transactions.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between rounded-2xl bg-slate-800/70 p-4 transition hover:bg-slate-800"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-emerald-500/20 p-3">
                <CreditCard
                  className="text-emerald-400"
                  size={22}
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {payment.student.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {payment.month} • {payment.paymentMode}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-1 text-lg font-bold text-emerald-400">
              <IndianRupee size={18} />
              {payment.amount}
            </div>

          </div>
        ))}

      </div>

      {transactions.length === 0 && (
        <div className="py-10 text-center">
          <CreditCard
            size={42}
            className="mx-auto text-slate-600"
          />

          <p className="mt-4 text-slate-400">
            No transactions available.
          </p>
        </div>
      )}
    </div>
  );
}