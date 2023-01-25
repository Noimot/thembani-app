import React, { useState } from "react";
import Header from "../../header";
import { LoginLogo } from "../../icons/login-logo";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../shared/form-input";
import SignupForm from "./signup-form";
import ConfirmOtp from "./confirm-otp";

export default function CreateAccount() {
  const [confirmOtp, setSignupForm] = useState("signup-form");
  const handleSuccessfulSignup = (tab) => {
    setSignupForm(tab);
  };
  return (
    <div className="w-full h-auto font-poppins bg-banner bg-cover bg-no-repeat bg-center	flex flex-col items-end justify-center p-[100px]">
      <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
        <div className="flex items-center relative gap-x-16">
          <div className="flex flex-col w-[57px] text-center">
            <button
              onClick={() => handleSuccessfulSignup("signup-form")}
              className={`${
                confirmOtp !== "confirm-otp" ? "border-green-1" : "border-dark-1"
              } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
            >
              1
            </button>
            <p className="text-dark-1 text-[13px]">Create Account</p>
          </div>
          <div className="w-[65px] h-1 absolute border-b-2 border-dark-1 border-solid bottom-[65px] left-14" />
          <div className="flex flex-col w-[57px] text-center">
            <button
              onClick={() => handleSuccessfulSignup("confirm-otp")}
              className={`${
                confirmOtp === "confirm-otp" ? "border-green-1" : "border-dark-1"
              } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
            >
              2
            </button>
            <p className="text-dark-1 text-[13px]">Confirm OTP</p>
          </div>
        </div>
        {confirmOtp === "confirm-otp" ? <ConfirmOtp /> : <SignupForm />}
      </div>
    </div>
  );
}
