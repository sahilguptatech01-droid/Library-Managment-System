import { Bell,ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RecentStudents from "../compoents/AdminDashboard/RecentStudent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../config";
import { useAuth } from "@clerk/react";
import Loading from "../compoents/Loading";
import GlobalError from "../compoents/GlobalError";
import RecentTransactions from "../compoents/AdminDashboard/RecentTransaction";
import StatsGrid from "../compoents/AdminDashboard/StatsGrid";
import QuickActions from "../compoents/AdminDashboard/QuickActions";





const AdminDashboard = () => {
  const navigate=useNavigate()

    const {getToken}=useAuth()
  
  const {data,isError,isLoading}=useQuery({
    queryKey:['stats'],
    staleTime:10*10000,
    retry:1,
    queryFn:async()=>{
      const token=await getToken()
      const res=await axios.get(`${API_URL}/admin/dashboard`,{
        headers:{
              Authorization: `Bearer ${token}`,
        }
      })
      return res.data
    }
  });
  if(isError){
    return <GlobalError/>
  }
  if(isLoading){
    return <Loading/>
  } 


    return (
      <div className="min-h-screen bg-[#09090B] text-white">
  
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 px-6 py-6 border-b border-zinc-800">
  
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-zinc-400 mt-1">
              Welcome back 👋
            </p>
          </div>
  
          <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 self-start rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-white transition-all hover:border-cyan-500 hover:bg-zinc-800 hover:text-cyan-400 lg:self-auto"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
  
  
          {/* Search + Notification */}
          <div className="flex items-center gap-4">
  
  
            <button className="relative rounded-xl border border-zinc-700 bg-zinc-900 p-3 hover:border-indigo-500 transition">
              <Bell size={22} />
  
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
  
          </div>
        </div>
  
        {/* StatsGrid */}
        <StatsGrid revenue={data?data.total:0} count={data?data.count:0}/>
  

    
        {!isLoading  &&
      <div className="grid gap-8 lg:grid-cols-2">
      <RecentStudents students={data.recentStudents}/>
      <RecentTransactions transactions={data.recentTransaction} />
      </div>
        }

        <QuickActions/>
      </div>
  
    );
  }
  


export default AdminDashboard;