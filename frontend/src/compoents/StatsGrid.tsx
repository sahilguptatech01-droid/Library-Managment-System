
import { useQuery } from "@tanstack/react-query";
import StatsCard from "./StatsCard"
import axios from "axios";
import { API_URL } from "../config";
import { useAuth } from "@clerk/react";

const StatsGrid = () => {
  const {getToken}=useAuth()
  
  const {data}=useQuery({
    queryKey:['stats'],
    queryFn:async()=>{
      const token=await getToken()
      const res=await axios.get(`${API_URL}/admin/stats`,{
        headers:{
              Authorization: `Bearer ${token}`,

        }
      })
      return res.data
    }
  });

  
  
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 xl:grid-cols-4">

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
              <StatsCard
            title="Pending Fees"
            value="0"
            />
    </div>
  )
}

export default StatsGrid