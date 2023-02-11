import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { kycApi } from "../../../services/requests/loan";
import toast from "react-hot-toast";


export const postKyc = createAsyncThunk(
  "loan/kycApi",
  async (data, { rejectWithValue }) => {
    try {
      const res = await kycApi(data);
      toast.success(res.message);
      return res.data;
    } catch (error) {
        console.log(error, 'error')
    //   toast.error(error);
      rejectWithValue(error.response.data);
    }
  }
);

