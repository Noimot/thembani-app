import React from "react";
import CreateAccount from "../../components/auth/signup/create-account";
import Header from "../../components/header";

export default function Signup() {
  return (
    <div className="h-screen w-full">
      <Header />
      <CreateAccount />
    </div>
  );
}
