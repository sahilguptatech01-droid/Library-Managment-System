import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@clerk/react";
export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  
  

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}