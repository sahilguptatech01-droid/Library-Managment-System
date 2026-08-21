import {
  CreditCard,
  IndianRupee,
  CalendarRange,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ArrowLeft
} from "lucide-react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../config";
import axios from "axios";
import { getToken } from "@clerk/react";
import { useForm,type SubmitHandler } from "react-hook-form";
import { useParams,useNavigate } from "react-router-dom";


  interface PaymentFormState {
    studentId: string | undefined;
    paymentDate: Date;
    paymentMode: "CASH" | "ONLINE";
    amount: number;
    month: number;
  }




const months = [
  { id: 1, month: "January" },
  { id: 2, month: "February" },
  { id: 3, month: "March" },
  { id: 4, month: "April" },
  { id: 5, month: "May" },
  { id: 6, month: "June" },
  { id: 7, month: "July" },
  { id: 8, month: "August" },
  { id: 9, month: "September" },
  { id: 10, month: "October" },
  { id: 11, month: "November" },
  { id: 12, month: "December" }
];




export default function PaymentForm() {
  const navigate=useNavigate()
  const queryClient = useQueryClient(); 
  
  const { id } = useParams();
  const mutation = useMutation({
    mutationFn: async (data: PaymentFormState) => {
      const token=await getToken()
      try {
        const response=await axios.post(`${API_URL}/fees/submit`, data, {
          headers:{
                    Authorization: `Bearer ${token}`,
  
          }
        });
        return response
        
      } catch (error:any) {
          const errorMessage = error.response?.data?.message || "Server error";
    
    // 2. CRITICAL: Throw it out of the catch block!
      throw new Error(errorMessage);
        
      }
    }

  });

  



  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<PaymentFormState>()
  const onSubmit:SubmitHandler<PaymentFormState>=(data)=>{
    const formData={...data,month:Number(data.month),studentId:id}
    
    mutation.mutate(formData,{
      onSuccess: () => {
      
      // 3. Force the student list query to fetch fresh data from Prisma instantly
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['transaction'] });
      setTimeout(() => {
        navigate('/dashboard')
        
      }, 3000);

    }
    })
  }


  


  return (
<div className="min-h-screen bg-black px-3 py-4 text-white sm:px-6 sm:py-8">

  <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl sm:rounded-3xl">

    {/* Header */}
    <div className="border-b border-zinc-800 p-4 sm:p-7">

      {/* Back Button */}
      <button
        type="button"
        onClick={() => window.history.back()}
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-lg
          border border-zinc-800
          bg-zinc-900
          px-3 py-2
          text-sm
          font-medium
          text-zinc-300
          transition-all
          hover:border-zinc-600
          hover:bg-zinc-800
          hover:text-white
          active:scale-95
        "
      >
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Heading */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Library Fee Payment
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Fill in the payment details below.
        </p>
      </div>

    </div>

    {/* Body */}
    <div className="p-4 sm:p-7">

      {/* API Error */}
      {mutation.isError && (
        <div className="mb-6 flex gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
          <AlertCircle
            size={20}
            className="mt-0.5 shrink-0 text-red-400"
          />

          <div className="min-w-0">
            <h3 className="text-sm font-medium text-red-400">
              Payment Failed
            </h3>

            <p className="mt-1 text-xs leading-5 text-red-400/70 sm:text-sm">
              Something went wrong while saving the payment or this
              payment may already exist. Please try again.
            </p>
          </div>
        </div>
      )}

      {/* Success */}
      {mutation.isSuccess && (
        <div className="mb-6 flex gap-3 rounded-xl border border-zinc-700 bg-emerald-900 p-4">
          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0 text-white"
          />

          <div className="min-w-0">
            <h3 className="text-sm font-medium text-white">
              Payment Saved
            </h3>

            <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
              The payment transaction has been successfully recorded.
            </p>
          </div>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 sm:space-y-6"
      >




        {/* Fee Month */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Fee Month
          </label>

          <div className="relative">
            <CalendarRange
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 sm:left-4"
            />

            <select
              {...register("month", {
                required: "Fee month is required",
              })}
              className={`w-full appearance-none rounded-lg border bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:ring-2 sm:pl-12 ${
                errors.month
                  ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
                  : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
              }`}
            >
              <option value="">SELECT MONTH</option>

              {months.map((month) => (
                <option key={month.id} value={month.id}>
                  {month.month}
                </option>
              ))}
            </select>
          </div>

          {errors.month && (
            <p className="mt-2 text-xs text-red-400 sm:text-sm">
              {errors.month.message}
            </p>
          )}
        </div>

        {/* Payment Mode */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Payment Mode
          </label>

          <div className="relative">
            <CreditCard
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 sm:left-4"
            />

            <select
              {...register("paymentMode", {
                required: "Payment mode is required",
              })}
              className={`w-full appearance-none rounded-lg border bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:ring-2 sm:pl-12 ${
                errors.paymentMode
                  ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
                  : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
              }`}
            >
              <option value="">SELECT PAYMENT MODE</option>
              <option value="CASH">CASH</option>
              <option value="ONLINE">ONLINE</option>
            </select>
          </div>

          {errors.paymentMode && (
            <p className="mt-2 text-xs text-red-400 sm:text-sm">
              {errors.paymentMode.message}
            </p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Amount
          </label>

          <div className="relative">
            <IndianRupee
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 sm:left-4"
            />

            <input
              type="number"
              inputMode="decimal"
              placeholder="Enter amount"
              {...register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Amount must be greater than ₹0",
                },
              })}
              className={`w-full rounded-lg border bg-zinc-900 py-3 pl-11 pr-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 sm:pl-12 sm:pr-4 ${
                errors.amount
                  ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
                  : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
              }`}
            />
          </div>

          {errors.amount && (
            <p className="mt-2 text-xs text-red-400 sm:text-sm">
              {errors.amount.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="border-t border-zinc-800 pt-5 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting || mutation.isPending}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-zinc-200
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {mutation.isPending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Saving Payment...
              </>
            ) : (
              "Save Payment"
            )}
          </button>
        </div>

      </form>
    </div>

  </div>
</div>
  );
}


