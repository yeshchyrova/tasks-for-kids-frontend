import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { getChildrenByFamilyId } from "../../redux/children/children-operations";
import { Header } from "./parent/Header/Header";
import { SideBar } from "./parent/SideBar/SideBar";

export const SharedLayout = () => {
  const { user, role } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (role === "PARENT") dispatch(getChildrenByFamilyId(user.familyId));
  }, [dispatch, user.familyId, role]);
  return (
    <>
      <Header />
      <SideBar role={role} userId={user.id} />
      <main className="ml-[250px] bg-greybg">
        <div className="w-full px-16 pt-9">
          <Suspense fallback={null}>
            {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
