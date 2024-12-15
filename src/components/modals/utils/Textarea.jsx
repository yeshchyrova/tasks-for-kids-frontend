import React from "react";
import { inputClasses, labelClasses } from "./commonClasses";

export const Textarea = ({ type, title, register, isRequired, size }) => {
  return (
    <>
      <label htmlFor={type} className={labelClasses}>
        {title}
      </label>
      <textarea
        id={type}
        name={type}
        {...size}
        className={`${inputClasses} scroll resize-none overflow-y-scroll`}
        {...register(type, { maxLength: 500, required: isRequired })}
      />
    </>
  );
};
