import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { getNuibToken } from "../../../services/requests/loan";
import {
  postKyc,
  postLoanOnboarding,
  getEligibilitySalary,
  updateLoanDetails,
  getPaymentSchedule,
  getStatus
} from "../thunk/loanThunk";
import toast from "react-hot-toast";

const loanSlice = createSlice({
  name: "loan",
  initialState: {
    kycData: [],
    loanOnboardingData: [],
    eligibilitySalaryData: [],
    updatedLoanDetailsData: [],
    paymentScheduleData: [],
    statusData:[],
    isUpdateLoanLoading: false,
    isUpdateLoanError: false,
    isUpdateLoanSuccess: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postKyc.fulfilled, (state, { payload }) => {
        state.kycData = payload;
      })
      .addCase(postLoanOnboarding.fulfilled, (state, { payload }) => {
        state.loanOnboardingData = payload;
      })
      .addCase(getEligibilitySalary.fulfilled, (state, { payload }) => {
        state.eligibilitySalaryData = payload;
      })
      .addCase(updateLoanDetails.fulfilled, (state, { payload }) => {
        state.updatedLoanDetailsData = payload;
      })
      .addCase(getPaymentSchedule.fulfilled, (state, { payload }) => {
        state.paymentScheduleData = payload;
      })
      .addCase(getStatus.fulfilled, (state, { payload }) => {
        state.statusData = payload;
      })
      .addMatcher(
        isAnyOf(
          postKyc.fulfilled,
          postKyc.rejected,
          postLoanOnboarding.fulfilled,
          postLoanOnboarding.rejected,
          getEligibilitySalary.fulfilled,
          getEligibilitySalary.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(updateLoanDetails.fulfilled, updateLoanDetails.rejected),
        (state) => {
          state.isUpdateLoanLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          postKyc.pending,
          postLoanOnboarding.pending,
          getEligibilitySalary.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(updateLoanDetails.pending), (state) => {
        state.isUpdateLoanLoading = true;
      })
      .addMatcher(
        isAnyOf(
          postKyc.fulfilled,
          postLoanOnboarding.fulfilled,
          getEligibilitySalary.fulfilled
        ),
        (state) => {
          state.isSuccess = true;
        }
      )
      .addMatcher(isAnyOf(updateLoanDetails.fulfilled), (state) => {
        state.isUpdateLoanSuccess = true;
      })
      .addMatcher(
        isAnyOf(
          postKyc.rejected,
          postLoanOnboarding.rejected,
          getEligibilitySalary.rejected
        ),
        (state) => {
          state.isError = true;
          state.isSuccess = false;
        }
      )
      .addMatcher(
        isAnyOf(updateLoanDetails.rejected),
        (state) => {
          state.isUpdateLoanError = true;
          state.isUpdateLoanSuccess = false;
        }
      );
  },
});

const { reducer } = loanSlice;
export default reducer;
