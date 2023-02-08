import React, { useState } from "react";
// import { Link } from "react-router-dom";

import LoginForm from "./login-form";
import ConfirmLoginOtp from "./confirm-otp";
import { useSelector } from "react-redux";
import "../../../styles/style.css";

export default function LoginAuth() {
  const { loginData } = useSelector(
    (state) => state.auth
  );
  const [userDetails, getUserDetails] = useState();
  const [confirmOtp, setOtp] = useState("");
  const handleConfirmOtp = () => {
    setOtp("confirm-otp");
  };
  return (
    <div className="w-full h-auto bg-banner bg-cover bg-no-repeat bg-center	flex flex-col items-end justify-center py-10 px-[100px]">
      <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
        {loginData && confirmOtp === "confirm-otp" ? (
          <div className="flex flex-col w-[57px] text-center">
            <button
              className={`${
                loginData && confirmOtp === "confirm-otp" ? "border-green-1" : "border-dark-1"
              } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
            >
              1
            </button>
            <p className="text-dark-1 text-[13px]">Confirm OTP</p>
          </div>
        ) : (
          <div>
            <h1 className="text-dark-1 font-semibold text-2xl">
              Login to Desktop
            </h1>
          </div>
        )}
        {loginData && confirmOtp === "confirm-otp" ? (
          <ConfirmLoginOtp userDetails={userDetails} />
        ) : (
          <LoginForm
            handleConfirmOtp={handleConfirmOtp}
            getUserDetails={getUserDetails}
          />
        )}
      </div>
    </div>
  );
}