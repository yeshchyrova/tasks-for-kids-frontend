import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register as registerOperation } from "../../redux/auth/auth-operations";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { IconContext } from "react-icons/lib";
import { Input } from "../forms/EnterForm/Input";
import { PasswordInput } from "../forms/EnterForm/PasswordInput";
import { FormBlock } from "../forms/EnterForm/FormBlock";

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userRole: "",
  });

  const [familyMember] = useState({
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
    const finalData = {
      parentDto: {
        name: user.userName,
        login: user.userEmail,
        password: user.userPassword,
        role: "PARENT",
      },
      childDto: {
        name: memberName,
        login: memberEmail,
        role: "CHILD",
      },
    };
    console.log("finalData: ", finalData);
    dispatch(registerOperation(finalData));
    reset();
  };

  return (
    <>
      {step === 1 && (
        <FormBlock type="up1">
          <form onSubmit={handleSubmit(onNextStep)} autoComplete="off">
            <Input
              type="name"
              toRegister="userName"
              register={register}
              error={errors.userName}
              classes={{ mb: "mb-[24px]", ab: "-bottom-5" }}
              defaultValue={user.userName}
            />

            <Input
              type="email"
              toRegister="userEmail"
              register={register}
              error={errors.userEmail}
              classes={{ mb: "mb-[24px]", ab: "-bottom-5" }}
              defaultValue={user.userEmail}
            />

            <PasswordInput
              isVisible={isVisible}
              updateVisibility={updateVisibility}
              register={register}
              error={errors.userPassword}
              classes={{ mb: "mb-[20px]" }}
              toRegister="userPassword"
            />

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
        </FormBlock>
      )}
      {step === 2 && (
        <FormBlock type="up2">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              type="name"
              toRegister="memberName"
              register={register}
              error={errors.memberName}
              classes={{ mb: "mb-[24px]", ab: "-bottom-5" }}
              defaultValue={familyMember.memberName}
            />

            <Input
              type="email"
              toRegister="memberEmail"
              register={register}
              error={errors.memberEmail}
              classes={{ mb: "mb-[4px]", ab: "bottom-[-35px]" }}
              defaultValue={familyMember.memberEmail}
            />

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
        </FormBlock>
      )}
    </>
  );
};
