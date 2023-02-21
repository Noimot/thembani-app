import React, { useEffect } from "react";
import CreateAccount from "../../components/auth/signup/create-account";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Signup() {
  const {pathname} = useLocation();
  const { otpData } = useSelector((state) => state.auth);
  const data = otpData?.data?.data;
  useEffect(() => {
    if (pathname === "/create-account" && data) {
      window.location.replace("/confirm-account");
    }
  }, [data]);

  return (
    <div className="h-screen w-full">
      <Header />
      <CreateAccount />
    </div>
  );
}
