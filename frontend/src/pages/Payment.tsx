import {
  CalendarDays,
  CreditCard,
  IndianRupee,
  CalendarRange,
  AlertCircle,
  CheckCircle2,
  Loader2
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
    month: string;
  }



  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

export default function PaymentForm() {
  const navigate=useNavigate()
  const queryClient = useQueryClient(); 
  
  const { id } = useParams();
  const mutation = useMutation({
    mutationFn: async (data: PaymentFormState) => {
      const token=await getToken()
      const response=await axios.post(`${API_URL}/fees/submit`, data, {
        headers:{
                  Authorization: `Bearer ${token}`,

        }
      });
      return response
    },    onSuccess: () => {
      
      // 3. Force the student list query to fetch fresh data from Prisma instantly
      queryClient.invalidateQueries({ queryKey: ['stats'] });
      queryClient.invalidateQueries({ queryKey: ['transaction'] });
      navigate('/dashboard')

    },

  });



  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<PaymentFormState>()
  const onSubmit:SubmitHandler<PaymentFormState>=(data)=>{
    const formData={...data,paymentDate:new Date(data.paymentDate),studentId:id}
    mutation.mutate(formData)
  }


  


  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-black px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
  
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Library Fee Payment
          </h1>
  
          <p className="mt-2 text-slate-400">
            Fill payment details below
          </p>
        </div>
  
        {/* API Error */}
        {mutation.isError && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
            <AlertCircle
              size={22}
              className="mt-0.5 shrink-0 text-red-400"
            />
  
            <div>
              <h3 className="font-semibold text-red-400">
                Payment Failed
              </h3>
  
              <p className="mt-1 text-sm text-red-300/80">
                Something went wrong while saving the payment or Payment Already present.
                Please try again.
              </p>
            </div>
          </div>
        )}
  
        {/* Success */}
        {mutation.isSuccess && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
            <CheckCircle2
              size={22}
              className="mt-0.5 shrink-0 text-emerald-400"
            />
  
            <div>
              <h3 className="font-semibold text-emerald-400">
                Payment Saved
              </h3>
  
              <p className="mt-1 text-sm text-emerald-300/80">
                The payment transaction has been successfully recorded.
              </p>
            </div>
          </div>
        )}
  
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
  
          {/* Payment Date */}
          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Payment Date
            </label>
  
            <div className="relative">
              <CalendarDays
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
  
              <input
                type="date"
                {...register("paymentDate", {
                  required: "Payment date is required",
                })}
                className={`w-full rounded-xl border bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:ring-2 ${
                  errors.paymentDate
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                }`}
              />
            </div>
  
            {errors.paymentDate && (
              <p className="mt-2 text-sm text-red-400">
                {errors.paymentDate.message}
              </p>
            )}
          </div>
  
          {/* Fee Month */}
          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Fee Month
            </label>
  
            <div className="relative">
              <CalendarRange
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
  
              <select
                {...register("month", {
                  required: "Fee month is required",
                })}
                className={`w-full rounded-xl border bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:ring-2 ${
                  errors.month
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                }`}
              >
                <option value="">SELECT MONTH</option>
  
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
  
            {errors.month && (
              <p className="mt-2 text-sm text-red-400">
                {errors.month.message}
              </p>
            )}
          </div>
  
          {/* Payment Mode */}
          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Payment Mode
            </label>
  
            <div className="relative">
              <CreditCard
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
  
              <select
                {...register("paymentMode", {
                  required: "Payment mode is required",
                })}
                className={`w-full rounded-xl border bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:ring-2 ${
                  errors.paymentMode
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                }`}
              >
                <option value="">SELECT PAYMENT MODE</option>
                <option value="CASH">CASH</option>
                <option value="ONLINE">ONLINE</option>
              </select>
            </div>
  
            {errors.paymentMode && (
              <p className="mt-2 text-sm text-red-400">
                {errors.paymentMode.message}
              </p>
            )}
          </div>
  
          {/* Amount */}
          <div>
            <label className="mb-2 block font-medium text-slate-300">
              Amount
            </label>
  
            <div className="relative">
              <IndianRupee
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
  
              <input
                type="number"
                placeholder="Enter amount"
                {...register("amount", {
                  required: "Amount is required",
  
                  valueAsNumber: true,
  
                  min: {
                    value: 1,
                    message: "Amount must be greater than ₹0",
                  },
                })}
                className={`w-full rounded-xl border bg-slate-800 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:ring-2 ${
                  errors.amount
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/20"
                }`}
              />
            </div>
  
            {errors.amount && (
              <p className="mt-2 text-sm text-red-400">
                {errors.amount.message}
              </p>
            )}
          </div>
  
          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || mutation.isPending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {mutation.isPending ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
  
                Saving Payment...
              </>
            ) : (
              "Save Payment"
            )}
          </button>
  
        </form>
      </div>
    </div>
  );
}


