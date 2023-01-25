import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import { confirmOtpsign } from "../../../services/requests/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


function ConfirmOtp() {
//   const history = useHistory()
  const [OTP, setOTP] = useState("");
 // const [confirmOtp, setConfirmOtp] = useState(false);

//  const handleconfirmOtp = () => {
//   const email =  localStorage.getItem("userEmail")
//       const data = {
//         email:email,
//         otp:OTP
//       }
//        confirmOtpsign(data).then((res) => {
//             console.log(res.data);
//             localStorage.setItem("Thembani-TKN-auth", res.data.data.token)
//             localStorage.setItem("userProfile", JSON.stringify(res.data.data.data))
//             toast.success("Otp confirmed")
//             history.replace("/confirm-account")
//        }).catch((err) => {
//         console.log(err)
//             toast.error("something went wrong! please try again")
//        })
//      // history.replace("/confirm-account")
//  }
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
   
      <div
        className="w-full flex items-center justify-between px-3 text-[15px]"
      >
        <button className="font-medium text-dark-1">Resend OTP</button>
        <p className="font-light text-red-1">time</p>
      </div>
      {/* <div className="flex items-center justify-center gap-3 mt-8 px-3">
        <button
        //   onClick={() => handleconfirmOtp()}
          className="px-6 py-2 bg-green-500 text-white rounded"
        >
          <span >Confirm Otp</span>
        </button>
      </div> */}
      <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-3 text-sm">
              <p className="text-grey-2">Already have an account?</p>
              <Link to="/login" className="text-green-1">
                Sign in
              </Link>
            </div>
            <div className="w-[94px] h-51 ">
              <button
                type="submit"
                className="w-full h-full rounded-[5px] text-white text-center bg-green-1 text-lg"
              >
                Verify
              </button>
            </div>
          </div>
    </>
  );
}

export default ConfirmOtp;
