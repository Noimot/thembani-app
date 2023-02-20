import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

const CustomerBasicDetails = () => {
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const onboardingData = JSON.parse(localStorage.getItem("onboardingData"));

  const { userDetailsData } = useSelector((state) => state.auth);
  const cbn = userDetailsData?.data?.data?.cbn;
  const profile = userDetailsData?.data?.data?.profile;
  console.log(userDetailsData, onboardingData)
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
          {cbn?.client_name}
        </h2>
        <div className="text-dark-1 font-base pt-3">
          <p>
            <span className="w-109 inline-block">Employee No</span>{" "}
            <span>: {profile?.client_numr}</span>
          </p>
          <p>
            <span className="w-109 inline-block">NUIT No</span>{" "}
            <span>: {profile?.client_nuit}</span>
          </p>
          <p>
            <span className="w-109 inline-block">Account No</span>{" "}
            <span>: {cbn?.account_number}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerBasicDetails;
