import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { postUserProfileApi } from "../../../services/requests/onboarding";
import toast from "react-hot-toast";

export const postUserProfile = createAsyncThunk(
  "profile/postUserProfileApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postUserProfileApi(data);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      rejectWithValue(error.response.data);
    }
  }
);

const userProfileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUserProfile.fulfilled, (state, { payload }) => {
        state.profileData = payload;
      })
      .addMatcher(
        isAnyOf(postUserProfile.fulfilled, postUserProfile.rejected),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(isAnyOf(postUserProfile.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(postUserProfile.fulfilled), (state) => {
        state.isSuccess = true;
      })
      .addMatcher(isAnyOf(postUserProfile.rejected), (state) => {
        state.isError = true;
      })
      .addMatcher(isAnyOf(postUserProfile.rejected), (state) => {
        state.isSuccess = false;
      });
  },
});

const { reducer } = userProfileSlice;
export default reducer;
