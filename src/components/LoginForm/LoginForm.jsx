import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { Input } from "../forms/EnterForm/Input";
import { PasswordInput } from "../forms/EnterForm/PasswordInput";

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
    dispatch(login(updatedData));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Input
        type="email"
        toRegister="email"
        register={register}
        error={errors.email}
        classes={{ mb: "mb-[28px]", ab: "-bottom-5" }}
      />

      <PasswordInput
        isVisible={isVisible}
        updateVisibility={updateVisibility}
        register={register}
        error={errors.password}
        classes={{ mb: "mb-8" }}
        toRegister="password"
      />

      <button
        className="py-2 px-[28px] bg-[#6f5225] rounded-2xl border font-light border-[#fbb13c] text-center text-white ml-auto block hover:bg-[#c89035] focus:bg-[#c89035] transition-colors text-sm"
        type="submit"
      >
        Log in
      </button>
    </form>
  );
};
