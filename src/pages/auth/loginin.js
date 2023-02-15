import React from "react";
import LoginAuth from "../../components/auth/login/login-auth";
import Header from "../../components/Header";

export default function Login() {
  return (
    <div className="h-screen w-full">
      <Header />
      <LoginAuth />
    </div>
  );
}
