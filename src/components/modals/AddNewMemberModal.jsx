import React from "react";
import { ModalWrapper } from "./ModalWrapper";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import {
  errorClasses,
  inputBlockClasses,
  inputClasses,
  labelClasses,
} from "./utils/commonClasses";
import { ButtonsList } from "./utils/ButtonsList";
import { addFamilyMember } from "../../redux/auth/auth-operations";

export const AddNewMemberModal = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const submitData = async (data) => {
    try {
      await addFamilyMember(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (data) => {
    const formattedData = {
      name: data.memberName,
      login: data.memberEmail,
      role: data.memberRole,
      familyId: user.familyId,
    };
    console.log("formattedData: ", formattedData);
    submitData(formattedData);
    onclose();
  };

  
  return (
    <ModalWrapper
      classes={"pt-[32px] pb-[32px] w-[380px] gap-6"}
      onclose={onclose}
    >
      <p className="text-center text-white text-xl font-semibold">
        Add family member
      </p>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="flex flex-col gap-7">
          {/* NAME */}
          <div className={inputBlockClasses}>
            <label className={labelClasses} htmlFor="memberName">
              Name
            </label>
            <input
              type="text"
              name="memberName"
              id="memberName"
              className={`h-[36px] ${inputClasses} w-full`}
              {...register("memberName", { required: true, maxLength: 255 })}
            />
            {errors.memberName?.type === "required" && (
              <span className={`${errorClasses} left-[67px]`}>
                Name is required
              </span>
            )}
            {errors.memberName?.type === "maxLength" && (
              <span className={`${errorClasses} left-[67px]`}>
                Max length 255 characters exceeded
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className={inputBlockClasses}>
            <label className={labelClasses} htmlFor="memberEmail">
              Email
            </label>
            <input
              type="email"
              name="memberEmail"
              id="memberEmail"
              className={`h-[36px] ${inputClasses} w-full`}
              {...register("memberEmail", { required: true, maxLength: 255 })}
            />
            {errors.memberEmail?.type === "required" && (
              <span className={`${errorClasses} left-[62px] -bottom-9`}>
                Email is required
              </span>
            )}
            {errors.memberEmail?.type === "maxLength" && (
              <span className={`${errorClasses} left-[62px]`}>
                Max length 255 characters exceeded
              </span>
            )}
            <p className="text-center text-white text-[11px] absolute -bottom-5 font-thin">
              We will send a temporary password on this email
            </p>
          </div>

          {/* ROLE */}
          <div className="flex gap-7 relative mt-6 mb-5">
            <p className={`${labelClasses}`}>Role</p>
            <div className="flex gap-6 mt-[5px]">
              <div className="flex gap-[6px] items-center">
                <label
                  className="text-center text-white text-[12px]"
                  htmlFor="memberRole"
                >
                  Parent
                </label>
                <input
                  type="radio"
                  value="PARENT"
                  {...register("memberRole", { required: true })}
                />
              </div>

              <div className="flex gap-[6px] items-center">
                <label
                  className="text-center text-white text-[12px]"
                  htmlFor="memberRole"
                >
                  Child
                </label>
                <input
                  type="radio"
                  value="CHILD"
                  {...register("memberRole", { required: true })}
                />
              </div>
            </div>

            {errors.memberRole && (
              <span className={`${errorClasses} left-[62px]`}>
                Role is required
              </span>
            )}
          </div>

          <ButtonsList closeFn={onclose} closeText="Cancel" submitText="Add" />
        </div>
      </form>
    </ModalWrapper>
  );
};
