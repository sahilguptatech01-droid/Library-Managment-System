import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowLeft,Calendar,CreditCard,IndianRupee } from "lucide-react";
import Loading from "../compoents/Loading";
import { getToken } from "@clerk/react";
import GlobalError from "../compoents/GlobalError";
import { getMonth } from "../compoents/TransactionsPage/TransactionsCard";


export default function TransactionHistory() {
  const navigate = useNavigate();
  const {id}=useParams()

 const { isPending, data ,isError} = useQuery({
  queryKey: ['transaction', id],

  queryFn: async () => {
    const token=await getToken()
    try {
      const res = await axios.get(`${API_URL}/fees/transactions/${id}`,{
        headers:{
                Authorization: `Bearer ${token}`,
  
        }
      });
      return res.data;
      
    } catch (error:any) {
               const errorMessage = error.response?.data?.message || "Server error";
    
      throw new Error(errorMessage);
    }
  }
});

  if(isPending){
    return <Loading/>
  }
  if(isError){
    return <GlobalError/>
  }


 
   
  
  return (
<div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-8">
  <div className="mx-auto max-w-5xl">

    {/* Header */}
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">

      <div className="min-w-0">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Payment History
        </h1>

        <p className="mt-2 text-sm text-zinc-500 sm:text-base">
          View all previous fee transactions.
        </p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="
          flex w-full items-center justify-center gap-2
          rounded-xl
          border border-zinc-800
          bg-zinc-900
          px-5 py-3
          text-sm font-medium text-zinc-300
          transition-colors
          hover:border-zinc-700
          hover:bg-zinc-800
          hover:text-white
          active:scale-[0.98]
          sm:w-auto
        "
      >
        <ArrowLeft size={18} />
        Back
      </button>

    </div>

    {/* Transactions */}
    <div className="space-y-4 sm:space-y-5">

      {data?.transaction?.map((transaction: any) => (
        <div
          key={transaction.id}
          className="
            rounded-2xl
            border border-zinc-800
            bg-zinc-900/60
            p-5
            transition-colors duration-200
            hover:border-zinc-700
            hover:bg-zinc-900
            sm:rounded-3xl
            sm:p-6
          "
        >

          <div className="grid gap-5 md:grid-cols-4 md:gap-6">

            {/* Date */}
            <div className="flex items-center gap-3">

              <div className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-blue-500/10
              ">
                <Calendar
                  size={20}
                  className="text-blue-400"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Payment Date
                </p>

                <h3 className="mt-1 font-semibold text-zinc-100">
                  {transaction.paymentDate.split("T")[0]}
                </h3>
              </div>

            </div>

            {/* Month */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Fee Month
              </p>

              <span className="
                mt-2 inline-block
                rounded-lg
                border border-zinc-700
                bg-zinc-800
                px-3 py-1.5
                text-sm font-medium
                text-zinc-200
              ">
             {   getMonth(transaction.month)}
              </span>
            </div>

            {/* Payment Mode */}
            <div className="flex items-center gap-3">

              <div
                className={`
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  ${
                    transaction.paymentMode === "ONLINE"
                      ? "bg-emerald-500/10"
                      : "bg-amber-500/10"
                  }
                `}
              >
                <CreditCard
                  size={20}
                  className={
                    transaction.paymentMode === "ONLINE"
                      ? "text-emerald-400"
                      : "text-amber-400"
                  }
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Payment Mode
                </p>

                <span
                  className={`
                    mt-1 inline-block
                    rounded-lg
                    px-3 py-1
                    text-xs font-semibold
                    ${
                      transaction.paymentMode === "ONLINE"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }
                  `}
                >
                  {transaction.paymentMode}
                </span>
              </div>

            </div>

            {/* Amount */}
            <div className="flex items-center gap-3">

              <div className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-emerald-500/10
              ">
                <IndianRupee
                  size={20}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Amount
                </p>

                <h3 className="mt-1 text-xl font-bold text-emerald-400">
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
      <div className="
        mt-16
        rounded-2xl
        border border-dashed border-zinc-800
        bg-zinc-900/40
        p-10
        text-center
        sm:mt-20
        sm:rounded-3xl
        sm:p-12
      ">

        <div className="
          mx-auto flex h-14 w-14
          items-center justify-center
          rounded-2xl
          bg-zinc-900
          border border-zinc-800
        ">
          <CreditCard
            size={26}
            className="text-zinc-600"
          />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-zinc-100 sm:text-2xl">
          No Data Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500 sm:text-base">
          This student has not made any fee payments yet.
        </p>

      </div>
    )}

  </div>
</div>
  );
}