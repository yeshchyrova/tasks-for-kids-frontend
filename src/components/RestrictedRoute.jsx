import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/parents" /> : Component;
};
