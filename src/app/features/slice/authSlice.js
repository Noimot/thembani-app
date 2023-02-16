import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { register } from "../../../services/requests/auth";
import { postConfirmOtp, postRegister, postLogin, postResetPassword, postChangePassword } from "../thunk/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    loginData: [],
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
      .addCase(postResetPassword.fulfilled, (state, { payload }) => {
        state.resetPasswordData = payload;
      })
      .addCase(postChangePassword.fulfilled, (state, { payload }) => {
        state.changePasswordData = payload;
      })
      .addCase(postConfirmOtp.pending, (state) => {
        state.isLoadingOtp = true;
      })
      .addMatcher(
        isAnyOf(postConfirmOtp.fulfilled, postConfirmOtp.rejected),
        (state) => {
          state.isLoadingOtp = false;
        }
      )
      .addMatcher(
        isAnyOf(postRegister.fulfilled, postRegister.rejected, postLogin.fulfilled, postLogin.rejected, postResetPassword.fulfilled, postResetPassword.rejected, postChangePassword.fulfilled, postChangePassword.rejected),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(postRegister.pending, postConfirmOtp.pending, postLogin.pending, postResetPassword.pending, postChangePassword.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(postRegister.fulfilled, postLogin.fulfilled, postResetPassword.fulfilled, postChangePassword.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(postConfirmOtp.fulfilled), (state) => {
        state.otpSuccess = true;
      })
      .addMatcher(isAnyOf(postRegister.rejected, postResetPassword.rejected, postChangePassword.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(postRegister.rejected, postResetPassword.rejected, postChangePassword.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = authSlice;
export default reducer;
