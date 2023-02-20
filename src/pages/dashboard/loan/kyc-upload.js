import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";
import FormSelect from "../../../components/shared/form-select";
import ImageUpload from "../../../components/shared/input-file";
import Selfie from "../../../components/shared/selfie";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { postKyc } from "../../../app/features/thunk/loanThunk";

const KycUpload = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { kycData, isLoading } = useSelector((state) => state.loan);
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  console.log(kycData, "kyc data");
  const handleBackButton = () => {
    navigate(-1);
  };
  const initialValue = {
    identity: "",
    statement: "",
    cedsif: "",
    nuit: "",
    utility: "",
    identity_type: "",
    user_id: "",
  };

  useEffect(() => {
    if (kycData.data) {
      navigate("/loan-application/loan-acceptance");
    }
  }, [kycData.data]);
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Loan Application" subHeading="KYC Upload" />
      <main className="w-full">
        <Formik
          initialValues={initialValue}
          validationSchema={Yup.object({
            identity: Yup.mixed().required("Identity is required"),
            cedsif: Yup.mixed().required("Cedsif is required"),
            statement: Yup.mixed().required("Statement is required"),
            utility: Yup.mixed().required("Utility is required"),
            nuit: Yup.mixed().required("Nuit is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            let formData = new FormData();
            formData.append("identity", values.identity);
            formData.append("statement", values.statement);
            formData.append("utility", values.utility);
            formData.append("nuit", values.nuit);
            formData.append("nuit", values.nuit);
            formData.append("cedsif", values.cedsif);
            formData.append("user_id", userProfile.id);
            dispatch(postKyc(formData));
          }}
        >
          {({ handleChange, values, isValid }) => (
            <Form onChange={handleChange}>
              <div className="w-full flex flex-col gap-y-5 pt-5 bg-green py-6 px-7 rounded-5">
                <div className="w-full flex items-center gap-x-3.5">
                  <ImageUpload
                    label="Declaration of address/Utility bill"
                    name="utility"
                  />
                  <ImageUpload label="Copy of NUIT" name="nuit" />
                </div>
                <div className="w-full flex items-center gap-x-3.5">
                  <ImageUpload
                    label="CEDSIF Authorisation Letter"
                    name="cedsif"
                  />
                  <ImageUpload
                    label="3 Months Statement of Account"
                    name="statement"
                  />
                </div>
                <div className="w-full flex items-center gap-x-3.5">
                  <FormSelect name="identity_type">
                    <option value="">Select Identification</option>
                    <option value="bi">BI</option>
                    <option value="passaporte">Passaporte</option>
                  </FormSelect>
                  <ImageUpload
                    label={
                      values.identity_type
                        ? values.identity_type
                        : "National ID"
                    }
                    name="identity"
                    className={`${values.identity_type && "capitalize"}`}
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-between pt-10">
                <div className="flex items-center gap-x-4">
                  <div className="w-200 h-62">
                    {" "}
                    <Button
                      btnText="Proceed"
                      btnType="submit"
                      loading={isLoading}
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
                  <Button
                    btnText="Cancel"
                    btnType="button"
                    className="bg-red-2"
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

export default KycUpload;
