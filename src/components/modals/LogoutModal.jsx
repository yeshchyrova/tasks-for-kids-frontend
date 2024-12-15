import React from "react";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import { ModalWrapper } from "./ModalWrapper";

export const LogoutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("called")
    dispatch(logout());
    closeModal();
  };

  const btns = [
    { text: "Cancel", callback: closeModal },
    { text: "Continue", callback: handleLogout },
  ];
  return (
    <ModalWrapper onclose={closeModal}  classes="pt-[28px] pb-[20px] gap-7 justify-center items-center min-w-[281px] min-h-[130px]">
        <p className="text-white text-base font-semibold text-center w-[163px]">
          Are you sure you want to logout?
        </p>
        <div className="flex w-full justify-between items-center">
          {btns.map(({ text, callback }) => (
            <button
              key={text}
              type="button"
              className="rounded-lg border-2 border-[#4381ad] hover:bg-[#00375B] transition-colors bg-none py-1 px-4 text-white text-xs font-medium font-['Poppins']"
              onClick={() => callback()}
            >
              {text}
            </button>
          ))}
        </div>
    </ModalWrapper>
  );
};
