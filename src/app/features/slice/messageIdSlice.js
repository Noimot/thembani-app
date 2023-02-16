import { createAsyncThunk, createSlice, isAnyOf  } from "@reduxjs/toolkit";
import { getMessageIdApi } from "../../../services/requests/onboarding";
import toast from "react-hot-toast";

export const getMessageId = createAsyncThunk(
  "messageId/getMessageIdApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await getMessageIdApi(data | "");
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      rejectWithValue(error.response.data);
    }
  }
);

const messageIdSlice = createSlice({
    name: "messageId",
    initialState: {
      messageIdData: [],
      messageIdLoading: false,
      messageIdSuccess: false,
      messageIdError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getMessageId.fulfilled, (state, { payload }) => {
          state.messageIdData = payload;
        })
        .addMatcher(isAnyOf(getMessageId.fulfilled, getMessageId.rejected), (state) => {
          state.messageIdLoading = false;
        })
        .addMatcher(isAnyOf(getMessageId.pending), (state) => {
          state.messageIdLoading = true;
        })
        .addMatcher(isAnyOf(getMessageId.fulfilled), (state) => {
          state.messageIdSuccess = true;
        })
        .addMatcher(isAnyOf(getMessageId.rejected), (state) => {
          state.messageIdSuccess = false;
          state.messageIdError = true;
        });
    },
  });
  
  const { reducer } = messageIdSlice;
  export default reducer;
