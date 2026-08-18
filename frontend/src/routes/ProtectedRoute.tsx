
import { Navigate, Outlet } from "react-router-dom";
import { useAuth, useUser } from "@clerk/react";
import Loading from "../compoents/Loading";
import OfflineScreen from "../compoents/OfflineScreen";



export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const{isLoaded:userauth,user}=useUser()

  // user online or offline
  if(!navigator.onLine){  
    return <OfflineScreen/>
  }
  
  if (!isLoaded||!userauth) {
    return <Loading/>;
  }
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }


  if(!user?.publicMetadata?.libraryCreated){
    return <Navigate to="/create" replace />;
  }


  return <Outlet />;
}

