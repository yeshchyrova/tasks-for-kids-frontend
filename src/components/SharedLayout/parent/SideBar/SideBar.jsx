import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { formatName } from "../../../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../../../redux/children/children-selectors";

export const SideBar = ({ role, userId }) => {
  const [isShown, setIsShown] = useState(false);
  const children = useSelector(selectChildren);
  return (
    <div className="fixed z-10 h-[100%] w-[250px] bg-blue flex justify-center">
      <div className="w-[151px] mt-10">
        <p className="text-white text-[32px] font-normal font-['Quando'] w-full mb-16">
          Tasks Manager
        </p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mb-6 text-lg font-bold text-yellow"
              : "mb-6 text-lg font-bold text-white"
          }
          to={role === "PARENT" ? "/parent" : "/child"}
        >
          Home
        </NavLink>
        {role === "PARENT" ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "mb-6 text-lg font-bold text-yellow"
                  : "mb-6 text-lg font-bold text-white"
              }
              to="/confirmation"
            >
              Confirmation
            </NavLink>
            {/* <div> */}
            <button
              onClick={() => {
                setIsShown(!isShown);
              }}
              type="button"
              className="text-white text-lg font-bold border-none mb-[26px]"
            >
              Statistics
            </button>
            {isShown && (
              <ul>
                {children.map(({ id, name }) => (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-lg font-normal text-yellow"
                          : "text-lg font-normal text-white"
                      }
                      to={`/statistics/${id}`}
                    >
                      {formatName(name)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
            {/* </div> */}
          </>
        ) : (
          <NavLink to={`/statistics/${userId}`}>Statistics</NavLink>
        )}

        {/* <NavLink to={"/settings"}>Settings</NavLink> */}
      </div>
    </div>
  );
};
