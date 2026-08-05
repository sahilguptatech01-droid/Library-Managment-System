
import { useNavigate } from 'react-router-dom'
import StudentForm from '../compoents/StudentForm'
import { API_URL } from '../config'
import axios from 'axios'
import { useState } from 'react'
import { getToken } from '@clerk/react'

const CreateStudent = () => {
  const navigate=useNavigate()
    const [message,setMessage]=useState('')
    const [show,setShow]=useState(false)

  const handleSubmit=async (data:any)=>{
    const token=await getToken()
    try{

      await axios.post(`${API_URL}/students/create`,
        data,
        {
          headers:{
              Authorization: `Bearer ${token}`,
          }
        }
      )
      setMessage('Created Successfully')
      setShow(true)
      setTimeout(()=>{
        navigate('/dashboard')
      },3000)
      
    }catch(e){
      setMessage('Try after sometime')
      setShow(true)
       setTimeout(()=>{
        navigate('/dashboard')
      },3000)

    } 
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
    {show && (
      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="text-xl">✅</span>

          <div>
            <h3 className="text-sm font-semibold text-emerald-400 sm:text-base">
              Student Registered Successfully
            </h3>

            <p className="mt-1 text-xs text-emerald-300 sm:text-sm">
              {message}
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl sm:p-6 lg:p-8">

      <StudentForm
        onSubmit={handleSubmit}
        mode="Create"
        text="Register Student"
      />

    </div>

  </div>
</div>
  )
}

export default CreateStudent