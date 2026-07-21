import  { useState,useEffect } from 'react'

export type Student={
  name:string,
  fatherName:string,
  motherName:string,
  address:string,
  mobileNo:string,
  status:string,
  shiftID:string,
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
        shiftId:intialData?.shiftID ??"",
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
<div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
  <div className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">


    <form
      onSubmit={handleSubmit}
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
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
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* Address */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          placeholder="Enter full address"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* Identity Proof */}
      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Identity Proof
        </label>
        <select
          name="identityProof"
          value={formData.identityProof}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      {/* Shift */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Shift ID
        </label>
        <input
          type="text"
          name="shiftId"
          value={formData.shiftId}
          onChange={handleChange}
          placeholder="Enter shift ID"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {/* Button */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
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
