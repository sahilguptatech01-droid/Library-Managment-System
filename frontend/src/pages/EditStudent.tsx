import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../config"
import { useParams } from "react-router-dom"
import StudentForm from "../compoents/StudentForm"
import { getToken } from "@clerk/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { type StudentFormProp } from "../compoents/StudentForm"

const EditStudent = () => {
  const[loading,setLoading]=useState<boolean>(true)
  const queryClient=useQueryClient()
  const navigate=useNavigate()
  const [data,setData]=useState<StudentFormProp>()
  const {id}=useParams()
  const updateData=async(data:StudentFormProp,id:string)=>
 { 
    const token=await getToken()

  await axios.patch(`${API_URL}/students/${id}`,
    data,{
      headers:{
                  Authorization: `Bearer ${token}`,

    }
    }
  )

   
}
  const fetchStudent = async () => {
    const token=await getToken()
    
    try {
      const response = await axios.get(`${API_URL}/students/detail/${id}`, {
        headers:{
          Authorization: `Bearer ${token}`,
          
        }
      });
      setData(response.data.details)
      setLoading(false)
      return response.data.details
      
      
      
      return response
    } catch (error) {
      
    }
  }
  
  const mutation=useMutation({
    mutationFn:(data:StudentFormProp)=>updateData(data,id as string)
  
  })


  
  const {isError}=useQuery({
    queryKey:['studentData',id],
    queryFn:fetchStudent
  })
  

  

  async function handleSubmit(data:StudentFormProp){
    setLoading(true)
    mutation.mutate(data,{
      onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['getStudent']})
        queryClient.invalidateQueries({queryKey:['stats']})
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000);
      },
      onSettled:()=>{
        setLoading(false)
      }
    })

    
  }
  return (
  <div className="min-h-screen bg-zinc-950 px-4 py-10">
  <div className="mx-auto max-w-5xl">

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white">
        ✏️ Edit Student Profile
      </h1>

      <p className="mt-2 text-zinc-400">
        Update the student's information and save your changes.
      </p>
    </div>

    {/* Success Message */}
    {mutation.isSuccess && (
      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
        <p className="font-medium text-emerald-400">
          ✅ Updated Successfully
        </p>
      </div>
    )}

    {/* Failed Message */}


       {mutation.isError && (
      <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
        <p className="font-medium text-red-400">
          ❌ Try after sometime
        </p>
      </div>
    )}

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

      <StudentForm
        loading={loading  }
        mode="Edit"
        text="Save Changes"
        submit={handleSubmit}
        intialData={data}
      />

    </div>

  </div>
</div>
  )
}

export default EditStudent


// fetch the data
// send to StudentForm Compoent 
// make funcrtion editStudent to handle updating 
// save to the backend