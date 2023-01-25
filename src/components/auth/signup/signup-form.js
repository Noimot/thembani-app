import React from "react";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../shared/form-input";

export default function SignupForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phoneNumber: Yup.string()
          .trim()
          .required("Phone number is required")
          .matches(/[0-9]/, "Invalid phone number"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "password must be at least 6 characters"),
        // .matches(""),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], `Password does not match`)
          .required("Confirm password is required"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="w-full flex flex-col gap-8">
          <FormInput type="text" name="username" placeholder="username" />
          <FormInput type="email" name="email" placeholder="email address" />
          <FormInput
            type="number"
            name="phoneNumber"
            placeholder="phone number"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="password"
            icon={<PasswordIcon />}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            icon={<PasswordIcon />}
          />
          <div className="flex justify-end capitalize text-sm">
            <Link className="text-grey-2">forgot password?</Link>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-3 text-sm">
              <p className="text-grey-2">Already have an account?</p>
              <Link to="/login" className="text-green-1">
                Sign in
              </Link>
            </div>
            <div className="w-[94px] h-51 ">
              <button
                type="submit"
                className="w-full h-full rounded-[5px] text-white text-center bg-green-1 text-lg"
              >
                Sign up
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
