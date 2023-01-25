import React from "react";
import Header from "../../header";
import { LoginLogo } from "../../icons/login-logo";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/password-icon";
import FormInput from "../../shared/form-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
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
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form className="w-full flex flex-col gap-8">
              <FormInput type="email" name="email" placeholder="email address" />
              <FormInput
                type="password"
                name="password"
                placeholder="password"
                icon={<PasswordIcon />}
              />
              <div className="flex justify-end capitalize text-sm">
                <Link className="text-grey-2">forgot password?</Link>
              </div>
              <div className="w-367 h-51 ">
                <button type='submit' className="w-full h-full rounded-[5px] text-white text-center bg-green-1 outline-green-1 text-lg">
                  Sign in
                </button>
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
