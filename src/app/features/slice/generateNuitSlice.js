import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { generateNuit } from "../../../services/requests/loan";
import toast from "react-hot-toast";

export const postGenerateNuit = createAsyncThunk(
  "nuit/generateNuit",
  async (data, { rejectWithValue }) => {
    try {
      const res = await generateNuit(data);
      toast.success(res.message);
      console.log(res.data, "response");
      return res.data;
    } catch (error) {
      console.log(error);
      // toast.error(toastError(error));
      rejectWithValue(error.response.data);
    }
  }
);

const nuitSlice = createSlice({
  name: "nuit",
  initialState: {
    nuitData: [],
    nuitLoading: false,
    nuitSuccess: false,
    nuitError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postGenerateNuit.fulfilled, (state, { payload }) => {
        state.nuitData = payload;
      })
      .addMatcher(isAnyOf(postGenerateNuit.fulfilled, postGenerateNuit.rejected), (state) => {
        state.nuitLoading = false;
      })
      .addMatcher(isAnyOf(postGenerateNuit.pending), (state) => {
        state.nuitLoading = true;
      })
      .addMatcher(isAnyOf(postGenerateNuit.fulfilled), (state) => {
        state.nuitSuccess = true;
      })
      .addMatcher(isAnyOf(postGenerateNuit.rejected), (state) => {
        state.nuitError = true;
      })
      .addMatcher(isAnyOf(postGenerateNuit.rejected), (state) => {
        state.nuitSuccess = false;
      });
  },
});

const { reducer } = nuitSlice;
export default reducer;
