import React from "react";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export const ModalWrapper = ({ children, classes, onclose }) => {
  return (
    <div className="bg-black/40 fixed top-0 left-0 z-50 w-screen h-screen no-doc-scroll">
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#134668] rounded-lg border
        border-[#2176ae] px-7 flex flex-col ${classes}`}
      >
        <button
          type="button"
          className="absolute top-[14px] right-[16px] border-none"
          onClick={onclose}
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
        {children}
      </div>
    </div>
  );
};
