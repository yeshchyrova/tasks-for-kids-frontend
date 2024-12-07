import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register as registerOperation } from "../../redux/auth/auth-operations";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userRole: "",
  });

  const [familyMember, setFamilyMember] = useState({
    memberName: "",
    memberEmail: "",
    memberRole: "",
  });

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onNextStep = ({ userEmail, userName, userPassword, userRole }) => {
    setUser({
      userName,
      userEmail,
      userPassword,
      userRole,
    });
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
  };

  const updateVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = ({ memberName, memberEmail }) => {
    // setFamilyMember({ memberName, memberEmail, role });
    const finalData = {
      user: {
        name: user.userName,
        email: user.userEmail,
        password: user.userPassword,
        role: user.userRole,
      },
      member: {
        name: memberName,
        email: memberEmail,
        role: familyMember.memberRole,
      },
    };
    console.log("finalData: ", finalData);
    dispatch(registerOperation(finalData));
    reset();
  };

  return (
    <>
      {step === 1 && (
        <div className="w-[475px] h-[483px] rounded-3xl border border-white px-[64px] bg-signin-blue">
          <div className="w-full mb-[28px] mt-[56px] flex-col justify-center items-center inline-flex">
            <p className="text-center text-white text-2xl font-['Poppins'] mb-[4px]">
              Sign up
            </p>
            <p className="text-white text-sm font-light">
              Already have an account?{" "}
              <a
                className="underline text-white hover:text-[#facf35] transition-colors"
                href="/login"
              >
                Sign in
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit(onNextStep)} autoComplete="off">
            <div className="mb-[24px] w-full relative">
              <div className="mb-[4px]">
                <label className="text-white text-sm font-light">Name</label>
              </div>
              <input
                className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
                {...register("userName", { required: true })}
                defaultValue={user.userName}
              />
              {errors.userName && (
                <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
                  Name is required
                </span>
              )}
            </div>

            <div className="mb-[24px] w-full relative">
              <div className="mb-[4px]">
                <label className="text-white text-sm font-light">Email</label>
              </div>
              <input
                className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
                type="email"
                {...register("userEmail", { required: true })}
                defaultValue={user.userEmail}
              />
              {errors.userEmail && (
                <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
                  Email is required
                </span>
              )}
            </div>

            <div className="mb-[20px] w-full relative">
              <div className="mb-[4px] relative">
                <label className="text-white text-sm font-light">
                  Password
                </label>
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
                {...register("userPassword", { required: true })}
                defaultValue={user.userPassword}
              />
              {errors.userPassword && (
                <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
                  Password is required
                </span>
              )}
            </div>
            {/* should reuse code */}
            <button type="submit" className="ml-auto block">
              <IconContext.Provider
                value={{
                  className:
                    "fill-[#c89035] hover:fill-[#debb83] transition-colors",
                }}
              >
                <div>
                  <HiArrowLongRight size={"37px"} />
                </div>
              </IconContext.Provider>
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="w-[472px] h-[404px] bg-signin-blue rounded-3xl border border-white px-[68px]">
          <p className="text-center text-white text-2xl  mb-[24px] mt-[56px]">
            Add your child
          </p>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="mb-[24px] w-full relative">
              <div className="mb-[4px]">
                <label className="text-white text-sm font-light">Name</label>
              </div>
              <input
                className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
                {...register("memberName", { required: true })}
                defaultValue={familyMember.memberName}
                type="text"
              />
              {errors.memberName && (
                <span className="absolute -bottom-5 left-0 text-[#f4a19b] text-xs">
                  Name is required
                </span>
              )}
            </div>

            <div className="mb-[4px] w-full relative">
              <div className="mb-[4px]">
                <label className="text-white text-sm font-light">Email</label>
              </div>
              <input
                className="rounded-xl border border-white w-full h-[35px] outline-none px-[12px] bg-signin-blue text-white text-sm hover:border-[#fbb13c] focus:border-[#fbb13c] transition-colors"
                type="email"
                {...register("memberEmail", { required: true })}
                defaultValue={familyMember.memberEmail}
              />
              {errors.memberEmail && (
                <span className="absolute bottom-[-35px] left-0 text-[#f4a19b] text-xs">
                  Email is required
                </span>
              )}
            </div>
            <p className="text-white text-[11px] font-normal mb-[26px]">
              We will send a temporary password on your child's email
            </p>
            <div className="flex justify-between">
              <button type="button" onClick={() => goBack()}>
                <IconContext.Provider
                  value={{
                    className:
                      "fill-[#c89035] hover:fill-[#debb83] transition-colors",
                  }}
                >
                  <div>
                    <HiArrowLongLeft size={"37px"} />
                  </div>
                </IconContext.Provider>
              </button>
              <button
                type="submit"
                className="py-2 px-[28px] bg-[#6f5225] rounded-2xl border font-light border-[#fbb13c] text-center text-white hover:bg-[#c89035] focus:bg-[#c89035] transition-colors text-sm"
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
