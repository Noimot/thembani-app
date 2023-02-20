import { Form, Formik } from "formik";
import React, { useRef, useEffect } from "react";
import FormInput from "../../../components/shared/form-input";
import FormSelect from "../../../components/shared/form-select";
import TextArea from "../../../components/shared/text-area";
import backArrow from "../../../assets/images/arrow-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../app/features/slice/tokenSlice";
import { postGenerateNuit } from "../../../app/features/slice/generateNuitSlice";
import * as Yup from "yup";
import DashboardNav from "../../../components/shared/dashboard-nav";
import ImageUpload from "../../../components/shared/input-file";
import Button from "../../../components/shared/button";
import { postLoanOnboarding } from "../../../app/features/thunk/loanThunk";
import { useNavigate } from "react-router-dom";

const LoanOnboarding = () => {
  let ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loanOnboardingData, isLoading } = useSelector((state) => state.loan);
  const customerData = JSON.parse(localStorage.getItem("onboardingData"));
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
console.log(customerData)
  useEffect(() => {
    if (loanOnboardingData?.data) {
      navigate(`/loan-application/client-eligibility`);
    }
  }, [loanOnboardingData?.data]);

  const initialValues = {
    first_name: customerData?.first_name || "",
    middle_name: customerData?.middle_name || "",
    last_name: customerData?.last_name || "",
    dob: customerData?.date_of_birth || "",
    gender: customerData?.gender || "",
    father_name: customerData?.mothers_name || "",
    mother_name: customerData?.fathers_name || "",
    fathers_address: customerData?.mothers_address || "",
    mothers_address: customerData?.fathers_address || "",
    identity_type: customerData?.identity_type || "",
    identity_number: customerData?.identity_number || "",
    email: customerData?.email || "",
    address: customerData?.address || "",
    client_local: customerData?.client_local || "",
    phone_number: customerData?.client_no || "",
    user_id: userProfile?.id,
    company_name: "",
    company_address: "",
    company_phone: "",
    ministry: "",
    employee_number: "",
    monthly_income: "",
    bank_name: "",
    account_holder: "",
    account_number: "",
    pay_date: "",
    nib_number: "",
  };

  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav
        heading="Loan Application"
        subHeading="Customer Onboarding"
      />
      <main className="py-2 px-8 bg-green">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            first_name: Yup.string().required("First name is required"),
            middle_name: Yup.string().required("Middle name is required"),
            last_name: Yup.string().required("Last name is required"),
            dob: Yup.string().required("Date of birth is required"),
            gender: Yup.string().required("Gender is required"),
            father_name: Yup.string().required("Fathers name is required"),
            mother_name: Yup.string().required("Mothers name is required"),
            identity_type: Yup.string().required("Identity type is required"),
            identity_number: Yup.string().required(
              "Identity number is required"
            ),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            address: Yup.string().required("Address is required"),
            phone_number: Yup.string().required("phone number is required"),
            fathers_address: Yup.string().required(
              "Fathers address is required"
            ),
            mothers_address: Yup.string().required(
              "Mothers address is required"
            ),
            company_address: Yup.string().required(
              "Companys address is required"
            ),
            company_name: Yup.string().required("Company's name is required"),
            company_phone: Yup.string().required(
              "Company's phone number is required"
            ),
            ministry: Yup.string().required("Ministry is required"),
            employee_number: Yup.string().required(
              "Employee number is required"
            ),
            monthly_income: Yup.string().required("Monthly income is required"),
            bank_name: Yup.string().required("Bank name is required"),
            account_holder: Yup.string().required("Account holder is required"),
            account_number: Yup.string().required("Account number is required"),
            pay_date: Yup.string().required("Payment due date is required"),
            nib_number: Yup.string().required("Nib number is required"),
          })}
          onSubmit={(values) => {
            dispatch(postLoanOnboarding(values));
          }}
        >
          {({ setFieldValue, handleChange, values }) => (
            <Form onChange={handleChange}>
              <section>
                <h3 className="pb-3 capitalize text-dark-3 text-base">
                  personal information
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                    />
                    <FormInput
                      type="text"
                      name="middle_name"
                      placeholder="Middle Name"
                    />
                    <FormInput
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="w-1/2">
                      <FormSelect name="gender" required>
                        <option value="" className="text-sm text-dark-3">
                          Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </FormSelect>
                    </div>
                    <div className="flex flex-col relative w-1/2">
                      <span className="absolute pl-4 text-xs text-dark-1">
                        Date of Birth
                      </span>
                      <FormInput
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="identity_number"
                      placeholder="National Id Number"
                    />
                    <FormInput
                      type="text"
                      name="identity_type"
                      placeholder="Means of Identification"
                    />
                    <FormSelect name="marital_status" required>
                      <option value="">Marital Status</option>
                      <option value="married">Married</option>
                      <option value="Single">Single</option>
                    </FormSelect>
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <div className="flex flex-[0.5] items-center gap-x-3.5">
                      {/* <div className="w-1/4">
                        <FormSelect name="client_no_code" required>
                          <option value="">+234</option>
                          <option value="+234">+234</option>
                        </FormSelect>
                      </div> */}
                      <FormInput
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="flex-[0.5]">
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="">
                    <TextArea
                      name="address"
                      placeholder="Residentail Address"
                      required
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Employer Details
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="company_name"
                      placeholder="Company name"
                      employer
                    />
                    <FormInput
                      type="text"
                      name="company_phone"
                      placeholder="Phone Number"
                      employer
                    />
                  </div>
                  <div className="w-full">
                    <TextArea
                      name="company_address"
                      placeholder="Company address"
                      employer
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormSelect name="ministry" employer>
                      <option
                        value=""
                        className="text-sm text-dark-3"
                        defaultValue
                      >
                        Ministry
                      </option>
                      <option
                        value="information"
                        className="text-sm text-dark-3"
                      >
                        Information
                      </option>
                      <option
                        value="marketing value"
                        className="text-sm text-dark-3"
                      >
                        Marketing
                      </option>
                    </FormSelect>
                    <FormInput
                      type="text"
                      name="employee_number"
                      placeholder="Employee Number"
                      employer
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Next of Kin (Mother)
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <FormInput
                    type="text"
                    name="mother_name"
                    placeholder="Full Name"
                  />
                  <TextArea name="mothers_address" placeholder="Address" />
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Next of Kin (Father)
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <FormInput
                    type="text"
                    name="father_name"
                    placeholder="Full Name"
                  />
                  <TextArea
                    name="fathers_address"
                    placeholder="Address"
                    required
                  />
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Salary Information
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  <div className="w-full">
                    <FormInput
                      type="text"
                      name="monthly_income"
                      placeholder="Monthly Income"
                      employer
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormSelect name="bank_name" employer>
                      <option value="">Bank</option>
                      <option value="access">Access bank</option>
                      <option value="stanbic">Stanbic Ibtc Bank</option>
                    </FormSelect>
                    <FormInput
                      type="text"
                      name="account_holder"
                      placeholder="Account Holder"
                      employer
                    />
                    <FormInput
                      type="text"
                      name="account_number"
                      placeholder="Account Number"
                      employer
                    />
                  </div>
                  <div className="w-full flex items-center gap-x-3.5">
                    <div className="flex flex-col relative w-1/2">
                      <span className="absolute pl-4 text-xs text-dark-1">
                        Salary Payment Due Date
                      </span>
                      <FormInput
                        type="date"
                        name="pay_date"
                        placeholder="Salary Payment Date"
                        employer
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        type="text"
                        name="nib_number"
                        placeholder="Nib Number"
                        employer
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex items-center gap-x-4 pt-5">
                <div className="w-200 h-62">
                  <Button
                    btnText="Submit"
                    btnType="submit"
                    loading={isLoading}
                  />
                </div>
                <div className="w-200 h-62">
                  <Button
                    btnText="Cancel"
                    btnType="button"
                    className="bg-red-3"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default LoanOnboarding;
