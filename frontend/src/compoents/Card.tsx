import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"



const Card = () => {
  const {id} =useParams() // get id from url
  const navigate=useNavigate()

   const { isPending, error, data } = useQuery({
    queryKey: ['id',id],
    staleTime:10*100000,
    queryFn: async () =>
      await axios(`http://localhost:3000/students/detail/${id}`,{
       
       withCredentials:true
     }
      ).then((res)=>
        res.data
      )
  })

   if (isPending) return <Loading/>

  if (error) return <div>Try after sometime </div>

 



  return (

  <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-6">
  <div className="relative w-full max-w-3xl bg-[#18181b] border border-gray-700 rounded-3xl shadow-2xl overflow-hidden">

    {/* Header */}
    <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 p-8">
      <h1 className="text-3xl font-bold text-white">
        Student Detail
      </h1>
      <p className="text-indigo-100 mt-2">
        Complete profile information
      </p>
    </div>

    {/* Body */}
    <div className="p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Full Name
          </p>
          <p className="text-xl font-semibold text-white mt-1">
            {data.details.name}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Father Name
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.fatherName}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Mother Name
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.motherName}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Phone Number
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.mobileNo}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 md:col-span-2">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Address
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.address}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Shift
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.shift.shifts}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Identity Proof
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.identityProof}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Joining Date
          </p>
          <p className="text-lg text-white mt-1">
            {data.details.joiningDate}
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs uppercase text-gray-400 tracking-widest">
            Status
          </p>

          <span
            className={`inline-flex mt-2 px-4 py-2 rounded-full font-semibold ${
              data.details.status === "Active"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {data.details.status}
          </span>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-10 flex justify-end gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          ← Back
        </button>

        <button
         onClick={()=>{navigate(`/edit/student/${data.details.id}`)}}
         className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          Edit Profile
        </button>
      </div>

    </div>
  </div>
</div>
  )
}

export default Card