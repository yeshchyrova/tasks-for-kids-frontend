import React, { Suspense, useEffect } from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { getChildrenByFamilyId } from "../../../redux/children/children-operations";
import { useDispatch } from "react-redux";
import { SideBar } from "./SideBar/SideBar";

export const ParentSharedLayout = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChildrenByFamilyId(user.familyId));
  }, [dispatch, user.familyId]);
  return (
    <>
      <Header />
      <SideBar />
      <main className="ml-[300px]">
        <Suspense fallback={null}>
          {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
