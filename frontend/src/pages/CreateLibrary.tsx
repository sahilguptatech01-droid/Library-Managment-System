import { API_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "@clerk/react";
import { useSession } from "@clerk/react";
import { useForm,type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

interface LibraryForm{
  name:string,
  ownerName:string,
  phoneNo:string,
  address:string
}


export const Create = () => {
  const{session}=useSession()
  const {register,handleSubmit,formState:{errors}}=useForm<LibraryForm>()

    const navigate=useNavigate()

    async function create(data :LibraryForm){
     const token=await getToken()
      try {
          const response=await axios.post(`${API_URL}/libraries/create`,
            data
          ,{
              headers:{
                        Authorization: `Bearer ${token}`,

              }
          }
      )
          if(response){
    
            await session?.reload(); 
            return response.data
          }
                  
      
      } catch (error:any) {
         const errorMessage = error.response?.data?.message || "Server error";
    
    // 2. CRITICAL: Throw it out of the catch block!
      throw new Error(errorMessage);
        
      }

    }
    const mutation=useMutation({
      mutationFn:(data:LibraryForm)=>create(data)
    })

    const onSubmit:SubmitHandler<LibraryForm>=(data)=>{
      mutation.mutate(data,{
        onSuccess:()=>{
          setTimeout(()=>{
            navigate('/dashboard')
          },2000)
        }
      })

    }
      
    
return(
<div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-black px-4 py-8">
  <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#18181B] p-6 shadow-2xl sm:max-w-lg sm:p-8 lg:max-w-xl">

    {/* Heading */}
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Create Library
      </h2>

      <p className="mt-2 text-sm text-gray-400 sm:text-base">
        Fill in the library details below
      </p>
    </div>

    {/* Success Message */}
    {mutation.isSuccess && (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
        <CheckCircle2
          size={22}
          className="mt-0.5 shrink-0 text-green-400"
        />

        <div>
          <h3 className="font-semibold text-green-400">
            Library Created
          </h3>

          <p className="mt-1 text-sm text-green-300/80">
            Your library has been created successfully.
          </p>
        </div>
      </div>
    )}

    {/* Error Message */}
    {mutation.isError && (
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
        <AlertCircle
          size={22}
          className="mt-0.5 shrink-0 text-red-400"
        />

        <div>
          <h3 className="font-semibold text-red-400">
            Creation Failed
          </h3>

          <p className="mt-1 text-sm text-red-300/80">
            Something went wrong while creating the library.
            Please try again.
          </p>
        </div>
      </div>
    )}

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      {/* Library Name */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Library Name
        </label>

        <input
          type="text"
          {...register("name", {
            required: "Library name is required",
            minLength: {
              value: 3,
              message: "Library name must be at least 3 characters",
            },
                 pattern: {
            value: /^[A-Za-z\s]+$/, 
            message: "Numbers and symbols are not allowed" // Your custom message
          }
          })}
          placeholder="Enter library name"
          className={`w-full rounded-xl border bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          }`}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Owner Name */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Owner Name
        </label>

        <input
          type="text"
          {...register("ownerName", {
            required: "Owner name is required",
            minLength: {
              value: 3,
              message: "Owner name must be at least 3 characters",
            },
                 pattern: {
            value: /^[A-Za-z\s]+$/, 
            message: "Numbers and symbols are not allowed" // Your custom message
          }
          })}
          placeholder="Enter owner name"
          className={`w-full rounded-xl border bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:ring-2 ${
            errors.ownerName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          }`}
        />

        {errors.ownerName && (
          <p className="mt-1 text-sm text-red-400">
            {errors.ownerName.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Phone Number
        </label>

        <input
          type="tel"
          {...register("phoneNo", {
            required: "Phone number is required",
            pattern: {
              value: /^[6-9][0-9]{9}$/,
              message: "Phone number must be exactly 10 digits",
            },
          })}
          placeholder="Enter phone number"
          className={`w-full rounded-xl border bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:ring-2 ${
            errors.phoneNo
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          }`}
        />

        {errors.phoneNo && (
          <p className="mt-1 text-sm text-red-400">
            {errors.phoneNo.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Address
        </label>

        <textarea
          rows={4}
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 10,
              message: "Address must be at least 10 characters",
            },
             pattern: {
            // Allows uppercase, lowercase, numbers 0-9, and spaces
            value: /^[A-Za-z0-9\s]+$/, 
            message: "Only letters, numbers, and spaces are allowed"
          }

          })}
          placeholder="Enter address"
          className={`w-full resize-none rounded-xl border bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:ring-2 ${
            errors.address
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          }`}
        />

        {errors.address && (
          <p className="mt-1 text-sm text-red-400">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white transition duration-300 hover:from-indigo-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {mutation.isPending ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />
            Creating Library...
          </>
        ) : (
          "Create Library"
        )}
      </button>

    </form>
  </div>
</div>


)
}


export default Create


