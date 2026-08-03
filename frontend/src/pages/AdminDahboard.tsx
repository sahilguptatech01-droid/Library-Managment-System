import { Bell, Search,ArrowLeft } from "lucide-react";
import Box from "../compoents/StudentTable";
import { useNavigate } from "react-router-dom";
import StatsGrid from "../compoents/StatsGrid";

const AdminDashboard = () => {
  const navigate=useNavigate()
  
  return (

    <div className="min-h-screen bg-[#09090B] text-white">
      

      {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 px-6 py-6 border-b border-zinc-800">

              <div>
        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-1 text-zinc-400">
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

          <div className="relative w-full sm:w-72">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search students..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500
              "
            />
          </div>

          <button className="relative rounded-xl border border-zinc-700 bg-zinc-900 p-3 hover:border-indigo-500 transition">
            <Bell size={22} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

        </div>
      </div>

      {/* StatsGrid */}
      <StatsGrid/>


      {/* Table / Students */}
      <div className="px-6 pb-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Student List
            </h2>

            <button onClick={()=>{
              navigate('/add/student')
            }} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-500 transition">
              Add Student
            </button>
          </div>

          <Box />

        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;