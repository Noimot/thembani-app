import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { postInsurance } from "../thunk/insuaranceThunk";


const insuranceSlice = createSlice({
  name: "insuarnce",
  initialState: {
    insuaranceData: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postInsurance.fulfilled, (state, { payload }) => {
        state.insauranceData = payload;
      })
      .addMatcher(isAnyOf(postInsurance.fulfilled, postInsurance.rejected), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(postInsurance.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(postInsurance.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(postInsurance.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(postInsurance.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = insuranceSlice;
export default reducer;
