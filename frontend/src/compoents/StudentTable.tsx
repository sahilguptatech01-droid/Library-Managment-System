import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../config"
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Box = () => {
  const navigate=useNavigate()
  const { isPending, error, data } = useQuery({
    queryKey: ['getStudent '],
    staleTime:10*1000000,
   
      // 2. Stop refetching when user clicks back onto the browser tab
    // refetchOnWindowFocus: false, 
  
  // 3. Stop refetching when reconnecting to the internet
  // refetchOnReconnect: false, 
  
  // 4. Stop refetching when the component mounts (if data is already cached)
  // refetchOnMount: false, 

    queryFn: async() =>
      await axios.get(`${API_URL}/students/`,{
        withCredentials:true
      }).then((res)=>res.data)
      
  })

  if (isPending) return <Loading/>
  if (error) return 'An error has occurred: ' + error.message
 
  return (

<div className="space-y-5">
  {data.students.map((x: any) => (
    <div
      key={x.id}
      className="group flex flex-col gap-5 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/20 md:flex-row md:items-center md:justify-between"
    >
      {/* Student Info */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full  from-indigo-500 to-purple-600 text-xl font-bold text-white">
          {x.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            {x.name}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Student ID: #{x.id}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row md:w-auto w-full">

        <button
          onClick={() => navigate(`/payment/${x.id}`)}
          className="rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white transition hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          💳 Pay Fee
        </button>

        <button
          onClick={() => navigate(`/transactions/${x.id}`)}
          className="rounded-xl bg-amber-500 px-5 py-3 font-medium text-white transition hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/30"
        >
          📜 Transaction History
        </button>

        <button
          onClick={() => navigate(`/details/${x.id}`)}
          className="rounded-xl border border-indigo-500 bg-indigo-600/20 px-5 py-3 font-medium text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
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
