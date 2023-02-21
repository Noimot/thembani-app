import {  createAsyncThunk } from "@reduxjs/toolkit";
// import { insuranceApi } from "../../../services/requests/loan"; //Yet to be added 
import toast from "react-hot-toast";


export const postInsuarnce = createAsyncThunk(
  "loan/insuarnceApi",
  async (data, { rejectWithValue }) => {
    try {
      // const res = await insuranceApi(data);
      // toast.success(res.message);
      // return res.data;
    } catch (error) {
    //   toast.error(error);
      rejectWithValue(error.response.data);
    }
  }
);