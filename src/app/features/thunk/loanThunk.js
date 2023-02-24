import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEligibilitySalaryApi,
  kycApi,
  loanOnboardingApi,
  paymentScheduleApi,
  updateLoanDetailsApi,
  getStatusApi,
} from "../../../services/requests/loan";
import toast from "react-hot-toast";

const toastError = (error) => {
  if (error.response.data.data.email) {
    return error.response.data.data.email[0];
  } else if (error.response.data.data.phone_number) {
    return error.response.data.data.phone_number[0];
  }
  else if (error.response.data.data.middle_name) {
    return error.response.data.data.middle_name[0];
  }
};


export const postKyc = createAsyncThunk(
  "loan/kycApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await kycApi(data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      rejectWithValue(error.response.data);
    }
  }
);

export const postLoanOnboarding = createAsyncThunk(
  "loan/loanOnboardingApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loanOnboardingApi(data);
      toast.success(res.data.message);
      localStorage.setItem("loanOnboardingData", JSON.stringify(res.data.data));
      return res.data;
    } catch (error) {
      console.log(error.response)
      toast.error(toastError(error));
      rejectWithValue(error.response.data);
    }
  }
);

export const getEligibilitySalary = createAsyncThunk(
  "loan/getEligibilitySalaryApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getEligibilitySalaryApi(data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      rejectWithValue(error.response.data);
    }
  }
);
const userProfile = JSON.parse(localStorage.getItem("userProfile"));

export const updateLoanDetails = createAsyncThunk(
  "loan/updateLoanDetailsApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await updateLoanDetailsApi(userProfile.id, data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      rejectWithValue(error.response.data);
    }
  }
);

export const getPaymentSchedule = createAsyncThunk(
  "loan/paymentScheduleApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await paymentScheduleApi(userProfile.id, data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.message);
      rejectWithValue(error.response.data);
    }
  }
);

export const getStatus = createAsyncThunk(
  "loan/getStatusApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getStatusApi(data);
      return res.data.data;
    } catch (error) {
      toast.error(error.message);
      rejectWithValue(error.response.data);
    }
  }
);
