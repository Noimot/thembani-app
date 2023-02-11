import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import FormInput from "../../../components/shared/form-input";
import FormSelect from "../../../components/shared/form-select";
import TextArea from "../../../components/shared/text-area";
import backArrow from "../../../assets/images/arrow-black.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getToken } from "../../../app/features/slice/tokenSlice";
import { postGenerateNuit } from "../../../app/features/slice/generateNuitSlice";
import Yup from "yup";
import DashboardNav from "../../../components/shared/dashboard-nav";
import ImageUpload from "../../../components/shared/input-file";
import Button from "../../../components/shared/button";

const LoanOnboarding = () => {
  const { tokenData, isLoading, isSuccess, isError } = useSelector(
    (state) => state.token
  );
  const dispatch = useDispatch();
  const payload = {
    name: "Thembani",
    email: "esmilda.dombo@thembaniafrica.com",
    password: "Fintech123*",
    APIKEY: "OTNUSEVNQkFOSSBBRlJJQ0EyOS8wNy8yMDIyIDE4OjA1OjEy",
  };
  // useEffect(() => {
  //   dispatch(getToken(payload));
  // }, []);
  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    fathers_name: "",
    mothers_name: "",
    identity_type: "",
    identity_number: "",
    email: "",
    address: "",
    client_nuit: "",
    client_local: "",
    // client_imgf: "",
    // client_imgb: "",
    selfie: "",
    user_id: 2,
    client_number: "",
  };
  const [imgb, setImgb] = useState();
  const handleFileChangeb = (event) => {
    console.log(event.target.files[0], "imgb");
    setImgb(event.target.files[0]);
  };
  const [imgf, setImgf] = useState();

  const handleFileChangef = (event) => {
    console.log(event.target.files[0], "imgf");
    setImgf(event.target.files[0]);
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
          onSubmit={(values) => {
            let formData = new FormData();
            // formData.append("client_imgf", values.client_images.client_imgf);
            // formData.append("client-imgb", values.client_images.client_imgf);
            const data = {
              messageID: "0000000000011092093",
              token: tokenData.data.value,
              client_name: `${values.first_name} ${values.middle_name} ${values.last_name}`,
              date_of_birth: values.date_of_birth,
              gender: values.gender,
              fathers_name: values.fathers_name,
              mothers_name: values.mothers_name,
              identity_type: values.identity_type,
              identity_number: values.identity_number,
              email: values.email,
              address: values.address,
              client_nuit: values.client_nuit,
              client_local: values.client_local,
              client_imgf: imgf,
              client_imgb: imgb,
              selfie: values.selfie,
              user_id: 2,
              client_number: values.client_number,
              // formData
            };
            formData.append("client_imgf", imgf);
            formData.append("client-imgb", imgb);
            formData.append("messageID", "0000000000011092093");
            formData.append("token", tokenData.data.value);
            formData.append(
              "client_name",
              `${values.first_name} ${values.middle_name} ${values.last_name}`
            );
            formData.append("date_of_birth", values.date_of_birth);
            formData.append("gender", values.gender);
            formData.append("fathers_name", values.fathers_name);
            formData.append("mothers_name", values.mothers_name);
            formData.append("identity_type", values.identity_type);
            formData.append("identity_number", values.identity_number);
            formData.append("email", values.email);
            formData.append("address", values.address);
            formData.append("client_nuit", values.client_nuit);
            formData.append("client_local", values.client_local);
            formData.append("client_imgf", values.client_imgf);
            formData.append("client_imgb", values.client_imgb);
            formData.append("selfie", values.selfie);
            formData.append("user_id", 2);
            formData.append("client_number", values.client_number);

            dispatch(postGenerateNuit(formData));
            console.log(values);
          }}
        >
          {({ setFieldValue, handleChange }) => (
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
                    <FormSelect name="gender" required>
                      <option value="" className="text-sm text-dark-3">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </FormSelect>
                    <FormInput
                      type="date"
                      name="date_of_birth"
                      placeholder="Date of Birth"
                    />
                    <FormInput
                      type="text"
                      name="employee_number"
                      placeholder="Employee Number"
                    />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormInput
                      type="text"
                      name="identity_number"
                      placeholder="National Id Number"
                    />
                    <FormInput
                      type="text"
                      name="means_of_identification"
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
                      <div className="w-1/4">
                        <FormSelect name="number" required>
                          <option value="">+234</option>
                          <option value="+234">+234</option>
                        </FormSelect>
                      </div>
                      <div className="w-3/4">
                        <FormInput
                          type="text"
                          name="client_number"
                          placeholder="Cellphone Number"
                        />
                      </div>
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
                  <div className="flex items-center gap-x-3.5">
                    <div className="w-1/3">
                      <FormSelect name="status" required>
                        <option value="">Residential Status</option>
                      </FormSelect>
                    </div>
                    <div className="w-1/3">
                      <FormInput
                        type="text"
                        name="client_local"
                        placeholder="Local Code"
                      />
                    </div>
                    <div className="w-1/3">
                      <FormInput
                        type="text"
                        name="client_local"
                        placeholder="Local Code"
                      />
                    </div>
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
                      name="name"
                      placeholder="Name"
                      employer
                    />
                    <FormInput
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      employer
                    />
                  </div>
                  <div className="w-full">
                    <TextArea name="address" placeholder="Address" employer />
                  </div>
                  <div className="flex items-center gap-x-3.5">
                    <FormSelect name="ministry" employer>
                      <option value="" className="text-sm text-dark-3">
                        Ministry
                      </option>
                    </FormSelect>
                    <FormInput
                      type="text"
                      name="eployee_number"
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
                    name="mothers_name"
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
                    name="fathers_name"
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
                    <FormSelect name="bank" employer>
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
                  <div className="w-full">
                    <FormInput
                      type="text"
                      name="salary-payment_date"
                      placeholder="Salary Payment Date"
                      employer
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3 className="py-3 capitalize text-dark-3 text-base">
                  Identification Document
                </h3>
                <div className="flex items-center gap-x-2">
                  <span>
                    <img src={backArrow} alt="" />
                  </span>
                  <p className="text-sm text-dark-1">
                    Please take a photo of the front and back of your
                    identification document
                  </p>
                </div>
                  <div className="w-full flex items-center gap-x-3.5 pt-4">
                    <ImageUpload
                      label="(BI Front)"
                      name="client_imgf"
                      onChange={(event) => {
                        handleFileChangef(event);
                      }}
                    />
                    <ImageUpload
                      label="(BI Back)"
                      name="client_imgb"
                      onChange={(event) => {
                        handleFileChangeb(event);
                      }}
                    />
                  </div>
              </section>
              <div className="flex items-center gap-x-4 pt-5">
                <div className="w-200 h-62">
                  <Button btnText="Submit" btnType="submit" />
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
