import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { formatName } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../redux/children/children-selectors";

export const SideBar = ({ role, userId }) => {
  const [isShown, setIsShown] = useState(false);
  const children = useSelector(selectChildren);
  return (
    <div className="fixed top-0 z-10 min-h-screen w-[250px] bg-blue flex justify-center font-['Poppins']">
      <div className="w-[151px] mt-10">
        <div className="mb-16">
          <Link
            to={role === "PARENT" ? "/parent" : `/child/${userId}/tasks`}
            className="text-white text-[32px] font-normal font-['Quando'] w-full leading-none"
          >
            Tasks Manager
          </Link>
        </div>
        <ul className="flex flex-col gap-6 font-semibold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `mb-6 text-lg ${
                  isActive
                    ? "text-yellow"
                    : "text-white hover:text-yellow transition-colors"
                }`
              }
              to={role === "PARENT" ? "/parent" : `/child/${userId}/tasks`}
            >
              Home
            </NavLink>
          </li>
          {role === "PARENT" ? (
            <>
              {/* <li>
                <NavLink
                  className={({ isActive }) =>
                    `mb-6 text-lg ${
                      isActive
                        ? "text-yellow"
                        : "text-white hover:text-yellow transition-colors"
                    }`
                  }
                  to="/confirmation"
                >
                  Confirmation
                </NavLink>
              </li> */}
              <li>
                <div>
                  <button
                    onClick={() => {
                      setIsShown(!isShown);
                    }}
                    type="button"
                    className="text-white text-lg border-none mb-[8px] hover:text-yellow transition-colors"
                  >
                    Statistics
                  </button>
                  {isShown && (
                    <ul className="ml-4 flex flex-col gap-1 justify-start text-base">
                      {children.map(({ id, name }) => (
                        <li key={id}>
                          <NavLink
                            className={({ isActive }) =>
                              `font-normal ${
                                isActive
                                  ? "text-yellow"
                                  : "text-white hover:text-yellow transition-colors"
                              }`
                            }
                            to={`/statistics/${id}`}
                          >
                            {formatName(name)}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to={`/statistics/${userId}`}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-yellow"
                      : "text-white hover:text-yellow transition-colors"
                  }`
                }
              >
                Statistics
              </NavLink>
            </li>
          )}
          {/* <NavLink to={"/settings"}>Settings</NavLink> */}
        </ul>
      </div>
    </div>
  );
};
