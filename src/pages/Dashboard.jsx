import React, { Suspense, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { formatName } from "../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../redux/children/children-selectors";
import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {
  const children = useSelector(selectChildren);
  const { user, role } = useAuth();
  const location = useLocation();
  const isNotChosen = location.pathname === "/parent";
  const idPath = location.pathname.slice(8, 10);
  const navigate = useNavigate();

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (role === "CHILD" && isInitialRender.current) {
      isInitialRender.current = false;
      navigate(`/child/${user.id}/tasks`, { replace: true });
    }
  }, [navigate, role, user.id]);

  return (
    <>
      <p className="text-red text-[38px] font-bold mb-3">Hello, {user.name}</p>
      {role === "PARENT" && (
        <ul className={`flex justify-around ${isNotChosen ? "" : "mb-5"}`}>
          {children.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `text-lg font-semibold ${
                    isActive ? "text-blue" : "text-dark"
                  }`
                }
                to={`/parent/${id}/tasks`}
              >
                {formatName(name)}
              </NavLink>
              {id == idPath && (
                <div className="w-full h-[4px] bg-blue rounded-sm"></div>
              )}
            </li>
          ))}
        </ul>
      )}
      {isNotChosen && role === "PARENT" ? (
        <div className="flex justify-center items-center no-selected-child-text-block">
          <p className="w-[280px] text-center text-grey text-2xl font-medium">
            Select one of your kids to see their tasks
          </p>
        </div>
      ) : (
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};
