"use client";
import React, { useEffect } from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
    useEffect(() => {
      localStorage.setItem("lastVisitedPath", null);
    }, []);
  return (
    <section className="bg-signin-dark min-h-screen w-full flex justify-center items-center font-['Poppins']">
      <RegisterForm />
    </section>
  );
}