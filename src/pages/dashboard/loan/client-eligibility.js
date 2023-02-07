import React from "react";
import CustomerBasicDetails from "../../../components/shared/customer-basic-details";
import DashboardNav from "../../../components/shared/dashboard-nav";

const ClientEligibility = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav
        heading="Loan Application"
        subHeading="Client eligibility"
      />
      <main>
        <CustomerBasicDetails />
        <div className="h-142 w-full bg-green">

        </div>
      </main>
    </div>
  );
};

export default ClientEligibility;
