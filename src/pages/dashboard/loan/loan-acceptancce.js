import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";
import FormInput2 from "../../../components/shared/form-input2";
import SuccessPopup from "../../../components/shared/popup/SuccessPopup";
import successIcon from "../../../assets/images/success-icon.svg";
import { useSelector } from "react-redux";

const LoanAcceptancce = () => {
  const navigate = useNavigate();
  const [nuit, setNuit] = useState();
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    setNuit(event.target.value);
  };
  const { updatedLoanDetailsData, paymentScheduleData } = useSelector(
    (state) => state.loan
  );
  const onboardingData = JSON.parse(localStorage.getItem("loanOnboardingData"));
  const schedule = JSON.parse(paymentScheduleData.data.data.schedule);
  const loan = paymentScheduleData?.data?.data?.principal;
  const tenor = paymentScheduleData?.data?.data?.tenor;
  const repayment = schedule.Stat[0].MonthlyRepayment;


  const handleBackButton = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (termsAndConditions && nuit) {
      setShowModal(true);
    }
  };
  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };
  return (
    <>
      {showModal && (
        <SuccessPopup
          icon={successIcon}
          label="Congratulations!"
          message="Your application has been succesfully submitted & undergoing review. Feedback will be communicated within 24 hours."
          handleClose={handleClose}
          btnText="Okay"
        />
      )}
      <div className="w-full flex flex-col bg-white gap-y-8">
        <DashboardNav heading="Loan Application" subHeading="Loan Acceptance" />
        <main className="py-7 px-8 bg-green flex flex-col gap-y-4">
          <div className="h-auto py-[34px] px-[19px] w-full bg-white border-2 border-blue-3 border-solid rounded-5 flex flex-col gap-y-8 text-dark-1">
            <p>
              You are requesting for a loan of MZN{loan} for {tenor}months. Monthly
              repayment will be MZN{repayment} and will be deducted from source
              commencing from your next salary.
            </p>
            <p>
              An insurance will also be taken on the loan against loss of Job,
              permanent disability and death and the premium will be borne by
              you and deducted from the loan sum. Please input your Sistaf
              number to accept By inputting your SIstaf number, I accept the
              terms and conditions of the loan and authorize TAG to deduct loan
              repayment at salary source through my Sistaf number.
            </p>
          </div>
          <div className="w-1/2">
            <FormInput2
              type="text"
              name="nuit"
              placeholder="Input NUIT Number for loan acceptance"
              onChange={handleChange}
              value={nuit}
            />
          </div>
          <div className="flex items-center gap-x-6">
            <input
              id="checkbox"
              type="checkbox"
              name={termsAndConditions}
              checked={termsAndConditions}
              onChange={() => setTermsAndConditions(!termsAndConditions)}
            />
            <label htmlFor="checkbox">
              Click to accept{" "}
              <a
                href="https://res.cloudinary.com/noimot/image/upload/v1676632314/TERMOS_E_CONDI%C3%87%C3%95ES_ejbhry.pdf"
                target="_blank"
                className="font-bold"
              >
                terms and conditions
              </a>
            </label>
          </div>
        </main>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center gap-x-4">
            <div className="w-200 h-62">
              {" "}
              <Button
                btnText="Accept"
                btnType="button"
                disabled={!(nuit && termsAndConditions)}
                className="disabled:opacity-70 disabled:cursor-not-allowed"
                handleClick={handleSubmit}
              />
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
      </div>
    </>
  );
};

export default LoanAcceptancce;
