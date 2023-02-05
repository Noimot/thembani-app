import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slice/authSlice";
import tokenReducer from "./features/slice/tokenSlice";
import nuitReducer from "./features/slice/generateNuitSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    generateNuit: nuitReducer,
  },
  devTools: true,
});
