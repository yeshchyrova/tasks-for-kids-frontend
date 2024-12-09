import React from "react";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";

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
    <div className="bg-black/40 fixed top-0 left-0 z-50 w-screen h-screen no-doc-scroll">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#134668] rounded-lg border
        border-[#2176ae] pt-[28px] pb-[20px] px-7 flex flex-col gap-7 justify-center items-center min-w-[281px] min-h-[130px]"
      >
        <button
          type="button"
          className="absolute top-[14px] right-[16px] border-none"
          onClick={closeModal}
        >
          <IconContext.Provider
            value={{
              className:
                "fill-[#7db8e2] hover:fill-[#3f85b4] transition-colors",
            }}
          >
            <div>
              <IoClose size={"16px"} />
            </div>
          </IconContext.Provider>
        </button>
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
      </div>
    </div>
  );
};
