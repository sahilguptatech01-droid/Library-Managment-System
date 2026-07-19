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
    queryFn: async() =>
      await axios.get(`${API_URL}/students/`,{
        withCredentials:true
      }).then((res)=>res.data)
      
  })

  if (isPending) return <Loading/>
  if (error) return 'An error has occurred: ' + error.message
 

  
  return (

    <div>
   
        {data.students.map((x:any)=>(

    <div className="bg-gray-700 rounded-4xl  flex p-4 justify-between text-white my-2 " key={x.id} >
      <div>
        <h2>{x.name} </h2>
      </div>
      <div  >
        <button className="bg-blue-700 px-2 py-2 rounded-2xl w-full" onClick={()=>{
          navigate(`/details/${x.id}`)
                }}>
          Get all details
        </button>
      </div>
    </div>
        ))}

    </div>
   
    
  );
};


export default Box;
