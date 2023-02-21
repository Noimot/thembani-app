import React, { useEffect } from "react";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import CustomerBasicDetails from "../../components/shared/customer-basic-details";
import DashboardNav from "../../components/shared/dashboard-nav";
import StatusUpdate from "../../components/shared/status-update";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../app/features/thunk/authThunk";
import LoanStats from "./LoanStats";

const Home = () => {
  const { statusData } = useSelector((state) => state.loan);
console.log(statusData, 'status data');
const status = statusData?.data?.Desc;
const loanStatus = statusData?.data["Loan Status"];
  return (
    <div className="w-full flex flex-col gap-y-8 bg-white">
      <DashboardNav heading="Dashboard" subHeading="Client Eligibility" />
      <div className="w-full flex flex-col bg-white gap-y-6">
        <CustomerBasicDetails />
        {statusData?.data && <StatusUpdate
          text={`${status ? `${status}, feedback will be communicated ithin 24 hours. Thank you.`: loanStatus !== "Rejected" ? loanStatus : null}`} 
          className="bg-blue-1 border-2 border-solid border-blue-1"
        />}
        {loanStatus === "Rejected" && <StatusUpdate
          text="Your application was declined due to some errors. View your
            notification poge to fix the error."
          className="bg-red-2"
        />}
        {/* <StatusUpdate
          text="Hooray! Your loan application has been approved and will be
            effective in the next 24 hours."
          className="bg-green-5"
        />  */}
        {loanStatus === "Disbursed" &&<LoanStats />}
      </div>
    </div>
  );
};

export default Home;
