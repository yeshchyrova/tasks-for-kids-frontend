import React, { useState } from "react";
import { LogoutModal } from "../modals/LogoutModal";
import { AddNewMemberModal } from "../modals/AddNewMemberModal";

export const Header = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const openAddMemberModal = () => {
    setIsAddMemberModalOpen(true);
  };

  const closeAddMemberModal = () => { 
    setIsAddMemberModalOpen(false);
  }

  return (
    <>
      <header className="h-[70px] pl-[250px] bg-white shadow flex justify-end items-center px-16 gap-6 fixed w-screen">
        <button
          className="bg-red rounded-lg py-[8px] px-[16px] text-white text-sm font-medium font-['Poppins']"
          type="button"
          onClick={openAddMemberModal}
        >
          Add family member
        </button>
        <button
          className="text-sm font-semibold  py-[6px] px-[16px] rounded-lg border-2 border-red text-red font-['Poppins']"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
      {isLogoutModalOpen && (
        <LogoutModal closeModal={() => setIsLogoutModalOpen(false)} />
      )}
      {isAddMemberModalOpen && (
        <AddNewMemberModal onclose={closeAddMemberModal} />
      )}
    </>
  );
};
