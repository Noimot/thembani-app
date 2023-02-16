import { createAsyncThunk } from "@reduxjs/toolkit";
import { confirmOtp, register, login, userDetailsApi } from "../../../services/requests/auth";
import toast from "react-hot-toast";

const pathname = window.location.pathname;
const toastError = (error) => {
  if (error.response.data.data.email) {
    return error.response.data.data.email[0];
  } else if (error.response.data.data.phone_number) {
    return error.response.data.data.phone_number[0];
  } else if (error.response.data.data.password) {
    return error.response.data.data.password[0];
  } else if (error.response.data.data.username) {
    return error.response.data.data.username[0];
  }
};

export const postRegister = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await register(data);
      toast.success(res.message);
      return res.data;
    } catch (error) {
      toast.error(toastError(error));
      rejectWithValue(error.response.data);
    }
  }
);

export const postConfirmOtp = createAsyncThunk(
  "auth/confirmOtp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await confirmOtp(data);
      localStorage.setItem("Thembani-TKN-auth", res.data.data.token);
      localStorage.setItem("userProfile", JSON.stringify(res.data.data.data));
      if (pathname === "/create-account") {
        window.location.replace("/confirm-account")
      }
      // else {
      //   window.location.replace("/dashboard")
      // }
      return res.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const postLogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await login(data);
      window.localStorage.setItem("userEmail", res.data.data.email)
      toast.success("Login Successful");
      return res.data;
    } catch (error) {
      toast.error(error.response.data.data.error);
      rejectWithValue(error.response.data);
    }
  }
);


export const getUserDetails = createAsyncThunk(
  "auth/userDetailsApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await userDetailsApi(data);
      toast.success(res.message);
      return res.data;
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
      rejectWithValue(error.response.data);
    }
  }
);

