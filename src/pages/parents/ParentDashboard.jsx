import React, { Suspense, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { formatName } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectChildren } from "../../redux/children/children-selectors";

export const ParentDashboard = () => {
  const children = useSelector(selectChildren);
  useEffect(() => {
    console.log(children)
  }, [children]);
  return (
      <>
        <h2>Parent Dashboard</h2>
        <ul>
          {children.map(({id, name, login, familyId}) => (
            <li key={id}><NavLink to={`/parent/${id}/tasks`}>{formatName(name)}</NavLink></li>
          ))}
        </ul>
        <Suspense fallback={null}>
          {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
          <Outlet />
        </Suspense>
      </>
  );
};
