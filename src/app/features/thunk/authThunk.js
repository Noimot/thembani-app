import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  confirmOtp,
  register,
  login,
  resetPassword,
  changePassword,
  userDetailsApi,
} from "../../../services/requests/auth";
import toast from "react-hot-toast";

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
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      rejectWithValue(error.response.data);
    }
  }
);

export const postResetPassword = createAsyncThunk(
  "auth/reset_password",
  async (data, { rejectWithValue }) => {
    try {
      const res = await resetPassword(data);
      toast.success("Password reset link has been sent to your email address");
      return res.data;
    } catch (error) {
      toast.error(error.response.data.data.error);
      rejectWithValue(error.response.data);
    }
  }
);

export const postChangePassword = createAsyncThunk(
  "auth/change_password",
  async (data, { rejectWithValue }) => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    try {
      const res = await changePassword(userProfile.id, data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.data.error);
      rejectWithValue(error.response.data);
    }
  }
);
