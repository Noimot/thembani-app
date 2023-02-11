import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { getNuibToken } from "../../../services/requests/loan";
import { postKyc } from "../thunk/loanThunk";
import toast from "react-hot-toast";


const loanSlice = createSlice({
  name: "loan",
  initialState: {
    kycData: [],
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
      .addMatcher(isAnyOf(postKyc.fulfilled, postKyc.rejected), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(postKyc.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(postKyc.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(postKyc.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(postKyc.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = loanSlice;
export default reducer;
