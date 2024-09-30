import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import { AuthContext } from "../context/authContext";

const RouteTour = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;

  };

  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default RouteTour