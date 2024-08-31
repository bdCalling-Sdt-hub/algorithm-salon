import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("http://192.168.10.11:8000");
const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const tokenExist = localStorage.getItem("token");
  useEffect(() => {
    // Handle new notifications
    socket.on(`connection`, () => {
      console.log("connection");
    });
    return () => {
      socket.off(`disconnect`);
    };
  }, []);

  if (tokenExist) {
    return children;
  }
  return <Navigate to="/auth" state={{ from: location }} replace />;
};

export default AdminRoutes;
