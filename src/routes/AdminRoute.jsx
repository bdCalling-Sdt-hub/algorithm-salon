import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const tokenExist = localStorage.getItem("token");
 

  if (tokenExist) {
    return children;
  }
  return <Navigate to="/auth" state={{ from: location }} replace />;
};

export default AdminRoutes;
