import { useEffect } from "react"
import { useForm, type SubmitHandler,} from "react-hook-form"


export type StudentFormProp={
  name:string,
  fatherName:string,
  motherName:string,
  address:string,
  mobileNo:string,
  status:string,
  joiningDate:Date,
  identityProof:string
}

type StudentProps={
  intialData?:StudentFormProp,
  submit:(data:any)=>void,
  mode:"Edit"|"Create",
  text:string,
  loading:boolean
  
}



const StudentForm = ({intialData,mode,submit,text,loading}:StudentProps) => {
 const {register,handleSubmit,reset,formState:{errors}}=useForm<StudentFormProp>() 

  useEffect(() => {
    if (mode === "Edit" && intialData) {
      reset({
        name: intialData.name,
        fatherName:intialData.fatherName,
        motherName: intialData.motherName,
        identityProof: intialData.identityProof,
        status:intialData.status,
        mobileNo:intialData.mobileNo,
        address:intialData.address
      });
    }
  }, [intialData, mode, reset]);

 const onSubmit:SubmitHandler<StudentFormProp>=(data)=>{
   if(mode==="Create"){
     const formData={...data,joiningDate:new Date()}
     submit(formData)
    }
    
    else{
      submit(data)
      
    }
    
 }
 
  

 


  return (
<div className="min-h-screen w-full bg-black px-3 py-4 text-white sm:px-6 sm:py-8">
  <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl sm:rounded-2xl">

    {/* ================= HEADER ================= */}
    <div className="w-full border-b border-zinc-800 px-4 py-4 sm:px-6 sm:py-5">
      <div className="min-w-0">
        <h1 className="text-lg font-semibold leading-6 tracking-tight text-white sm:text-2xl">
          {mode === "Edit" ? "Edit Student" : "Add Student"}
        </h1>

        <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
          Fill in the student information below.
        </p>
      </div>
    </div>

    {/* ================= FORM ================= */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-1 gap-5 p-4 sm:gap-6 sm:p-6 md:grid-cols-2"
    >

      {/* ================= STUDENT NAME ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Student Name
        </label>

        <input
          type="text"
          {...register("name", {
            required: "Student name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
             pattern: {
            value: /^[A-Za-z\s]+$/, 
            message: "Numbers and symbols are not allowed" 
          }
          })}
          placeholder="Enter student name"
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 ${
            errors.name
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        />

        {errors.name && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* ================= FATHER NAME ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Father Name
        </label>

        <input
          type="text"
          {...register("fatherName", {
            required: "Father name is required",
            minLength: {
              value: 3,
              message: "Father name must be at least 3 characters",
            },
                 pattern: {
            value: /^[A-Za-z\s]+$/, 
            message: "Numbers and symbols are not allowed" // Your custom message
          }
          })}
          placeholder="Enter father name"
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 ${
            errors.fatherName
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        />

        {errors.fatherName && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.fatherName.message}
          </p>
        )}
      </div>

      {/* ================= MOTHER NAME ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Mother Name
        </label>

        <input
          type="text"
          {...register("motherName", {
            required: "Mother name is required",
            minLength: {
              value: 3,
              message: "Mother name must be at least 3 characters",
            },     pattern: {
            value: /^[A-Za-z\s]+$/, 
            message: "Numbers and symbols are not allowed" // Your custom message
          }
          })}
          placeholder="Enter mother name"
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 ${
            errors.motherName
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        />

        {errors.motherName && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.motherName.message}
          </p>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Mobile Number
        </label>

        <input
          type="tel"
          inputMode="numeric"
          {...register("mobileNo", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          })}
          placeholder="9876543210"
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 ${
            errors.mobileNo
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        />

        {errors.mobileNo && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.mobileNo.message}
          </p>
        )}
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="min-w-0 md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Address
        </label>

        <textarea
          rows={4}
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters",
            },
            maxLength: {
              value: 100,
              message: "Address cannot exceed 100 characters",
            },
                    pattern: {
            // Allows uppercase, lowercase, numbers 0-9, and spaces
            value: /^[A-Za-z0-9\s]+$/, 
            message: "Only letters, numbers, and spaces are allowed"
          }

          })}
          placeholder="Enter full address"
          className={`min-h-28 w-full min-w-0 resize-y rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:ring-2 ${
            errors.address
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        />

        {errors.address && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* ================= IDENTITY ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Identity Proof
        </label>

        <select
          {...register("identityProof", {
            required: "Identity proof is required",
          })}
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 ${
            errors.identityProof
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        >
          <option value="ADHARCARD">AADHAR CARD</option>
          <option value="LICENSE">DRIVING LICENSE</option>
          <option value="VOTERCARD">VOTER CARD</option>
        </select>

        {errors.identityProof && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.identityProof.message}
          </p>
        )}
      </div>

      {/* ================= STATUS ================= */}
      <div className="min-w-0">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Status
        </label>

        <select
          {...register("status", {
            required: "Status is required",
          })}
          className={`w-full min-w-0 rounded-lg border bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 ${
            errors.status
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
              : "border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/10"
          }`}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="LEAVE">INACTIVE</option>
        </select>

        {errors.status && (
          <p className="mt-2 text-xs text-red-400 sm:text-sm">
            {errors.status.message}
          </p>
        )}
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="flex flex-col gap-3 border-t border-zinc-800 pt-5 md:col-span-2 sm:flex-row sm:justify-end">

        {/* Cancel */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="
            order-2
            w-full
            rounded-lg
            border border-zinc-800
            bg-zinc-900
            px-6 py-3
            text-sm font-medium
            text-zinc-300
            transition
            hover:bg-zinc-800
            hover:text-white
            active:scale-[0.98]
            sm:order-1
            sm:w-auto
          "
        >
          Cancel
        </button>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            order-1
            w-full
            rounded-lg
            bg-white
            px-6 py-3
            text-sm font-semibold
            text-black
            transition
            hover:bg-zinc-200
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-50
            sm:order-2
            sm:w-auto
          "
        >
          {loading ? "Saving..." : text}
        </button>

      </div>

    </form>
  </div>
</div>
  )
}

export default StudentForm


// name 
// fatherName
// motherName
// address
// mobileNo
// identtiyProof dropdown [ADHARCARD,LICENSE,vOTERCARD]
// status [ACTIVE.LEAVE ]
// shiftId


// fetch shift from backend 
// display the shift
// react hook form