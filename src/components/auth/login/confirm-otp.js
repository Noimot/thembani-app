import React, { useState, useEffect } from "react";
import OTPInput from "otp-input-react";
import {
  postConfirmOtp,
  postLogin,
} from "../../../app/features/thunk/authThunk";
import { useDispatch } from "react-redux";
import { resendOtp } from "../../../services/requests/auth";

function ConfirmLoginOtp({ userDetails }) {
  const dispatch = useDispatch();
  const [OTP, setOTP] = useState("");

  const otpData = {
    email: userDetails.email,
    otp: OTP,
  };
  const handleConfirmOtp = () => {
    dispatch(postConfirmOtp(otpData));
  };

  const [counter, setcounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setcounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);
  // const handleResendOtp = () => {
  //   dispatch(postLogin(userDetails));
  // };

  const handleResendOtp = async () => {
    try {
      await resendOtp({ email: userDetails.email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="pt-8 pb-3 text-center font-semibold text-xl text-dark-1 ">
        Verify Phone Number
      </h3>
      <h3 className="text-sm text-dark-1 text-center">
        A Six digit code has been sent to your registered mobile number
      </h3>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        className="w-full mx-auto border-gray-100"
        style={{ border: "1px" }}
        inputStyles={{ innerHeight: "34px" }}
        inputClassName="mx-auto w-24 rounded border border-gray-300 text-center appearance-none"
      />

      <div className="w-full flex items-center justify-between px-3 text-[15px]">
        <button className="font-medium text-dark-1" onClick={handleResendOtp}>
          Resend OTP
        </button>
        <p className="font-light text-red-1">00:{counter}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-36 h-51 ">
          <button
            type="submit"
            className="w-full h-full rounded-[5px] text-white text-center bg-green-1 text-lg"
            onClick={handleConfirmOtp}
          >
            Confirm OTP
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmLoginOtp;
