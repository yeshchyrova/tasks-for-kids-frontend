import React from "react";

// for email and name inputs 

export const Input = ({
  type,
  toRegister,
  register,
  error,
  classes,
  defaultValue,
}) => {
  return (
    <div className={`w-full relative ${classes.mb}`}>
      <div className="mb-[4px]">
        <label className="text-white text-sm font-light">
          {type === "email" ? "Email" : "Name"}
        </label>
      </div>
      <input
        className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
        type={type === "email" ? "email" : "text"}
        {...register(toRegister, { required: true })}
        defaultValue={defaultValue || ""}
      />
      {error && (
        <span
          className={`absolute ${classes.ab} left-0 text-[#f4a19b] text-xs`}
        >
          {type === "email" ? "Email" : "Name"} is required
        </span>
      )}
    </div>
  );
};
