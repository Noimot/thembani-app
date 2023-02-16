import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { register } from "../../../services/requests/auth";
import { postConfirmOtp, postRegister, postLogin, postResetPassword, postChangePassword, getUserDetails } from "../thunk/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    loginData: [],
    otpData:[],
    userDetailsData: [],
    resetPasswordData: [],
    changePasswordData: [],
    isLoading: false,
    isSuccess: false,
    message: "",
    isLoadingOtp: false,
    otpSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postRegister.fulfilled, (state, { payload }) => {
        state.data = [...state.data, payload];
      })
      .addCase(postLogin.fulfilled, (state, { payload }) => {
        state.loginData = payload;
      })
      .addCase(postConfirmOtp.fulfilled, (state, {payload}) => {
        state.otpData = payload;})
      .addCase(postResetPassword.fulfilled, (state, { payload }) => {
        state.resetPasswordData = payload;
      })
      .addCase(postChangePassword.fulfilled, (state, { payload }) => {
        state.changePasswordData = payload;
      })
      .addCase(getUserDetails.fulfilled, (state, {payload}) => {
        state.userDetailsData = payload;
      })
      .addMatcher(
        isAnyOf(postConfirmOtp.pending),
        (state) => {
          state.isLoadingOtp = true;
        }
      )
      .addMatcher(
        isAnyOf(postConfirmOtp.fulfilled, postConfirmOtp.rejected),
        (state) => {
          state.isLoadingOtp = false;
        }
      )
      .addMatcher(
        isAnyOf(postRegister.fulfilled, postRegister.rejected, postLogin.fulfilled, postLogin.rejected, postResetPassword.fulfilled, postResetPassword.rejected, postChangePassword.fulfilled, postChangePassword.rejected, getUserDetails.fulfilled, getUserDetails.rejected),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(postRegister.pending, postConfirmOtp.pending, postLogin.pending, postResetPassword.pending, postChangePassword.pending, getUserDetails.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(postRegister.fulfilled, postLogin.fulfilled, postResetPassword.fulfilled, postChangePassword.fulfilled, getUserDetails.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(postRegister.fulfilled, postLogin.fulfilled, postRegister.pending, postLogin.pending, getUserDetails.fulfilled, getUserDetails.pending), (state) => {
        state.isError = false;
      })
      .addMatcher(isAnyOf(postConfirmOtp.fulfilled), (state) => {
        state.isLoadingOtp = false;
        state.otpSuccess = true;
      })
      .addMatcher(isAnyOf(postRegister.rejected, postResetPassword.rejected, postChangePassword.rejected, postLogin.rejected, getUserDetails.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(postRegister.rejected, postResetPassword.rejected, postChangePassword.rejected, postLogin.rejected, getUserDetails.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = authSlice;
export default reducer;
