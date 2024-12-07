import React from "react";

export const FormBlock = ({ type, children }) => {
  return (
    <section className="bg-signin-dark min-h-screen w-full flex justify-center items-center font-['Poppins']">
      <div className="py-[56px] px-[68px] w-[472px] bg-signin-blue rounded-3xl border border-white">
        {/* top text block */}
        {type !== "up2" ? (
          <div className="w-full mb-[24px] flex-col justify-center items-center inline-flex">
            <p className="text-center text-white text-2xl font-['Poppins'] mb-[4px]">
              {type === "in" ? "Sign in" : "Sign up"}
            </p>
            <p className="text-white text-sm font-light">
              {type === "in"
                ? "Don’t have an account? "
                : "Already have an account? "}
              <a
                className="underline text-white transition-colors hover:text-[#facf35]"
                href={type === "in" ? "/register" : "/login"}
              >
                {" "}
                {type === "in" ? "Sign up" : "Sign in"}
              </a>
            </p>
          </div>
        ) : (
          <p className="text-center text-white text-2xl  mb-[24px]">
            Add your child
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
