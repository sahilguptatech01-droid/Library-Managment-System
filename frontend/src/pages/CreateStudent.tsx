
import { useNavigate } from 'react-router-dom'
import StudentForm from '../compoents/StudentForm'
import { API_URL } from '../config'
import axios from 'axios'
import { useState } from 'react'

const CreateStudent = () => {
  const navigate=useNavigate()
    const [message,setMessage]=useState('')
    const [show,setShow]=useState(false)

  const handleSubmit=async (data:any)=>{
    try{

      const response=await axios.post(`${API_URL}/students/create`,
        data,
        {
          withCredentials:true
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
<div className="min-h-screen bg-zinc-950 px-4 py-10">
  <div className="mx-auto max-w-5xl">

    {/* Page Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white">
        🎓 Student Registration
      </h1>

      <p className="mt-2 text-zinc-400">
        Add a new student by filling in the details below.
      </p>
    </div>

    {/* Success Message */}
    {show && (
      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">✅</span>

          <div>
            <h3 className="font-semibold text-emerald-400">
              Student Registered Successfully
            </h3>

            <p className="text-sm text-emerald-300">
              {message}
            </p>
          </div>
        </div>
      </div>
    )}

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

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