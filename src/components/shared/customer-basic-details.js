import React from "react";
import { useSelector } from "react-redux";

const CustomerBasicDetails = () => {
  const { profileData } = useSelector((state) => state.userProfile);
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  return (
    <div className="h-auto py-6 w-full bg-green rounded-11 flex items-center pl-16 gap-x-189">
      <div className="w-149 h-149 rounded-full bg-red-50">
        <img src="" alt="" />
      </div>
      <div>
        <h1 className="leading-10 text-xl font-semibold text-dark-1">
          Hello, Welcome
        </h1>
        <h2 className="leading-10 font-semibold text-4xl text-green-1">
          {userProfile?.profile?.client_nome}
        </h2>
        <div className="text-dark-1 font-base pt-3">
          <p>
            <span className="w-109 inline-block">Employee No</span>{" "}
            <span>: 8372772772727</span>
          </p>
          <p>
            <span className="w-109 inline-block">NUIT No</span>{" "}
            <span>: {userProfile?.profile?.client_nuit}</span>
          </p>
          <p>
            <span className="w-109 inline-block">Account No</span>{" "}
            <span>: 8888888</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerBasicDetails;
