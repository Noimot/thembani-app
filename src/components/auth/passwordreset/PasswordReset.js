import { useState } from "react";
import { useSelector } from "react-redux";
import PasswordResetForm from "./PasswordResetForm";
import Success from "./Success";

export default function PasswordReset() {
  const { resetPasswordData } = useSelector(
    (state) => state.auth
  );
  return (
    <div className="bg-banner w-full h-[calc(100vh-100px)] font-poppins bg-cover bg-no-repeat bg-center flex flex-col items-end justify-center py-10 px-[100px]">
    <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
      {!resetPasswordData.success && <div className="flex items-center relative gap-x-16">
        <h1>Reset Password</h1>
        </div>}
        {!resetPasswordData.success && <PasswordResetForm/>}
        {resetPasswordData.success && <Success/>}
      </div>
    </div>
  )
}