import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../config"
import { useParams } from "react-router-dom"
import StudentForm from "../compoents/StudentForm"

const EditStudent = () => {
    const navigate=useNavigate()
  const [data,setData]=useState()
  const [message,setMessage]=useState('')
  const [show,setShow]=useState(false)
  const {id}=useParams()
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`${API_URL}/students/detail/${id}`, {
          withCredentials: true,
        });
        setData(response.data.details)
        
       return response
      } catch (error) {
        // console.error("Error fetching data", error);
        setMessage('Try after sometime')
        setShow(true)

      }
    };

    if (id) fetchStudent();
  }, [id]);

  

  async function handleSubmit(data:any){
    const response=await axios.patch(`${API_URL}/students/${id}`,
      data,{
        withCredentials:true
      }
    )

       setMessage('Updated Successfully')
        setShow(true)
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000);
    
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
    {show && (
      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
        <p className="font-medium text-emerald-400">
          ✅ {message}
        </p>
      </div>
    )}

    {/* Form Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

      <StudentForm
        mode="Edit"
        text="Save Changes"
        onSubmit={handleSubmit}
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