import  { useState,useEffect } from 'react'

export type Student={
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
  intialData?:Student,
  onSubmit:(data:any)=>void,
  mode:"Edit"|"Create",
  text:string,
  
}

const StudentForm = ({onSubmit,intialData,mode,text}:StudentProps) => {
    const[formData,setFormData]=useState({
        name:intialData?.name ?? "",
        fatherName:intialData?.fatherName ??"",
        motherName:intialData?.motherName ??"",
        address:intialData?.address ??"",
        mobileNo:intialData?.mobileNo ??"",
        identityProof:"ADHARCARD",
        status:intialData?.status ??"ACTIVE",
        joiningDate:new Date() ?? intialData?.joiningDate
    })

     useEffect(()=>{
      if(intialData){
        setFormData(intialData as any)
        
      }
     },[intialData])
  

    
    function handleChange(e:any){
        const {name,value}=e.target
        setFormData((prev)=>({...prev,[name]:value}))
    }

    function handleSubmit(e:any){
        e.preventDefault()  
        if(mode ==="Create"){
          onSubmit(formData)
        }
        else{
          onSubmit(formData)
        }
      }
    


  return (
<div className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

    {/* Header */}
    <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h1 className="text-2xl font-bold text-white">
          {mode === "Edit" ? "Edit Student" :"Add Student"}
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
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2"
    >

      {/* Student Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Student Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Father Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Father Name
        </label>

        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Enter father name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Mother Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Mother Name
        </label>

        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Enter mother name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Mobile Number
        </label>

        <input
          type="tel"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="9876543210"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Address
        </label>

        <textarea
          rows={4}
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter full address"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Identity */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Identity Proof
        </label>

        <select
          name="identityProof"
          value={formData.identityProof}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="ADHARCARD">Aadhar Card</option>
          <option value="LICENSE">Driving License</option>
          <option value="VOTERCARD">Voter Card</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-3 md:col-span-2 sm:flex-row sm:justify-end">

        <button
          type="button"
          onClick={() => window.history.back()}
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3 text-white transition hover:bg-zinc-700"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white transition hover:from-blue-500 hover:to-indigo-500 active:scale-95"
        >
          {text}
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
