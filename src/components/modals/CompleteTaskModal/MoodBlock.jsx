import React from "react";
import { inputBlockClasses, inputClasses, labelClasses } from "../utils/commonClasses";

const moodList = ["Great", "Good", "Okay", "Bad", "Awful"];

export const MoodBlock = ({ register }) => {
  return (
    <div  className={inputBlockClasses}>
      <label htmlFor="mood" className={labelClasses}>Mood</label>
      <select
        name="mood"
        id="mood"
        {...register("mood", { required: true })}
        className={`${inputClasses} w-full`}
        defaultValue="great"
      >
        {moodList.map((title) => (
          <option key={title} value={title.toUpperCase()}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
