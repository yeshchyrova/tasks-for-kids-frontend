import React, { Suspense, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { formatName } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../redux/children/children-selectors";
import { useAuth } from "../../hooks/useAuth";

export const ParentDashboard = () => {
  const children = useSelector(selectChildren);
  const { user } = useAuth();
  // useEffect(() => {
  //   console.log(children)
  // }, [children]);
  return (
    <>
      <p className="text-red text-[38px] font-semibold mb-3">
        Hello, {user.name}
      </p>
      <ul className="flex justify-around mb-5">
        {children.map(({ id, name }) => (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue text-xl font-semibold"
                  : "text-dark text-xl font-semibold"
              }
              to={`/parent/${id}/tasks`}
            >
              {formatName(name)}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
