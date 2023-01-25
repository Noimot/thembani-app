import React, {useState} from "react";
import Header from "../../header";
import { LoginLogo } from "../../icons/login-logo";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import FormInput from "../../shared/form-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginForm from "./login-form";
import ConfirmLoginOtp from "./confirm-otp";

export default function LoginAuth() {
  const [otp, setOtp] = useState(true);
//   const handleSuccessfulSignup = (tab) => {
//     setSignupForm(tab);
//   };
  return (
    <div className="w-full h-[calc(100vh-67px)] bg-banner bg-cover bg-no-repeat bg-center	flex flex-col items-end justify-center pr-[100px]">
      <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
        {otp ? (
          <div className="flex flex-col w-[57px] text-center">
            <button
              className={`${
                otp
                  ? "border-green-1"
                  : "border-dark-1"
              } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
            >
              1
            </button>
            <p className="text-dark-1 text-[13px]">Confirm OTP</p>
          </div>
        ) : (
          <div>
            <img src="password.svg" alt="" />
          </div>
        )}
        {otp ? <ConfirmLoginOtp /> : <LoginForm />}
      </div>
    </div>
  );
}
