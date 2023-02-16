import React from "react";
import cancelIcon from "../../assets/images/cancel-icon.svg";
import CustomerBasicDetails from "../../components/shared/customer-basic-details";
import DashboardNav from "../../components/shared/dashboard-nav";
import StatusUpdate from "../../components/shared/status-update";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-y-8 bg-white">
      <DashboardNav heading="Dashboard" subHeading="Client Eligibility" />
      <div className="w-full flex flex-col bg-white gap-y-6">
        <CustomerBasicDetails />
        <StatusUpdate
          text="Your application is pending review, feedback will be communicated
      within 24 hours. Thank you."
          className="bg-blue-1 border-2 border-solid border-blue-1"
        />
        <StatusUpdate
          text="Your application was declined due to some errors. View your
            notification poge to fix the error."
          className="bg-red-2"
        />
        <StatusUpdate
          text="Hooray! Your loan application has been approved and will be
            effective in the next 24 hours."
          className="bg-green-5"
        />
      </div>
    </div>
  );
};

export default Home;
