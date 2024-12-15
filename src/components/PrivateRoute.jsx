import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ component: Component }) => {
  const { isLoading, error, isLoggedIn } = useAuth();
  const shouldRedirect = error && !isLoading && !isLoggedIn;

  return isLoading ? (
    <p>Loading...</p>
  ) : shouldRedirect ? (
    <Navigate to="/login" />
  ) : (
    Component
  );
};
