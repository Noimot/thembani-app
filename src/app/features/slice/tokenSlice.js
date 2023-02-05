import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { getNuibToken } from "../../../services/requests/loan";
import toast from "react-hot-toast";

export const getToken = createAsyncThunk(
  "token/getNuibTokenn",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getNuibToken(data);
      toast.success(res.message);
      return res.data;
    } catch (error) {
      // toast.error(toastError(error));
      rejectWithValue(error.response.data);
    }
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    tokenData: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.tokenData = payload;
      })
      .addMatcher(isAnyOf(getToken.fulfilled, getToken.rejected), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getToken.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getToken.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(getToken.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(getToken.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = tokenSlice;
export default reducer;
