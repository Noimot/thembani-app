import { createAsyncThunk, createSlice, isAnyOf  } from "@reduxjs/toolkit";
import { generateNuit } from "../../../services/requests/onboarding";
import toast from "react-hot-toast";

export const postGenerateNuit = createAsyncThunk(
  "nuit/generateNuit",
  async (data, { rejectWithValue }) => {
    try {
      const res = await generateNuit(data);
      toast.success("Nuit generated successfully");
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
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
          state.nuitSuccess = false;
        })
    },
  });
  
  const { reducer } = nuitSlice;
  export default reducer;
  