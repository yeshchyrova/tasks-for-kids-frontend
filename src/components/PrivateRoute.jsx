import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component }) => {
  const { isLoading, error } = useAuth();
  const shouldRedirect = error && !isLoading;

  return isLoading ? (
    <p>Loading...</p>
  ) : shouldRedirect ? (
    <Navigate to="/login" />
  ) : (
    Component
  );
};
