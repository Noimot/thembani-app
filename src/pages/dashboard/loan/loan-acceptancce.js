import React from "react";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";
import FormInput2 from "../../../components/shared/form-input2";

const LoanAcceptancce = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Loan Application" subHeading="Loan Acceptance" />
      <main className="py-7 px-8 bg-green flex flex-col gap-y-4">
        <div className="h-234 w-full bg-white border-2 border-blue-3 border-solid rounded-5"></div>
        <div className="w-1/2">
          <FormInput2
            type="text"
            name="name"
            placeholder="Input NUIT Number for loan acceptance"
          />
        </div>
      </main>
      <div className="w-full flex items-center justify-between pt-4">
        <div className="flex items-center gap-x-4">
          <div className="w-200 h-62">
            {" "}
            <Button btnText="Accept" btnType="submit" />
          </div>
          <div className="w-200 h-62">
            <Button btnText="Back" btnType="button" className="bg-grey-7" />
          </div>
        </div>
        <div className="w-200 h-62">
          <Button btnText="Cancel" btnType="button" className="bg-red-2" />
        </div>
      </div>
    </div>
  );
};

export default LoanAcceptancce;
