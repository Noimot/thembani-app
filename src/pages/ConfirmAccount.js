import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import Success from "../assets/img/check.png"
import ConfirmOtp from "../sections/Register/ConfirmOtp";
import RegisterAuth from "../sections/Register/RegisterAuth";

function ConfirmAccount() {
  const [confirmOtp, setConfirmOtp] = useState(false);

  const handleOtp = (val) => {
    setConfirmOtp(true);
  };
  return (
    <div>
      <div
        class="w-full"
        style={{
          backgroundImage: "url('/banner.svg')",
          backgroundPosition: "center",
          backgrounrRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
        }}
      >
        <div class="w-full h-[102px] px-6 flex shadow-md justify-between items-center bg-white">
          <img src="./logo.png" alt="logo" class="block h-24 w-auto" />
        </div>
        <div class="w-full px-8 md:px-20 block items-center py-8">
          <div
            className="md:ml-auto bg-white rounded-md shadow p-6 pt-20"
            style={{ width: 411, height: 603 }}
          >
            <div className="flex mx-auto justify-center items-center">
              <img src={Success} alt="success" />
            </div>
            <h3 className="mt-8 mb-3 text-center font-bold text-2xl">
              Congratulations
            </h3>
            <h3 className="text-center">Account Set Up Successful</h3>
      
            <a
              href="./instructions"
              className="w-full rounded mt-24 flex items-center justify-center bg-green-500 text-lg text-white"
              style={{ height: 51 }}
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAccount;
