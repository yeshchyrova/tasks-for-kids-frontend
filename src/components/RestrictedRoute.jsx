import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component }) => {
  const { isLoggedIn, role } = useAuth();

  return isLoggedIn ? <Navigate to={`/${role?.toLowerCase()}`} /> : Component;
};
