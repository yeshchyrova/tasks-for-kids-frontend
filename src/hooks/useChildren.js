import { useSelector } from "react-redux";
import { selectChildren } from "../redux/children/children-selectors";

export const useChildren = () => {
  const children = useSelector(selectChildren);

  return { children };
};
