import React, { Suspense } from "react";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Suspense fallback={null}>
        {/* добавить сюда контейнер который будет ограничивать ширину всего контента */}
        <Outlet />
      </Suspense>
    </>
  );
};
