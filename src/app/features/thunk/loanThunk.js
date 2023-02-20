import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEligibilitySalaryApi,
  kycApi,
  loanOnboardingApi,
  paymentScheduleApi,
  updateLoanDetailsApi,
} from "../../../services/requests/loan";
import toast from "react-hot-toast";

export const postKyc = createAsyncThunk(
  "loan/kycApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await kycApi(data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      console.log(error, "error");
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
      toast.error(error.message);
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
const onboardingData = JSON.parse(localStorage.getItem("loanOnboardingData"));

export const updateLoanDetails = createAsyncThunk(
  "loan/updateLoanDetailsApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await updateLoanDetailsApi(onboardingData.user_id, data);
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
        const res = await paymentScheduleApi(onboardingData.user_id, data);
        toast.success(res.data.message);
        return res.data;
      } catch (error) {
        toast.error(error.message);
        rejectWithValue(error.response.data);
      }
    }
  );
