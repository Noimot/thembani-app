import React from "react";
import CustomerBasicDetails from "../../../components/shared/customer-basic-details";
import DashboardNav from "../../../components/shared/dashboard-nav";
import infoIcon from "../../../assets/images/exclamation-mark.svg";
import dollarIcon from "../../../assets/images/dollarIcon.svg";
import dtiIcon from "../../../assets/images/dti.svg";
import LoanStatistics from "../../../components/shared/loan-statistics";
import Button from "../../../components/shared/button";

const ClientEligibility = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav
        heading="Loan Application"
        subHeading="Client eligibility"
      />
      <main className="flex flex-col gap-y-5">
        <CustomerBasicDetails />
        <div className="w-full bg-green pl-29 py-19">
          {/* <div className="flex flex-col gap-y-5 w-1/3 justify-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 rounded-10 shadow-5xl bg-orange-1 flex items-center justify-center">
                  <img src={dollarIcon} alt="" />
                </div>
                <p className="text-dark-4">Eligible Amount</p>
              </div>
              <p className="text-dark-1">MZN 98 888</p>
            </div>
            <div className="border-t w-full border-solid border-grey-6" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 rounded-10 shadow-5xl bg-yellow-1 flex items-center justify-center">
                  <img src={dtiIcon} alt="" />
                </div>
                <p className="text-dark-4">DTI</p>
              </div>
              <p className="text-dark-1">33.3%</p>
            </div>
          </div> */}
          <LoanStatistics
            icon={dollarIcon}
            text="Eligible Amount"
            amount="MZN 98 888"
            icon2={dtiIcon}
            text2="DTI"
            amount2="33.3%"
          />
        </div>
        <div>
          <p className="text-dark-1 text-lg font-semibold pl-6">Eligible Amount</p>
          <div className="w-full bg-green h-74 pt-2"></div>
        </div>
        <div>
          <p className="text-dark-1 text-lg font-semibold pl-6">Period</p>
          <div className="w-full bg-green h-74 pt-2"></div>
        </div>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center gap-x-4">
            <div className="w-200 h-62">
              {" "}
              <Button btnText="Get loan" btnType="submit" />
            </div>
            <div className="w-200 h-62">
              <Button btnText="Back" btnType="button" className="bg-grey-7" />
            </div>
          </div>
          <div className="w-200 h-62">
            <Button btnText="Cancel" btnType="button" className="bg-red-2" />
          </div>
        </div>
      </main>
      <div className="h-220 w-full rounded-5 bg-green flex flex-col items-center justify-center text-center gap-y-2">
        <img src={infoIcon} alt="" />
        <p className="text-dark-1 text-4xl">
          Sorry, you don’t qualify for another loan at the moment, please try
          again in a few months.
        </p>
      </div>
    </div>
  );
};

export default ClientEligibility;
