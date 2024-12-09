import React from "react";
import { firstLetter, formatDeadline, sliceTitle } from "../../helpers/utils";
import { Status } from "./Status";
import { Link } from "react-router-dom";

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
  return (
    <div className="w-[340px] bg-white rounded-lg border-[3px] border-red px-5 py-[14px]">
      <div className="flex justify-between items-start mb-1">
        <p className="text-dark text-base font-bold leading-normal">
          {sliceTitle(title)}
        </p>
        <Status status={status} />
      </div>
      <div className="text-red text-xs font-bold mb-[24px]">
        {formatDeadline(deadline)}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-center text-yellow text-sm font-semibold">
            From:{" "}
          </p>
          <div className="w-[26px] h-[26px] bg-[#d0ecff] rounded-full border-2 border-blue flex justify-center items-center">
            <p className="text-center text-blue text-sm font-bold">
              {firstLetter(parentName)}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-center text-yellow text-sm font-semibold">To: </p>
          <div className="w-[26px] h-[26px] bg-[#ffe4c3] rounded-full border-2 border-brown flex justify-center items-center">
            <p className="text-center text-brown text-sm font-bold">
              {firstLetter(childName)}
            </p>
          </div>
        </div>

        <Link
          className="text-center text-grey text-xs font-semibold font-['Poppins'] underline"
          to={`/parent/${childId}/tasks/${id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
