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
<div className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

    {/* Header */}
    <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h1 className="text-2xl font-bold text-white">
          {mode === "Edit" ? "Edit Student" : "Add Student"}
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Fill in the student information below.
        </p>
      </div>

      <button
        type="button"
        onClick={() => window.history.back()}
        className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
      >
        ← Back
      </button>

    </div>

    {/* Form */}
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2"
    >

      {/* Student Name */}
      <div>
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
          })}
          placeholder="Enter student name"
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Father Name */}
      <div>
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
          })}
          placeholder="Enter father name"
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:ring-2 ${
            errors.fatherName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.fatherName && (
          <p className="mt-2 text-sm text-red-400">
            {errors.fatherName.message}
          </p>
        )}
      </div>

      {/* Mother Name */}
      <div>
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
            },
          })}
          placeholder="Enter mother name"
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:ring-2 ${
            errors.motherName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.motherName && (
          <p className="mt-2 text-sm text-red-400">
            {errors.motherName.message}
          </p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Mobile Number
        </label>

        <input
          type="tel"
          {...register("mobileNo", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          })}
          placeholder="9876543210"
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:ring-2 ${
            errors.mobileNo
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.mobileNo && (
          <p className="mt-2 text-sm text-red-400">
            {errors.mobileNo.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div className="md:col-span-2">
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
          })}
          placeholder="Enter full address"
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:ring-2 ${
            errors.address
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        />

        {errors.address && (
          <p className="mt-2 text-sm text-red-400">
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Identity */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Identity Proof
        </label>

        <select
          {...register("identityProof", {
            required: "Identity proof is required",
          })}
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white outline-none transition focus:ring-2 ${
            errors.identityProof
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        >
          <option value="ADHARCARD">Aadhar Card</option>
          <option value="LICENSE">Driving License</option>
          <option value="VOTERCARD">Voter Card</option>
        </select>

        {errors.identityProof && (
          <p className="mt-2 text-sm text-red-400">
            {errors.identityProof.message}
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Status
        </label>

        <select
          {...register("status", {
            required: "Status is required",
          })}
          className={`w-full rounded-xl border bg-zinc-800 px-4 py-3 text-white outline-none transition focus:ring-2 ${
            errors.status
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
          }`}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>

        {errors.status && (
          <p className="mt-2 text-sm text-red-400">
            {errors.status.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end md:col-span-2">

        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3 text-white transition hover:bg-zinc-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white transition hover:from-blue-500 hover:to-indigo-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
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