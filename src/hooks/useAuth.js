import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectUserRole,
} from "../redux/auth/auth-selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const role = useSelector(selectUserRole);

  return { isLoggedIn, user, isRefreshing, role };
};
