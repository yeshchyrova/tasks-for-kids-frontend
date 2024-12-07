"use client";
import React from "react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="bg-signin-dark min-h-screen w-full flex justify-center items-center font-['Poppins']">
      <RegisterForm />
    </section>
  );
}