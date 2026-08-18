import {  useState } from "react"
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
    try{
      
        await axios.patch(`${API_URL}/students/${id}`,
          data,{
            headers:{
                        Authorization: `Bearer ${token}`,
      
          }
          }
        )
      
    }catch(error:any){
      const errorMessage = error.response?.data?.message || "Server error";
    
  
      throw new Error(errorMessage);
        
      
    }
    

   
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
      
      
      
    } catch (error:any) {
           const errorMessage = error.response?.data?.message || "Server error";
    
    // 2. CRITICAL: Throw it out of the catch block!
      throw new Error(errorMessage);
        
      
    }
  }
  
  const mutation=useMutation({
    mutationFn:(data:StudentFormProp)=>updateData(data,id as string)
  
  })


  
  useQuery({
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
<div className="min-h-screen w-full bg-zinc-950 px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">

  <div className="mx-auto w-full max-w-5xl">

    {/* Page Header */}
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        ✏️ Edit Student Profile
      </h1>

      <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
        Update the student's information and save your changes.
      </p>
    </div>


    {/* Success Message */}
    {mutation.isSuccess && (
      <div className="mb-5 w-full rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
        <p className="text-sm font-medium text-emerald-400 sm:text-base">
          ✅ Updated Successfully
        </p>
      </div>
    )}


    {/* Error Message */}
    {mutation.isError && (
      <div className="mb-5 w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
        <p className="text-sm font-medium text-red-400 sm:text-base">
          ❌ Try after sometime
        </p>
      </div>
    )}


    {/* Form */}
    <div className="w-full">

      <StudentForm
        loading={loading}
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