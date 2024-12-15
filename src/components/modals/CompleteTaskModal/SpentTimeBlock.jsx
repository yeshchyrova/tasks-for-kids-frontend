import React from "react";
import { selectClasses, smallLabelClasses } from "./classes";
import { errorClasses, labelClasses } from "../utils/commonClasses";

export const SpentTimeBlock = ({
  register,
  spentTimeError,
  setSpentTimeError,
}) => {
  const generateOptions = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const options = [
    { name: "months", arr: generateOptions(0, 12) },
    { name: "days", arr: generateOptions(0, 31) },
    { name: "hours", arr: generateOptions(0, 23) },
    { name: "minutes", arr: generateOptions(0, 59) },
  ];

  return (
    <div className="relative">
      <p className={`${labelClasses} mb-2`}>Spent time</p>
      <div className="flex gap-10">
        {options.map(({ name, arr }) => (
          <div className="flex flex-col" key={name}>
            <label htmlFor={name} className={smallLabelClasses}>
              {name}
            </label>
            <select
              name={name}
              id={name}
              className={selectClasses}
              {...register(name)}
              defaultValue={name === "minutes" ? "1" : "0"}
              onChange={() => setSpentTimeError(false)}
            >
              {arr.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {spentTimeError && (
        <span className={`${errorClasses} left-[0px]`}>
          Spent time must be at least 1 minute
        </span>
      )}
    </div>
  );
};
