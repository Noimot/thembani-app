import React, { useEffect } from "react";
import LoginAuth from "../../components/auth/login/login-auth";
import Header from "../../components/header";
import { useSelector } from "react-redux";

export default function Login() {
  const { otpData } = useSelector((state) => state.auth);
  const userProfile = otpData?.data?.data?.profile;
  useEffect(() => {
    if (userProfile === null) {
      window.location.replace(`/customer-onboarding`);
    } else if (userProfile) {
      window.location.replace(`/`);
    }
  }, [userProfile]);
  return (
    <div className="h-screen w-full">
      <Header />
      <LoginAuth />
    </div>
  );
}
