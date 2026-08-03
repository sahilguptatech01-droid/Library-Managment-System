
import { Navigate, Outlet } from "react-router-dom";
import { useAuth, useUser } from "@clerk/react";
import Loading from "../compoents/Loading";



export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const{isLoaded:userauth,user}=useUser()
  console.log(user);
  
  
  if (!isLoaded||!userauth) {
    return <Loading/>;
  }
  if (!isSignedIn) {
    return <Navigate to="/sign-up" replace />;
  }
  if(!user?.publicMetadata?.libraryCreated){
    return <Navigate to="/create" replace />;
  }



  return <Outlet />;
}

