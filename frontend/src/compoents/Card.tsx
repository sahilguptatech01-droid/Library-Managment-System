import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { getToken } from "@clerk/react";
import { API_URL } from "../config";
import GlobalError from "./GlobalError";

const Card = () => {
  const { id } = useParams(); // get id from url
  const navigate = useNavigate();

  const { isPending, isError, data } = useQuery({
    queryKey: ["id",id],
    staleTime:1500,
    queryFn: async () => {
      const token = await getToken();
      try {
        const response = await axios.get(`${API_URL}/students/detail/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
        
      } catch (error:any) {
                 const errorMessage = error.response?.data?.message || "Server error";
    
    // 2. CRITICAL: Throw it out of the catch block!
      throw new Error(errorMessage);
        
      }
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <GlobalError/>;

  return (
<div className="min-h-screen bg-black px-3 py-4 text-white sm:px-6 sm:py-8">

  <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 sm:rounded-3xl">

    {/* Header */}
    <div className="border-b border-zinc-800 p-5 sm:p-7">

      <div className="flex items-center justify-between gap-4">

        <div>
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Student Details
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Complete profile information
          </p>
        </div>

        {/* Student ID */}
        <div className="hidden rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-500 sm:block">
          ID #{data.details.id}
        </div>

      </div>
    </div>


    {/* Body */}
    <div className="p-5 sm:p-7">

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">

        {/* Full Name */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Full Name
          </p>

          <p className="mt-2 wrap-break-word text-base font-semibold text-white sm:text-lg">
            {data.details.name}
          </p>
        </div>


        {/* Father Name */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Father Name
          </p>

          <p className="mt-2 wrap-break-word text-base text-zinc-200 sm:text-lg">
            {data.details.fatherName}
          </p>
        </div>


        {/* Mother Name */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Mother Name
          </p>

          <p className="mt-2 wrap-break-word text-base text-zinc-200 sm:text-lg">
            {data.details.motherName}
          </p>
        </div>


        {/* Phone */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Phone Number
          </p>

          <p className="mt-2 text-base text-zinc-200 sm:text-lg">
            {data.details.mobileNo}
          </p>
        </div>


        {/* Address */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5 md:col-span-2">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Address
          </p>

          <p className="mt-2 wrap-break-word text-base leading-6 text-zinc-200 sm:text-lg">
            {data.details.address}
          </p>
        </div>


        {/* Shift */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Shift Timing
          </p>

          <p className="mt-2 text-base text-zinc-400 sm:text-lg">
            {data.details.shift===null ? "Not Assigned":data.details.shift.shifts}
          </p>
        </div>


        {/* Identity */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Identity Proof
          </p>

          <p className="mt-2 wrap-break-word text-base text-zinc-200 sm:text-lg">
            {data.details.identityProof}
          </p>
        </div>


        {/* Joining Date */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Joining Date
          </p>

          <p className="mt-2 text-base text-zinc-200 sm:text-lg">
            {data.details.joiningDate.split("T")[0]}
          </p>
        </div>


        {/* Status */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">

          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Status
          </p>

          <div className="mt-2 flex items-center gap-2">

            <span
              className={`h-2 w-2 rounded-full ${
                data.details.status === "ACTIVE"
                  ? "bg-white"
                  : "bg-red-600"
              }`}
            />

            <span
              className={`text-sm font-medium ${
                data.details.status === "ACTIVE"
                  ? "text-white"
                  : "text-zinc-500"
              }`}
            >
              {data.details.status}
            </span>

          </div>
        </div>

      </div>


      {/* Actions */}
      <div className="mt-6 border-t border-zinc-800 pt-6">

        <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:justify-end">

          {/* Back */}
          <button
            onClick={() => window.history.back()}
            className="
              w-full
              rounded-lg
              border border-zinc-800
              bg-zinc-900
              px-5 py-3
              text-sm font-medium
              text-zinc-300
              transition
              hover:bg-zinc-800
              hover:text-white
              sm:w-auto
            "
          >
            ← Back
          </button>


          {/* Transactions */}
          <button
            onClick={() =>
              navigate(`/transactions/${data.details.id}`)
            }
            className="
              w-full
              rounded-lg
              border border-zinc-800
              bg-white
              px-5 py-3
              text-sm font-semibold
              text-black
              transition
              hover:bg-zinc-200
              active:scale-[0.98]
              sm:w-auto
            "
          >
            Transaction History
          </button>


          {/* Edit */}
          <button
            onClick={() =>
              navigate(`/edit/student/${data.details.id}`)
            }
            className="
              w-full
              rounded-lg
              border border-zinc-700
              bg-zinc-800
              px-5 py-3
              text-sm font-medium
              text-white
              transition
              hover:bg-zinc-700
              active:scale-[0.98]
              sm:w-auto
            "
          >
            Edit Profile
          </button>

        </div>

      </div>

    </div>
  </div>
</div>
  );
};

export default Card;
