import React from "react";
import DashboardNav from "../../../components/shared/dashboard-nav";
import LoanStatistics from "../../../components/shared/loan-statistics";
import dollarIcon from "../../../assets/images/dollarIcon.svg";
import rateIcon from "../../../assets/images/rateIcon.svg";
import calenderIcon from "../../../assets/images/calenderIcon.svg";
import LoanData from "../../../components/Loan/LoanData";
import Button from "../../../components/shared/button";

const PaymentReschedule = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav
        heading="Loan Application"
        subHeading="Payment Reschedule"
      />
      <main className="w-full flex flex-col gap-y-5">
        <div className="w-full bg-green pl-29 py-19">
          <LoanStatistics
            icon={dollarIcon}
            text="Borrowed Principal"
            amount="MZN 98 888"
            icon2={rateIcon}
            text2="Annual Rate"
            amount2="33.3%"
            icon3={calenderIcon}
            text3="Period"
            amount3="24M"
          />
        </div>
        <div>
        <LoanData/>
        </div>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center gap-x-4">
            <div className="w-200 h-62">
              {" "}
              <Button btnText="Proceed" btnType="submit" />
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
    </div>
  );
};

export default PaymentReschedule;
