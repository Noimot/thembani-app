import React from "react";

import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import FormInput from "../../shared/form-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { postLogin } from "../../../app/features/thunk/authThunk";
import { useDispatch } from "react-redux";
import Button from "../../shared/button";
import { useSelector } from "react-redux";

export default function LoginForm({ handleConfirmOtp, getUserDetails }) {
  const dispatch = useDispatch();
  const { loginData, isLoading } = useSelector(
    (state) => state.auth
  );
  return (
    <>
      <div>
        <img src="password.svg" alt="" />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "password must be at least 6 characters"),
        })}
        onSubmit={async (values) => {
          await dispatch(postLogin(values));
          if (loginData) {
            handleConfirmOtp();
          }
          getUserDetails(values);
        }}
      >
        {() => (
          <Form className="w-full flex flex-col gap-8">
            <FormInput type="emai" name="email" placeholder="Email Address" />
            <FormInput
              type="password"
              name="password"
              placeholder="password"
              icon={<PasswordIcon />}
            />
            <div className="flex justify-end capitalize text-sm">
              <Link to="/reset-password" className="text-grey-2">
                forgot password?
              </Link>
            </div>
            <div className="w-367 h-51 ">
              <Button btnText="Sign in" btnType="submit" loading={isLoading} />
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex items-center gap-x-3 text-sm">
        <p className="text-grey-2">Don't have an account?</p>{" "}
        <Link to="/create-account" className="text-green-1">
          Sign up
        </Link>
      </div>
    </>
  );
}
