"use client";
import React, { useEffect } from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { FormBlock } from "../components/forms/EnterForm/FormBlock";

export default function LoginPage() {
  useEffect(() => {
    localStorage.setItem("lastVisitedPath", null);
  }, []);
  return (
    <FormBlock type="in">
      <LoginForm />
    </FormBlock>
  );
}
