import React from "react";

export const PasswordInput = ({
  isVisible,
  updateVisibility,
  register,
  error,
  classes,
  toRegister,
}) => {
  return (
    <div className={`w-full relative ${classes.mb}`}>
      <div className="relative  mb-[4px]">
        <label className="text-white text-sm font-light">Password</label>
        <button
          type="button"
          className="text-white hover:text-[#facf35] transition-colors text-sm font-light absolute right-[4px] bottom-0"
          onClick={updateVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      <input
        className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
        type={isVisible ? "text" : "password"}
        {...register(toRegister, { required: true })}
      />
      {error && (
        <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
          Password is required
        </span>
      )}
    </div>
  );
};
