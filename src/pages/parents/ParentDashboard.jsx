import React, { Suspense, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useChildren } from "../../hooks/useChildren";
import { formatName } from "../../helpers/utils";

export const ParentDashboard = () => {
  const { children } = useChildren();
  useEffect(() => {
    console.log(children)
  }, [children]);
  // const { user, isRefreshing } = useAuth();
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
