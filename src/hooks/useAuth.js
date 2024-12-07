import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsLoading,
  selectUser,
  selectUserRole,
  selectError,
} from "../redux/auth/auth-selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const role = useSelector(selectUserRole);
  const error = useSelector(selectError);

  return { isLoggedIn, user, isLoading, role, error };
};
