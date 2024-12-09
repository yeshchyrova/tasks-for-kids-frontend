import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { getChildrenByFamilyId } from "../../redux/children/children-operations";
import { Header } from "./parent/Header/Header";
import { SideBar } from "./parent/SideBar/SideBar";
import { Footer } from "../Footer";

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
      <main className=" bg-greybg font-['Poppins']">
        <div className=" ml-[250px] pt-[106px] px-16 ">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
};
