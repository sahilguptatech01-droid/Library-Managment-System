import { Bell } from "lucide-react";
// import { useNavigate } from "react-router-dom";
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
import { UserButton } from "@clerk/react";





const AdminDashboard = () => {
  // const navigate=useNavigate()

    const {getToken}=useAuth()
  
  const {data,isError,isLoading}=useQuery({
    queryKey:['stats'],
    staleTime:10*10000,
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
<div
  className="
    flex items-center justify-between
    gap-3
    border-b border-zinc-800
    px-4 py-4
    sm:px-6 sm:py-5
  "
>
  {/* Dashboard Info */}
  <div className="min-w-0 flex-1">
    <h1
      className="
        truncate
        text-xl font-bold
        sm:text-2xl
        lg:text-3xl
      "
    >
      Admin Dashboard
    </h1>

    <p
      className="
        mt-0.5
        truncate
        text-xs text-zinc-500
        sm:text-sm
      "
    >
      {data?.recentStudents?.[0]?.library?.name || "Library"}
    </p>
  </div>

  {/* Right Actions */}
  <div className="flex shrink-0 items-center gap-2 sm:gap-3">

    {/* Notification */}
    <button
      className="
        relative
        flex h-10 w-10
        items-center justify-center
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        text-zinc-300
        transition
        hover:border-zinc-600
        hover:bg-zinc-800
        hover:text-white
        sm:h-11 sm:w-11
      "
    >
      <Bell size={19} />

      <span
        className="
          absolute right-2 top-2
          h-1.5 w-1.5
          rounded-full
          bg-white
        "
      />
    </button>

    {/* Clerk User */}
    <div
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-xl
        border border-zinc-800
        bg-zinc-900
        sm:h-11 sm:w-11
      "
    >
      <UserButton
        appearance={{
          elements: {
            avatarBox: "h-8 w-8 sm:h-9 sm:w-9",
          },
        }}
      />
    </div>

  </div>
</div>


  {/* Stats */}
  <StatsGrid
    revenue={data?.total || 0}
    count={data?.count || 0}
  />


  {/* Recent Data */}
  {!isLoading && (
    <div className="
      grid
      gap-4
      px-4
      pb-4
      sm:gap-6
      sm:px-6
      lg:grid-cols-2
      lg:gap-6
    ">

      <RecentStudents
        students={data?.recentStudents || []}
      />

      <RecentTransactions
        transactions={data?.recentTransaction || []}
      />

    </div>
  )}


  {/* Quick Actions */}
  <div className="px-4 pb-6 sm:px-6 sm:pb-8">
    <QuickActions />
  </div>

</div>
  
    );
  }
  


export default AdminDashboard;