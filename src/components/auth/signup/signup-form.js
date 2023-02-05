import React from "react";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../shared/form-input";
import { postRegister } from "../../../app/features/thunk/authThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../shared/button";
import banner from "../../../assets/images/banner.svg"

export default function SignupForm({ handleConfirmOtp, getUserDetails }) {
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading, isError } = useSelector(
    (state) => state.auth
  );
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phone_number: Yup.string()
          .trim()
          .required("Phone number is required")
          .matches(/[0-9]/, "Invalid phone number"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "password must be at least 6 characters"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], `Password does not match`)
          .required("Confirm password is required"),
      })}
      onSubmit={async (values) => {
       await dispatch(postRegister(values));
        if (data) {
          handleConfirmOtp();
        }
        getUserDetails(values);
      }}
    >
      {() => (
        <Form className="w-full flex flex-col gap-8">
          <FormInput type="text" name="username" placeholder="username" />
          <FormInput type="email" name="email" placeholder="email address" />
          <FormInput
            type="string"
            name="phone_number"
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
            name="password_confirmation"
            placeholder="confirm password"
            icon={<PasswordIcon />}
          />
          <div className="flex justify-end capitalize text-sm">
            <Link className="text-grey-2" to="/forgot-password">forgot password?</Link>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-3 text-sm">
              <p className="text-grey-2">Already have an account?</p>
              <Link to="/login" className="text-green-1">
                Sign in
              </Link>
            </div>
            <div className="w-[94px] h-51">
              <Button btnText="Sign up" btnType="submit" loading={isLoading} />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
