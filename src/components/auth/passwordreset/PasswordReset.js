import { useState } from "react";
import NewPassword from "./NewPassword";
import PasswordOtp from "./PasswordOtp";
import PasswordResetForm from "./PasswordResetForm";
import Success from "./Success";

export default function PasswordReset() {
  const [confirmOtp, setOtp] = useState("reset");
  const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setOtp("");
    setSuccess(true)
  }
  const handleConfirmOtp = () => {
    setOtp("confirm-otp");
  };
  const handleConfirmedOtp = () => {
    setOtp("confirmed-otp");
  };
  return (
    <div className="bg-banner w-full h-full font-poppins bg-cover bg-no-repeat bg-center flex flex-col items-end justify-center py-10 px-[100px]">
    <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
      {!success && <div className="flex items-center relative gap-x-16">
        <div className="flex flex-col w-[57px] text-center">
          <button
            className={`${
              confirmOtp === "reset"
                ? "border-green-1"
                : "border-dark-1"
            } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
          >
            1
          </button>
          <p className="text-dark-1 text-[13px]">Reset Password</p>
        </div>
        <div className="w-[65px] h-1 absolute border-b-2 border-dark-1 border-solid bottom-[65px] left-14" />
        <div className="flex flex-col w-[57px] text-center">
          <button
            className={`${
              confirmOtp === "confirm-otp"
                ? "border-green-1"
                : "border-dark-1"
            } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
          >
            2
          </button>
          <p className="text-dark-1 text-[13px]">Confirm OTP</p>
        </div>
        <div className="w-[65px] h-1 absolute border-b-2 border-dark-1 border-solid bottom-[65px] right-14" />
        <div className="flex flex-col w-[57px] text-center">
          <button
            className={`${
              confirmOtp === "confirmed-otp"
                ? "border-green-1"
                : "border-dark-1"
            } w-full h-[57px] flex items-center justify-center bg-grey-3 border-2 rounded-full border-solid text-dark-1 font-bold text-3xl`}
          >
            3
          </button>
          <p className="text-dark-1 text-[13px]">New Password</p>
        </div>
        </div>}
        {confirmOtp === "reset" && <PasswordResetForm handleConfirmOtp={handleConfirmOtp}/>}
        {confirmOtp === "confirm-otp" && <PasswordOtp handleConfirmedOtp={handleConfirmedOtp} />}
        {confirmOtp === "confirmed-otp" && <NewPassword handleSuccess={handleSuccess} />}
        {success && <Success/>}
      </div>
    </div>
  )
}