import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register as registerOperation } from "../../redux/auth/auth-operations";


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

  const onSubmit = ({ memberName, memberEmail }) => {
    const role = user.userRole === "parent" ? "child" : "parent";
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
    <div>
      {step === 1 && (
        <>
          <p>Sign up</p>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <form onSubmit={handleSubmit(onNextStep)}>
            <label>Name</label>
            <input
              {...register("userName", { required: true })}
              defaultValue={user.userName}
            />
            {errors.userName && <span>This field is required</span>}

            <label>Email</label>
            <input
              {...register("userEmail", { required: true })}
              defaultValue={user.userEmail}
            />
            {errors.userEmail && <span>This field is required</span>}

            <label>Password</label>
            <input
              {...register("userPassword", { required: true })}
              defaultValue={user.userPassword}
            />
            {errors.userPassword && <span>This field is required</span>}
            {/* 99 - 119 should reuse code */}
            <div>
              <label>
                <input
                  type="radio"
                  value="parent"
                  {...register("userRole", { required: true })}
                  defaultChecked={user.userRole === "parent"}
                />
                Parent
              </label>
              <label>
                <input
                  type="radio"
                  value="child"
                  {...register("userRole", { required: true })}
                  defaultChecked={user.userRole === "child"}
                />
                Child
              </label>
              {errors.userRole && <span>Please select a role</span>}
            </div>

            <button type="submit">Next</button>
          </form>
        </>
      )}
      {step === 2 && (
        <>
          <p>Add your {user.userRole === "parent" ? "child" : "parent"}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
              {...register("memberName", { required: true })}
              defaultValue={familyMember.memberName}
            />
            {errors.memberName && <span>This field is required</span>}

            <label>Email</label>
            <input
              {...register("memberEmail", { required: true })}
              defaultValue={familyMember.memberEmail}
            />
            {errors.memberEmail && <span>This field is required</span>}
            <p>
              We will send a temporary password on your{" "}
              {user.userRole === "parent" ? "child" : "parent"}'s email
            </p>
            <div>
              <button type="button" onClick={() => goBack()}>
                Back
              </button>
              <button type="submit">Finish</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
