import { useState } from "react"
import { API_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Create = () => {
    const[form,setForm]=useState({
        name:"",
        ownerName:"",
        phoneNo:"",
        address:""
        
    })
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    

    function handleChange(e:any){
    const {name,value}=e.target;
        setForm((prev)=>({...prev,[name]:value}))

    }

    async function handleSubmit(e:any){
        setMessage("")
        e.preventDefault()
        try {
            const response=await axios.post(`${API_URL}/libraries/create`,{
              ...form
            },{
                withCredentials:true
            }
        )
            if(response){
              setMessage("Library Created Succesfully")
            }
            setTimeout(()=>{
                navigate('/')
            },2000)
        
        } catch (error) {
            setMessage("Failed to create or Already library created in past ")
        }
    }

  return (
<div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-[#18181B] border border-gray-700 rounded-2xl shadow-2xl p-6 sm:p-8">

    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">
        Create Library
      </h2>
      <p className="text-gray-400 text-sm sm:text-base mt-2">
        Fill in the library details below
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Library Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Library Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter library name"
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Owner Name */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Owner Name
        </label>
        <input
          type="text"
          name="ownerName"
          value={form.ownerName}
          onChange={handleChange}
          placeholder="Enter owner name"
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNo"
          value={form.phoneNo}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Address
        </label>
        <textarea
          rows={4}
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 py-3 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition duration-300"
      >
        Create Library
      </button>

    </form>

    {/* Success Message */}
    {message.length > 0 && (
      <div className="mt-6 rounded-xl border border-green-500 bg-green-500/10 p-3 text-center text-green-400">
        {message}
      </div>
    )}

  </div>
</div>
  )
}

export default Create