import { useState } from "react";
import {
  CalendarDays,
  CreditCard,
  IndianRupee,
  CalendarRange,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function PaymentForm() {
  const navigate=useNavigate()
  const { id } = useParams();
  const mutation = useMutation({
    mutationFn: async (data: PaymentPayload) => {
      const response=await axios.post(`${API_URL}/fees/submit`, data, {
        withCredentials: true,
      });
      return response
    },

  });

  interface PaymentFormState {
    studentId: string | undefined;
    paymentDate: string;
    paymentMode: "CASH" | "ONLINE";
    amount: number;
    month: string;
  }

  interface PaymentPayload {
    studentId: string | undefined;
    paymentDate: Date; // 🚀 STRICT DATE OBJECT FOR THE DATABASE
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

  const [formData, setFormData] = useState<PaymentFormState>({
    studentId: id,
    paymentDate: "",
    paymentMode: "CASH",
    amount: 200,
    month: "JANUARY",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      paymentDate: new Date(formData.paymentDate),
    });


    setTimeout(() => {
      navigate('/dashboard')
    },5000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Library Fee Payment</h1>

          <p className="mt-2 text-slate-400">Fill payment details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date */}

          <div>
            <label className="mb-2 block text-slate-300 font-medium">
              Payment Date
            </label>

            <div className="relative">
              <CalendarDays
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Month */}

          <div>
            <label className="mb-2 block text-slate-300 font-medium">
              Fee Month
            </label>

            <div className="relative">
              <CalendarRange
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payment Mode */}

          <div>
            <label className="mb-2 block text-slate-300 font-medium">
              Payment Mode
            </label>

            <div className="relative">
              <CreditCard
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              >
                <option value="CASH">Cash</option>
                <option value="ONLINE">Online</option>
              </select>
            </div>
          </div>

          {/* Amount */}

          <div>
            <label className="mb-2 block text-slate-300 font-medium">
              Amount
            </label>

            <div className="relative">
              <IndianRupee
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
          >
            Save Payment
          </button>
        </form>

        <div className="text-blue-600  mt-4 text-4xl text-center h-14 ">
          {mutation.isSuccess ? <h2>Payment Saved</h2> : null}
        </div>
      

      </div>
    </div>
  );
}
