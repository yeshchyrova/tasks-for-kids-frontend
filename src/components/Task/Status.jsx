import React from "react";

export const Status = ({ status }) => {
  return (
    <div
      className={`rounded-lg border-2 py-[3px] px-[11px] ${
        status === "COMPLETED" && "border-[##16ca37] text-[##16ca37]"
      } ${status === "TODO" && "border-red text-red"} ${
        status === "CONFIRM" && "border-[#fbb13c] text-[#fbb13c]"
      }`}
    >
      {(status === "COMPLETED" && "Done") ||
        (status === "TODO" && "Todo") ||
        (status === "CONFIRM" && "Checking")}
    </div>
  );
};
