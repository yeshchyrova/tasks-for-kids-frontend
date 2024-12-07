"use client";
import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { FormBlock } from "../components/forms/EnterForm/FormBlock";

export default function LoginPage() {
  return (
    <FormBlock type="in">
      <LoginForm />
    </FormBlock>
  );
}
