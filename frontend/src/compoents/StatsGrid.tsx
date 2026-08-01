
import { useQuery } from "@tanstack/react-query";
import StatsCard from "./StatsCard"
import axios from "axios";
import { API_URL } from "../config";


const StatsGrid = () => {
  const {data}=useQuery({
    queryKey:['stats'],
    queryFn:async()=>{
      const res=await axios.get(`${API_URL}/admin/stats`,{
        withCredentials:true
      })
      return res.data
    }
  });

  
  
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">

            <StatsCard
            title="Revenue"
            value={data ? data.total : 0} 
            />

            <StatsCard
            title="Students"
            value={data ? data.count : 0} 
            />

            <StatsCard
            title="Notifications"
            value="0"
            />
    </div>
  )
}

export default StatsGrid