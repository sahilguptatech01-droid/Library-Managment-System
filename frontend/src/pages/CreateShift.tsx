import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm, type SubmitHandler } from "react-hook-form"
import { API_URL } from "../config"
import { getToken } from "@clerk/react"
import axios from "axios"
import PreviousShifts from "../compoents/ShiftDetails"

interface ShiftForm{
    shifts:string,
}


const CreateShift = () => {
  const queryClient=useQueryClient()
    const mutation=useMutation({
        mutationFn:async(data:ShiftForm)=>{
            const token=await getToken()
            try {
                const response=await axios.post( `${API_URL}/shifts/create`,data,
                    {
                        headers:{
                            Authorization: `Bearer ${token}`,
    
                        }
                    }
                )
                return response.data
                
            } catch (error:any) {
                const errorMessage = error.response?.data?.message || "Server error";
                throw new Error(errorMessage);
    

                
            }
        }
    })

    const {register,handleSubmit,formState:{errors}}=useForm<ShiftForm>(
    )
    
    const onSubmit:SubmitHandler<ShiftForm>=(data)=>{
        
        mutation.mutate(data,{
          onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['shifts']})
            
          }
        })

    }
    
    
    

  return (
<div className="min-h-screen bg-zinc-950 px-4 py-6 text-white sm:px-6 sm:py-10">
  <div className="mx-auto w-full max-w-lg">

    {/* Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Create Shift
      </h1>

      <p className="mt-2 text-sm text-zinc-500">
        Set the start and end time for the library shift.
      </p>
    </div>

    {/* Success Message */}
    {mutation.isSuccess && (
      <div className="mb-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-lg">
            ✓
          </span>

          <div>
            <h3 className="text-sm font-semibold text-emerald-400">
              Shift Created Successfully
            </h3>

            <p className="mt-1 text-xs text-emerald-400/70 sm:text-sm">
              The library shift has been created successfully.
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Error Message */}
    {mutation.isError && (
      <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-lg">
            !
          </span>

          <div>
            <h3 className="text-sm font-semibold text-red-400">
              Failed to Create Shift
            </h3>

            <p className="mt-1 text-xs text-red-400/70 sm:text-sm">
              Something went wrong while creating the shift. Please try again.
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl sm:p-6">

      <form
        className="space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >

        {/* Shift Time */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Shift Time
          </label>

          <input
            type="text"
            placeholder="08:00 am to 08:00 pm"
            {...register("shifts", {
              required: "Shift time is required",

              pattern: {
                value:
                  /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(am|pm)\s?to\s?(0?[1-9]|1[0-2]):[0-5][0-9]\s?(am|pm)$/,

                message:
                  "Please use the format HH:MM am to HH:MM pm",
              },
            })}
            className="
              w-full
              rounded-xl
              border
              bg-zinc-950
              px-4 py-3
              text-sm text-white
              placeholder-white-1/2
              outline-none
              transition
              focus:ring-2
              scheme-dark
        
            "
          />

          {/* React Hook Form Error */}
          {errors.shifts && (
            <p className="mt-2 text-xs font-medium text-red-400 sm:text-sm">
              {errors.shifts.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="border-t border-zinc-800 pt-5">

          <button
            type="submit"
            disabled={mutation.isPending}
            className="
              w-full
              rounded-xl
              bg-white
              px-5 py-3
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
            {mutation.isPending ? "Creating Shift..." : "Create Shift"}
          </button>

        </div>

      </form>


    </div>
    <PreviousShifts/>

  </div>
</div>
  )
}

export default CreateShift

