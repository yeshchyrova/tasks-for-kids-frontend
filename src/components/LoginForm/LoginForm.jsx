import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const updateVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (data) => {
    const updatedData = { login: data.email, password: data.password };
    const userData = dispatch(login(updatedData));
    console.log(userData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-[28px] w-full relative">
        <div className="mb-[4px]">
          <label className="text-white text-sm font-light">Email</label>
        </div>
        <input
          className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
            Email is required
          </span>
        )}
      </div>
      <div className="w-full relative mb-8">
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
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
            Password is required
          </span>
        )}
      </div>
      <button
        className="py-2 px-[28px] bg-[#6f5225] rounded-2xl border font-light border-[#fbb13c] text-center text-white ml-auto block hover:bg-[#c89035] focus:bg-[#c89035] transition-colors text-sm"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
};
