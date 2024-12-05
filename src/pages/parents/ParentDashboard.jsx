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
      <p>Hello, {user.name}</p>
        <ul>
          {children.map(({id, name, login, familyId}) => (
            <li key={id}><NavLink to={`/parent/${id}/tasks`}>{formatName(name)}</NavLink></li>
          ))}
      </ul>
      {/* */}
        <Suspense fallback={null}>
          {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
          <Outlet />
        </Suspense>
      </>
  );
};
