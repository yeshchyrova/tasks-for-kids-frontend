"use client";
import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <section className="bg-signin-dark min-h-screen w-full flex justify-center items-center font-['Poppins']">
      <div className="w-[475px] h-[427px] bg-signin-blue rounded-3xl border border-white px-[68px]">
        {/* top text block */}
        <div className="w-full mb-[28px] mt-[56px] flex-col justify-center items-center inline-flex">
          <p className="text-center text-white text-2xl font-['Poppins'] mb-[4px]">
            Sign in
          </p>
          <p className="text-white text-sm font-light">
            Don’t have an account?{" "}
            <a
              className="underline text-white transition-colors hover:text-[#facf35]"
              href="/register"
            >
              Sign up
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
