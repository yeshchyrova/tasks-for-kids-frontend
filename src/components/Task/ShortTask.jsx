import React from "react";
import { sliceTitle } from "../../helpers/utils";
import { Status } from "./Status";

export const ShortTask = ({
  item: {
    id,
    title,
    description,
    deadline,
    childId,
    parentId,
    taskType,
    reportType,
    status,
    parentName,
    childName,
  },
}) => {
  return (
    <div className="w-[298px] h-[117px] bg-white rounded-lg border-2 border-red px-5 py-3">
      <div className="flex justify-between items-center">
        <p className="text-dark text-base font-semibold">
          {title}
        </p>
        <Status status={status}/>
      </div>
      <p className="text-red text-xs font-semibold">{deadline}</p>
      <div className="flex justify-between items-center">
        
      </div>
    </div>
  );
};
