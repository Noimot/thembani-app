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
import { getMessageId } from "../../../app/features/slice/messageIdSlice";
import Selfie from "../../../components/shared/selfie";
import * as Yup from "yup";
import DashboardNav from "../../../components/shared/dashboard-nav";
import ImageUpload from "../../../components/shared/input-file";
import Button from "../../../components/shared/button";
import { getMessageIdApi } from "../../../services/requests/loan";
import { postUserProfile } from "../../../app/features/slice/userProfileSlice";
import { useOutletContext } from "react-router";
import { useNavigate } from "react-router-dom";

const CustomerOnboarding = () => {
  const navigate = useNavigate();
  const { tokenData } = useSelector((state) => state.token);
  const { nuitData, nuitLoading } = useSelector((state) => state.generateNuit);
  const { messageIdData } = useSelector((state) => state.messageId);
  const { profileData } = useSelector((state) => state.userProfile);
  const { otpData } = useSelector((state) => state.auth);
  const [onboardingData, setOnboardingData] = useOutletContext();

  console.log(profileData);
  const dispatch = useDispatch();
  const payload = {
    // name: "Thembani",
    // email: "esmilda.dombo@thembaniafrica.com",
    // password: "Fintech123*",
    // APIKEY: "OTNUSEVNQkFOSSBBRlJJQ0EyOS8wNy8yMDIyIDE4OjA1OjEy",
  };
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  useEffect(() => {
    dispatch(getToken(payload));
  }, []);

  useEffect(() => {
    if (nuitData && nuitData.length !== 0) {
      dispatch(getMessageId());
    }
  }, [nuitData]);

  useEffect(() => {
    if (messageIdData.success) {
      const userProfileData = JSON.parse(messageIdData.data);
      const profilePayload = {
        user_id: userProfile.id,
        client_nide: userProfileData.clie_nide,
        client_nome: userProfileData.clie_nome,
        client_nuib: userProfileData.clie_nuib,
        client_nuit: userProfileData.clie_nuit,
        client_numr: userProfileData.clie_numr,
        client_tipd: userProfileData.clie_tipd,
      };
      dispatch(postUserProfile(profilePayload));
    }
  }, [messageIdData]);

  useEffect(() => {
    if (profileData.success) {
      navigate(`/loan-application/customer-onboarding`);
    }
  }, [profileData.success]);

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
    client_imgf: "",
    client_imgb: "",
    selfie: "",
    user_id: "",
    // client_number: "",
    client_no_code: "",
    client_no: "",
  };
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Dashboard" subHeading="Client eligibility" />
      <main className="">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            first_name: Yup.string().required("First name is required"),
            middle_name: Yup.string().required("Middle name is required"),
            last_name: Yup.string().required("Last name is required"),
            date_of_birth: Yup.string().required("Date of birth is required"),
            gender: Yup.string().required("Gender is required"),
            fathers_name: Yup.string().required("Fathers name is required"),
            mothers_name: Yup.string().required("Mothers name is required"),
            identity_type: Yup.string().required("Identity type is required"),
            identity_number: Yup.string().required(
              "Identity number is required"
            ),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            address: Yup.string().required("Address is required"),
            client_nuit: Yup.string()
              .required("Nuit is required")
              .min(9, "Nuit must be at least 9 characters"),
            client_local: Yup.string().required("Client local is required"),
            client_imgb: Yup.string().required("Image is required"),
            client_imgf: Yup.string().required("Image is required"),
            selfie: Yup.string().required("Selfie is required"),
            client_no: Yup.string().required("phone number is required"),
          })}
          onSubmit={(values) => {
            let formData = new FormData();
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
            formData.append("selfie", "values.selfie");
            formData.append("user_id", userProfile.id);
            formData.append(
              "client_number",
              `${values.client_no_code}${values.client_no}`
            );
            dispatch(postGenerateNuit(formData));
            // dispatch(postGenerateNuit(data));
            setOnboardingData(values);
            localStorage.setItem("onboardingData", JSON.stringify(values));
          }}
        >
          {({ setFieldValue, handleChange, values, isValid, dirty }) => (
            <Form onChange={handleChange}>
              <div className="bg-green py-2 px-8">
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
                      <FormInput
                        type="text"
                        name="client_nuit"
                        placeholder="NUIT Number"
                      />
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
                    </div>
                    {/* <div>
                      <FormInput
                        type="text"
                        name="employee_number"
                        placeholder="Employee Number"
                      />
                    </div> */}
                    <div className="flex items-center gap-x-3.5">
                      {/* <FormInput
                        type="text"
                        name="means_of_identification"
                        placeholder="Means of Identification"
                      /> */}
                      <FormSelect name="identity_type" required>
                        <option value="">Select Identification</option>
                        <option value="bi">BI</option>
                        <option value="passaporte">Passaporte</option>
                      </FormSelect>
                      <FormInput
                        type="text"
                        name="identity_number"
                        placeholder="National Id Number"
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
                          <FormSelect name="client_no_code" required>
                            <option value="+234">+234</option>
                            <option value="+234">+234</option>
                          </FormSelect>
                        </div>
                        <div className="w-3/4">
                          <FormInput
                            type="text"
                            name="client_no"
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
                          <option value="resident">Residential Status</option>
                        </FormSelect>
                      </div>
                      <div className="w-1/3">
                        <FormInput
                          type="text"
                          name="client_local"
                          placeholder="Local Code"
                        />
                      </div>
                      <div className="w-1/3" />
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
                {/* <section>
                  <h3 className="py-3 capitalize text-dark-3 text-base">
                    Account Information
                  </h3>
                  <div className="flex flex-col gap-y-2.5">
                    <div className="flex items-center gap-x-3.5">
                      <FormSelect name="bank" required>
                        <option value="">Bank</option>
                        <option value="access">Access bank</option>
                        <option value="stanbic">Stanbic Ibtc Bank</option>
                      </FormSelect>
                      <FormInput
                        type="text"
                        name="account_holder"
                        placeholder="Account Holder"
                      />
                      <FormInput
                        type="text"
                        name="account_number"
                        placeholder="Account Number"
                      />
                    </div>
                    <div className="flex">
                      <div className="w-1/2">
                        <FormSelect name="identity_type" required>
                          <option value="">Select Identification</option>
                          <option value="passport">Passport</option>
                          <option value="voters_card">Voters Card </option>
                        </FormSelect>
                      </div>
                      <div className="w-1/2" />
                    </div>
                  </div>
                </section> */}
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
                  <div className="pt-4">
                    <div className="w-full flex items-center gap-x-3.5">
                      <ImageUpload
                        label="National ID (BI Front)"
                        name="client_imgf"
                      />
                      <ImageUpload
                        label="National ID (BI Back)"
                        name="client_imgb"
                      />
                    </div>
                    <div>
                      <Selfie />
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex items-center gap-x-4 pt-5">
                <div className="w-200 h-62">
                  <Button
                    btnText="Submit"
                    btnType="submit"
                    loading={nuitLoading}
                    disabled={!isValid && dirty}
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

export default CustomerOnboarding;
