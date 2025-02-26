import React from "react";
import { firstLetter, formatDeadline, formatName, sliceTitle } from "../../helpers/utils";
import { Status } from "./Status";
import { Link, useLocation } from "react-router-dom";
import { NameCircle } from "./NameCircle";

export const ShortTask = ({
  item: {
    id,
    title,
    deadline,
    childId,
    status,
    parentName,
    childName,
  },
}) => {
  const location = useLocation();

  return (
    <div className="w-[350px] bg-white rounded-lg border-[3px] border-red px-5 py-[14px]">
      <div className="flex justify-between items-start mb-1">
        <p className="text-dark text-lg font-bold leading-normal">
          {sliceTitle(formatName(title))}
        </p>
        <Status status={status} />
      </div>
      <div className="text-red text-sm font-semibold mb-[24px]">
        
        {formatDeadline(deadline)}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-center text-yellow text-sm font-semibold">
            From:{" "}
          </p>
          <NameCircle name={parentName} role="PARENT" />
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-center text-yellow text-sm font-semibold">To: </p>
          <NameCircle name={childName} role="CHILD" />
        </div>

        <Link
          className="text-center text-grey text-xs font-semibold font-['Poppins'] underline"
          to={`/${childId}/tasks/${id}`}
          state={{ from: location }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
