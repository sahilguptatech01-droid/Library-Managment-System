import { Clock3 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../config";
import { getToken } from "@clerk/react";
import Loading from "./Loading";
import GlobalError from "./GlobalError";


interface Shift {
    shifts:string,
    id:string
}
const PreviousShifts = () => {
  const queryClient=useQueryClient()
  const mutation=useMutation({
    mutationFn:async(id:string|void)=>{
      const token=await getToken()

    try {
        await axios.delete(`${API_URL}/shifts/delete/${id}`,{
        headers:{
              Authorization: `Bearer ${token}`,
        }
      })
    } catch (error:any) {
      const errorMessage = error.response?.data?.message || "Server error";
      throw new Error(errorMessage);
      
    }
    }
  })
    const {isPending,isError,data}=useQuery({
        queryKey:['shifts'],
        queryFn:async()=>{
                const token = await getToken();



            try {
                const response=await axios.get(`${API_URL}/shifts/`,{
                    headers:{
                      Authorization: `Bearer ${token}`,

                }})
                return response.data
                
            } catch (error:any) {
                  const errorMessage = error.response?.data?.message || "Server error";
    
                throw new Error(errorMessage);
                
            }

        }
        
    })

    

    // if(isPending){
    //   return  <Loading className="w-full h-full bg-transparent min-h-100"/>
    // }
    
    if(isError){
        return <GlobalError/>
    }
  return (
    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl sm:p-6">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Previous Shifts
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Your recently created library shifts.
        </p>
      </div>

      {/* Shifts */}

     {isPending? <Loading className="h-32 w-full bg-transparent "/>:

      <div className="space-y-3">


        {data.data.map((shift:Shift) => (
          <div
            key={shift.id}
            className="
              flex flex-col gap-4
              rounded-xl
              border border-zinc-800
              bg-zinc-950
              p-4
              transition
              hover:border-zinc-700
              hover:bg-zinc-900
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Shift Info */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-violet-500/20
                  bg-violet-500/10
                "
              >
                <Clock3
                  size={20}
                  className="text-violet-400"
                />
              </div>

              <div className="min-w-0  ">

                <h3 className="font-medium text-white">
                  {shift.shifts}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                  {/* <Delete size={50} /> */}

                  <button onClick={()=>{
                    mutation.mutate(shift.id,{onSuccess:()=>{
                  queryClient.invalidateQueries({queryKey:['shifts']})


                    }})
                    
                  } } className="text-red-500">Delete
                   
                  </button>
                </div>

              </div>

            </div>


          </div>
        ))}
      

      </div>
}


      {/* Empty State */}
      {data?.data.length === 0 && (
        <div
          className="
            rounded-xl
            border border-dashed border-zinc-800
            px-4 py-10
            text-center
          "
        >
          <Clock3
            size={36}
            className="mx-auto text-zinc-700"
          />

          <h3 className="mt-3 text-sm font-medium text-zinc-300">
            No previous shifts
          </h3>

          <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
            Your created shifts will appear here.
          </p>
        </div>
      )}
      
   

    </div>
  );
};

export default PreviousShifts;