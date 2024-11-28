import React, { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ParentDashboard = () => {
  // const { user, isRefreshing } = useAuth();
  useEffect(() => {
    
  }, []);
  return (
    <main>
      {/* <h2>Parent Dashboard</h2> */}
      <Suspense fallback={null}>
        {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
        <Outlet />
      </Suspense>
    </main>
  );
};
