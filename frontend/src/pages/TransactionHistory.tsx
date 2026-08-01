import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowLeft,Calendar,CreditCard,IndianRupee } from "lucide-react";
import Loading from "../compoents/Loading";
// import GlobalError from "../compoents/GlobalError";


export default function TransactionHistory() {
  const navigate = useNavigate();
  const {id}=useParams()

 const { isPending, error, data } = useQuery({
  queryKey: ['transaction', id],

  queryFn: async () => {
    const res = await axios.get(`${API_URL}/fees/transactions/${id}`,{
        withCredentials:true
    });
    return res.data;
  }
});

  if(isPending){
    return <Loading/>
  }


 
   
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black px-4 py-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Payment History
            </h1>

            <p className="mt-2 text-slate-400">
              View all previous fee transactions.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-white transition hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
            Back
          </button>

        </div>

        {/* Transactions */}

        <div className="space-y-5">

          {data?.transaction?.map((transaction:any) => (
            <div
              key={transaction.id}
              className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl backdrop-blur-lg transition hover:border-indigo-500"
            >
              <div className="grid gap-6 md:grid-cols-4">

                {/* Date */}
                <div className="flex items-center gap-3">
                  <Calendar className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">
                      Payment Date
                    </p>
                    <h3 className="font-semibold text-white">
                      {transaction.paymentDate.split('T')[0]}
                    </h3>
                  </div>
                </div>

                {/* Month */}
                <div>
                  <p className="text-sm text-slate-400">
                    Fee Month
                  </p>

                  <span className="mt-1 inline-block rounded-full bg-indigo-500/20 px-4 py-1 font-semibold text-indigo-300">
                    {transaction.month}
                  </span>
                </div>

                {/* Payment Mode */}
                <div className="flex items-center gap-3">
                  <CreditCard className="text-emerald-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Payment Mode
                    </p>

                    <span
                      className={`inline-block mt-1 rounded-full px-3 py-1 text-sm font-semibold ${
                        transaction.paymentMode === "ONLINE"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {transaction.paymentMode}
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center gap-3">
                  <IndianRupee className="text-orange-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Amount
                    </p>

                    <h3 className="text-xl font-bold text-orange-400">
                      ₹ {transaction.amount}
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}

        {data?.transaction?.length === 0 && (
          <div className="mt-20 rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-12 text-center">
            <h2 className="text-2xl font-semibold text-white">
              No data Found
            </h2>

            <p className="mt-3 text-slate-400">
              This student has not made any fee payments yet.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}