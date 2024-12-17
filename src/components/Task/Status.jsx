import React from "react";

export const Status = ({ status,  }) => {
  // const status = "COMPLETED";
  // const status = "TODO";
  // const status = "CONFIRM";
  return (
    <div
      className={`rounded-lg border-[2.5px] py-[4px] px-[11px] text-xs font-bold flex items-center justify-center ${
        status === "COMPLETED" && "border-[#16ca37] text-[#16ca37]"
      } ${status === "TODO" && "border-red text-red"} ${
        status === "CONFIRM" && "border-[#fbb13c] text-[#fbb13c]"
      }`}
    >
      <p className="status">
        {(status === "COMPLETED" && "Done") ||
          (status === "TODO" && "Todo") ||
          (status === "CONFIRM" && "Checking")}
      </p>
    </div>
  );
};
