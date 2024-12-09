import React, { Suspense, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { formatName } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../redux/children/children-selectors";
import { useAuth } from "../../hooks/useAuth";
import { LogoutModal } from "../../components/modals/LogoutModal";

export const ParentDashboard = () => {
  const children = useSelector(selectChildren);
  const { user } = useAuth();
  const location = useLocation();
  // console.log("current path: ", location.pathname);
  const isNotChosen = location.pathname === "/parent";


  return (
    <>
      <p className="text-red text-[38px] font-bold mb-3">Hello, {user.name}</p>
      <ul className={`flex justify-around ${isNotChosen ? "" : "mb-5"}`}>
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
      {isNotChosen ? (
        <p className="w-[280px] text-center text-grey text-2xl font-medium">
          Select one of your kids to see their tasks
        </p>
      ) : (
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};
