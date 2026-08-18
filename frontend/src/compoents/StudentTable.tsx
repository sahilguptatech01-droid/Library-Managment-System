import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../config"
import { useNavigate } from "react-router-dom";
import { getToken } from "@clerk/react";
import GlobalError from "./GlobalError";
import CardSkeleton from "./CardSkeleton";
import { UserPlus } from "lucide-react";


const Box = () => {
  const navigate=useNavigate()
  // const {getToken}=useAuth()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['getStudent '],
    staleTime:10*1000000,
   
      // 2. Stop refetching when user clicks back onto the browser tab
    // refetchOnWindowFocus: false, 
  
  // 3. Stop refetching when reconnecting to the internet
  // refetchOnReconnect: false, 
  
  // 4. Stop refetching when the component mounts (if data is already cached)
  // refetchOnMount: false, 

    queryFn: async ()=>{
      const token=await getToken()
      const response=await axios.get(`${API_URL}/students/`,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data
    }

     
      
  })

  if (isLoading) return (
    <>
  {[...Array(5)].map((_, index) => (
    <CardSkeleton key={index} />
  ))}
</>
  )
  if (isError) return <GlobalError/>
  if(data.students.length===0){
    return (
       <div className="py-10 text-center">
          <UserPlus className="mx-auto text-slate-600" size={42} />

          <p className="mt-4 text-slate-400">
            No students found.
          </p>
        </div>
    )
  }
 
  return (

<div className="space-y-3 sm:space-y-4">
  {data.students.map((x: any) => (
    <div
      key={x.id}
      className="
        group
        flex flex-col gap-4
        rounded-2xl
        border border-zinc-800
        bg-zinc-900/70
        p-4
        shadow-sm
        transition-all duration-200
        hover:border-zinc-700
        hover:bg-zinc-900
        sm:gap-5
        sm:p-5
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Student Info */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">

        {/* Avatar */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-full
            border border-zinc-700
            bg-zinc-800
            text-lg font-semibold
            text-white
            sm:h-14 sm:w-14
            sm:text-xl
          "
        >
          {x.name.charAt(0).toUpperCase()}
        </div>

        {/* Details */}
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-white sm:text-lg">
            {x.name}
          </h2>

          <p className="mt-1 truncate text-xs text-zinc-500 sm:text-sm">
            Phone No: {x.mobileNo}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">

        {/* Pay Fee */}
        <button
          onClick={() => navigate(`/payment/${x.id}`)}
          className="
            w-full
            rounded-xl
            border border-emerald-500/30
            bg-emerald-500/10
            px-4 py-2.5
            text-sm font-medium
            text-emerald-400
            transition-all duration-200
            hover:border-emerald-500/50
            hover:bg-emerald-500
            hover:text-white
            active:scale-[0.98]
            sm:w-auto
            sm:px-5
          "
        >
          💳 Pay Fee
        </button>

        {/* View Details */}
        <button
          onClick={() => navigate(`/details/${x.id}`)}
          className="
            w-full
            rounded-xl
            border border-zinc-700
            bg-zinc-800
            px-4 py-2.5
            text-sm font-medium
            text-zinc-300
            transition-all duration-200
            hover:border-zinc-600
            hover:bg-white
            hover:text-black
            active:scale-[0.98]
            sm:w-auto
            sm:px-5
          "
        >
          📄 View Details
        </button>

      </div>
    </div>
  ))}
</div>
   
    
  );
};


export default Box;
