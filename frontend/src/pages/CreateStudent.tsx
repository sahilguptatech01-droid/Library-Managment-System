
import { useNavigate } from 'react-router-dom'
import StudentForm from '../compoents/StudentForm'
import { API_URL } from '../config'
import axios from 'axios'
import { getToken } from '@clerk/react'
import { useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

const CreateStudent = () => {
  const navigate=useNavigate()
  const queryClient = useQueryClient();
  const [loading,setLoading]=useState<boolean>(false)
  const mutation=useMutation({
    mutationFn:async(receiveData)=>{
       const token=await getToken()
    try {
      const response = await axios.post(
        `${API_URL}/students/create`, 
        receiveData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      // CRITICAL: You must return the data so TanStack receives it
      return response.data; 
      
    } catch (error: any) {
      // Extract the real error message coming from your Express/Database backend
      const serverErrorMessage = 
        error.response?.data?.message || "Failed to create student profile.";
      
      // CRITICAL: You must explicitly THROW the error out of the catch block
      // This is what forces TanStack to set 'isError' to true!
      throw new Error(serverErrorMessage);
    }
  }
})
   

  const handleSubmit=async (receiveData:any)=>{
   setLoading(true)
    mutation.mutate(receiveData,{
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['getStudent']})
        queryClient.invalidateQueries({queryKey:['stats']})
        setTimeout(()=>{
          navigate('/dashboard')
        },2000)
      },

      onSettled:()=>{
        setLoading(false)

      }
    })

   
  }

  return (
<div className="min-h-screen bg-zinc-950 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
  <div className="mx-auto w-full max-w-5xl">

    {/* Page Header */}
    <div className="mb-6 sm:mb-8">
      <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        🎓 Student Registration
      </h1>

      <p className="mt-2 text-sm text-zinc-400 sm:text-base">
        Add a new student by filling in the details below.
      </p>
    </div>

    {/* Success Message */}
     
    {mutation.isSuccess &&<div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">✅</span>

          <div>
           <h3 className="text-sm font-semibold text-emerald-400 sm:text-base">
              Student Registered Successfully
            </h3>

          
          </div>
        </div>
      </div>}

{/* Failed Meessage */}

{mutation.isError &&
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">❌</span>

          <div>
           <h3 className="text-sm font-semibold text-red-400 sm:text-base">
            Failed to create student
            </h3>

        
          </div>
        </div>
      </div>

}


    

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl sm:p-6 lg:p-8">

      <StudentForm
        loading={loading}
        submit={handleSubmit}
        mode="Create"
        text="Register Student"
      />

    </div>

  </div>
</div>
  )
}

export default CreateStudent