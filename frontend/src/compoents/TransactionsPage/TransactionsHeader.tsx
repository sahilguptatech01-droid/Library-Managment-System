import { ArrowLeft, Download } from "lucide-react";

export default function TransactionHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Transactions
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          View and manage all student fee transactions.
        </p>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm transition hover:border-violet-500 hover:bg-zinc-800"  onClick={()=>{
        window.history.back()
      }}>
        <ArrowLeft size={18}  />
        Back
      </button>
    </div>
  );
}