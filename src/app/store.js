import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slice/authSlice";
import tokenReducer from "./features/slice/tokenSlice";
import nuitReducer from "./features/slice/generateNuitSlice"
import loanReducer from './features/slice/loanSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    generateNuit: nuitReducer,
    loan: loanReducer,
  },
  devTools: true,
});
