import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

function ConfirmOtp() {
    const [OTP, setOTP] = useState("");
    const [confirmOtp, setConfirmOtp] = useState(false)
    return (
        <div
            className="md:ml-auto bg-white rounded-md shadow p-6"
            style={{ width: 411, height: 603 }}
        >
            <div className="flex mx-auto justify-center items-center">
                <div
                    className="w-16 h-16 border-2 border-green-500 rounded-full flex justify-center items-center font-bold text-[30px]"
                    style={{ fontSize: 30, fontWeight: 700, backgroundColor: "#fcfcfc" }}
                >
                    1
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center">
                <div
                    className="w-16 h-16 flex justify-center items-center text-center"
                    style={{ fontSize: 13 }}
                >
                    Confirm OTP
                </div>
            </div>
            <h3 className="my-8 text-center font-bold" style={{ fontWeight: 700 }}>
                Verify Sign in
            </h3>
            <h3 className="my-8 text-center">
                A Six digit code hase been sent to your regitered mobile number
            </h3>
            <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                className="mx-auto border-gray-100"
                style={{ border: "1px" }}
                inputStyles={{ innerHeight: "34px" }}
                inputClassName="mx-auto w-24  mb-4 rounded border border-gray-300 p-3 text-center appearance-none"
            />
            <div className="flex items-center justify-between mt-6 px-3">
                <h3 className="font-semibold">Resend OTP</h3>
                <h3 id="countdown" className="text-red-500" />
            </div>
            <div className="flex items-center justify-center mt-8 px-3">
                <button
                    className="px-6 py-2 bg-green-500 text-white rounded"
                  

                >
                    <span>Confirm Otp</span>
                </button>
            </div>
        </div>
    );
}

export default ConfirmOtp;
