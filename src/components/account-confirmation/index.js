import React from "react";
import { SuccessIcon } from "../icons/success-icon";
import Button from "../shared/button";
import successIcon from "../../assets/images/success-icon.svg";
import { Link } from "react-router-dom";

const AccountConfirmationPage = () => {
  return (
    <div className="w-full h-full font-poppins bg-banner bg-cover bg-no-repeat bg-center	flex flex-col items-end justify-center p-[100px]">
      <div className="w-411 h-auto rounded-[14px] shadow-3xl flex flex-col justify-center items-center bg-white gap-y-8 py-9 px-[22px]">
        <div>
          <img src={successIcon} alt="" />
        </div>
        <div className="flex flex-col text-center gap-y-2 pb-16">
          <h1 className="font-bold font-black text-27 capitalize">
            Congratulations
          </h1>
          <p className="capitalize text-sm text-black">
            Account setup successful
          </p>
        </div>
        <div className="w-[367px] h-51">
          <Link to="/instruction">
            <Button btnText="Sign in" btnType="button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountConfirmationPage;
