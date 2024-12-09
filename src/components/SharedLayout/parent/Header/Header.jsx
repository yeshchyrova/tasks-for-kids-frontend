import React, { useState } from "react";
import { LogoutModal } from "../../../modals/LogoutModal";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/auth-operations";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(true);
  };

  const openModal = () => {
    console.log("Add family modal is open!");
  };

  return (
    <>
      <header className="h-[70px] pl-[250px] bg-white shadow flex justify-end items-center px-16 gap-6 fixed w-screen">
        <button
          className="bg-red rounded-lg py-[8px] px-[16px] text-white text-sm font-medium font-['Poppins']"
          type="button"
          onClick={openModal}
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
      {isOpen && (
        <LogoutModal
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
