import React from "react";
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

  const onSubmit = (data) => {
    dispatch(login(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      <div>
        <label>
          <input
            type="radio"
            value="parent"
            {...register("role", { required: true })}
          />
          Parent
        </label>
        <label>
          <input
            type="radio"
            value="child"
            {...register("role", { required: true })}
          />
          Child
        </label>
        {errors.role && <span>Please select a role</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
