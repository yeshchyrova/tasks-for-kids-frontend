import React from "react";
import { firstLetter } from "../../helpers/utils";

export const NameCircle = ({name, role}) => {
  return (
    <div
      className={`w-[28px] h-[28px]  rounded-full border-2 flex justify-center items-center 
      ${
        role === "PARENT"
          ? "bg-[#d0ecff] border-blue"
          : "bg-[#ffe4c3] border-brown"
      }`}
    >
      <p
        className={`text-center text-blue text-[15px] font-bold ${
          role === "PARENT" ? "text-blue" : "text-brown"
        }`}
      >
        {firstLetter(name)}
      </p>
    </div>
  );
};
