import React, { useEffect } from "react";
import DashboardNav from "../../../components/shared/dashboard-nav";
import LoanStatistics from "../../../components/shared/loan-statistics";
import dollarIcon from "../../../assets/images/dollarIcon.svg";
import rateIcon from "../../../assets/images/rateIcon.svg";
import calenderIcon from "../../../assets/images/calenderIcon.svg";
import LoanData from "../../../components/Loan/LoanData";
import Button from "../../../components/shared/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentSchedule } from "../../../app/features/thunk/loanThunk";

const PaymentReschedule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { updatedLoanDetailsData, paymentScheduleData } = useSelector(
    (state) => state.loan
  );

  const handleSubmit = () => {
    navigate("/loan-application/kyc-upload")
  }
  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getPaymentSchedule());
  }, []);

  const schedule =
    paymentScheduleData?.data &&
    JSON.parse(paymentScheduleData?.data?.data?.schedule);
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
            amount={`MZN ${
              paymentScheduleData?.data &&
              paymentScheduleData?.data?.data?.principal
            }`}
            icon2={rateIcon}
            text2="Annual Rate"
            amount2="33.3%"
            icon3={calenderIcon}
            text3="Period"
            amount3={`${
              paymentScheduleData?.data && paymentScheduleData?.data?.data?.tenor
            }M`}
          />
        </div>
        <div>
          <LoanData
            LoanDetailsData={schedule?.Stat}
            principal={
              paymentScheduleData?.data &&
              paymentScheduleData?.data?.data?.principal
            }
          />
        </div>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center gap-x-4">
            <div className="w-200 h-62">
              {" "}
              <Button btnText="Proceed" btnType="submit"  handleClick={handleSubmit}/>
            </div>
            <div className="w-200 h-62">
              <Button
                btnText="Back"
                btnType="button"
                className="bg-grey-7"
                handleClick={handleBackButton}
              />
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
