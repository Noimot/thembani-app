import { Form, Formik } from "formik";
import React from "react";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";
import FormSelect from "../../../components/shared/form-select";
import ImageUpload from "../../../components/shared/input-file";
import Selfie from "../../../components/shared/selfie";

const KycUpload = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Loan Application" subHeading="KYC Upload" />
      <main className="w-full bg-green py-6 px-7 rounded-5">
        <div className="text-dark-1 flex flex-col gap-y-6">
          <h2 className="text-sm font-semibold">
            You will be required to take a selfie
          </h2>
          <ul className="text-sm font-medium flex flex-col gap-y-6">
            <li>{">"} Make sure your head is not covered</li>
            <li>{">"} Make sure your face is not covered</li>
            <li>{">"} Ensure that you have a solid background.</li>
          </ul>
        </div>
        <Formik>
          {({ setFieldValue, handleChange }) => (
            <Form
              onChange={handleChange}
              className="w-full flex flex-col gap-y-5 pt-5"
            >
              <div>
                {/* <Selfie /> */}
                <ImageUpload
                  label="(BI Front)"
                  name="client_imgf"
                  //   onChange={(event) => {
                  //     handleFileChangef(event);
                  //   }}
                />
              </div>
              <div className="w-full flex items-center gap-x-3.5">
                <ImageUpload
                  label="(BI Front)"
                  name="client_imgf"
                  //   onChange={(event) => {
                  //     handleFileChangef(event);
                  //   }}
                />
                <ImageUpload
                  label="(BI Back)"
                  name="client_imgb"
                  //   onChange={(event) => {
                  //     handleFileChangeb(event);
                  //   }}
                />
              </div>
              <ImageUpload
                label="(BI Front)"
                name="client_imgf"
                //   onChange={(event) => {
                //     handleFileChangef(event);
                //   }}
              />
              <FormSelect name="ministry">
                <option value="" className="text-sm text-dark-3">
                  Ministry
                </option>
              </FormSelect>
              <div className="w-full flex items-center gap-x-3.5">
                <ImageUpload
                  label="(BI Front)"
                  name="client_imgf"
                  //   onChange={(event) => {
                  //     handleFileChangef(event);
                  //   }}
                />
                <ImageUpload
                  label="(BI Back)"
                  name="client_imgb"
                  //   onChange={(event) => {
                  //     handleFileChangeb(event);
                  //   }}
                />
              </div>
            </Form>
          )}
        </Formik>
      </main>
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
    </div>
  );
};

export default KycUpload;
