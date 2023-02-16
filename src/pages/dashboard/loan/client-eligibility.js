import React, { useEffect, useState } from "react";
import CustomerBasicDetails from "../../../components/shared/customer-basic-details";
import DashboardNav from "../../../components/shared/dashboard-nav";
import infoIcon from "../../../assets/images/exclamation-mark.svg";
import dollarIcon from "../../../assets/images/dollarIcon.svg";
import dtiIcon from "../../../assets/images/dti.svg";
import LoanStatistics from "../../../components/shared/loan-statistics";
import Button from "../../../components/shared/button";
import { useOutletContext } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getEligibilitySalary,
  updateLoanDetails,
} from "../../../app/features/thunk/loanThunk";
import "../../../styles/style.css";
import { useNavigate } from "react-router-dom";

const ClientEligibility = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [onboardingData, setOnboardingData] = useOutletContext();
  const {
    loanOnboardingData,
    eligibilitySalaryData,
    isUpdateLoanLoading,
    updatedLoanDetailsData,
  } = useSelector((state) => state.loan);
  const onboardingData = JSON.parse(localStorage.getItem("loanOnboardingData"));
  const maxAmount1 = eligibilitySalaryData?.data?.data?.MaxAmount1;
  const maxAmount2 = eligibilitySalaryData?.data?.data?.MaxAmount2;
  const maxAmount3 = eligibilitySalaryData?.data?.data?.MaxAmount3;

  console.log(
    eligibilitySalaryData?.data?.data,
    "eligibility data",
    onboardingData,
    maxAmount1,
    maxAmount2,
    maxAmount3
  );

  useEffect(() => {
    if (onboardingData) {
      dispatch(getEligibilitySalary(onboardingData.monthly_income));
    }
  }, []);

  useEffect(() => {
    setRange(maxAmount3);
  }, []);

  const [range, setRange] = useState(maxAmount3);
  const [period, setPeriod] = useState(3);
  const handleChange = (e) => {
    setRange(e.target.value);
  };
  const handleClick = (amount) => {
    setRange(amount);
  };

  const step = Math.round(
    (30 / 100) * onboardingData.monthly_income * 0.83 - 3
  );
  console.log(step);
  const periodPayload = () => {
    let period = 0;
    if (range === maxAmount1) {
      period = 1;
    } else if (range === maxAmount2) {
      period = 2;
    } else if (range === maxAmount3) {
      period = 3;
    }
    return period;
  };
  console.log(periodPayload());
  console.log(updatedLoanDetailsData);

  const payload = {
    period: periodPayload(),
    loan_amount: range,
  };

  const user_id = onboardingData.user_id;

  const handleSubmit = () => {
    dispatch(updateLoanDetails(payload));
    if (updatedLoanDetailsData.data) {
      navigate("/loan-application/payment-reschedule");
    }
  };

  const handleBackButton = () => {
    navigate(-1);
  };
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
          <p className="text-dark-1 text-lg font-semibold">Eligible Amount</p>
          <div className="w-full h-auto bg-green flex flex-col gap-y-1.5 p-10">
            <p>* Drag the line to your preffered loan amount</p>
            <div className="w-full flex justify-end items-center ">
              <label htmlFor="range" className="uppercase font-bold text-xl">
                mzn{range}
              </label>
            </div>
            <input
              type="range"
              id="range"
              // step={step}
              value={range}
              onChange={handleChange}
              className="w-full bg-green-1 h-3 appearance-none rounded-md"
              min={maxAmount1}
              max={maxAmount3}
            />
          </div>
        </div>
        <div>
          <p className="text-dark-1 text-lg font-semibold">Period</p>
          <div className="w-full bg-green h-auto p-10 flex items-center justify-between">
            <div className="flex items-center justify-center flex-col relative">
              <p>0 Month</p>
              <button
                type="button"
                className={`${
                  range < maxAmount1 ? "bg-green-1" : null
                } w-10 h-10 rounded-full border-[3px] border-solid border-green-1`}
                onClick={() => {
                  handleClick(0);
                }}
              />
              <div className="w-[270px] h-1 absolute border-b-4 border-grey-4 border-solid left-[52px] top-[42px]" />
            </div>
            <div className="flex items-center justify-center flex-col relative">
              <p>1 Month</p>
              <button
                type="button"
                className={`${
                  range === maxAmount1 ? "bg-green-1" : null
                } w-10 h-10 rounded-full border-[3px] border-solid border-green-1`}
                onClick={() => {
                  handleClick(maxAmount1);
                }}
              />
              <div className="w-[275px] h-1 absolute border-b-4 border-grey-4 border-solid left-[49.4px] top-[42px]" />
            </div>
            <div className="flex items-center justify-center flex-col relative">
              <p>2 Months</p>
              <button
                type="button"
                className={`${
                  range === maxAmount2 ? "bg-green-1" : null
                } w-10 h-10 rounded-full border-[3px] border-solid border-green-1`}
                onClick={() => {
                  handleClick(maxAmount2);
                }}
              />
              <div className="w-[280px] h-1 absolute border-b-4 border-grey-4 border-solid left-[56px] top-[42px]" />
            </div>
            <div className="flex items-center justify-center flex-col relative">
              <p>3 Months</p>
              <button
                type="button"
                className={`${
                  range === maxAmount3 ? "bg-green-1" : null
                } w-10 h-10 rounded-full border-[3px] border-solid border-green-1`}
                onClick={() => {
                  handleClick(maxAmount3);
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex items-center gap-x-4">
            <div className="w-200 h-62">
              {" "}
              <Button
                btnText="Get loan"
                btnType="submit"
                handleClick={handleSubmit}
                loading={isUpdateLoanLoading}
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
      </main>
      <div className="h-auto py-6 w-full rounded-5 bg-green flex flex-col items-center justify-center text-center gap-y-2">
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
