import { Navigate, Outlet } from "react-router-dom";
import { useAuth, useUser } from "@clerk/react";



export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const{user}=useUser()
  

  
  
  if (!isLoaded || !user) {
    return <div>Loading</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-up" replace />;
  }

  if(!user?.publicMetadata.libraryCreated){
    return <Navigate to ='/create' replace/>
  }

  return <Outlet />;
}

