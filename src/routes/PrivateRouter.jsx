import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) return children;
  if (loading) return "....";
  return <Navigate to="/"></Navigate>;
};

export default PrivateRouter;
