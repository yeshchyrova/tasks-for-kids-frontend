"use client";
import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <>
      <p>
        No account yet? <a href="/register">Register</a>
      </p>
      <LoginForm />
    </>
  );
}
