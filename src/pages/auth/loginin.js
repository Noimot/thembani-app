import React, { useEffect } from "react";
import LoginAuth from "../../components/auth/login/login-auth";
import Header from "../../components/header";
import { useSelector } from "react-redux";

export default function Login() {
  const { otpData } = useSelector((state) => state.auth);
  const profile = otpData?.data?.data?.profile;

  useEffect(() => {
    if (profile === null) {
      window.location.replace(`/customer-onboarding`);
    } else if (profile) {
      window.location.replace(`/`);
    }
  }, [profile]);

  return (
    <div className="h-screen w-full">
      <Header />
      <LoginAuth />
    </div>
  );
}
