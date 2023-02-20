import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slice/authSlice";
import tokenReducer from "./features/slice/tokenSlice";
import nuitReducer from "./features/slice/generateNuitSlice";
import loanReducer from "./features/slice/loanSlice";
import messageIdReducer from "./features/slice/messageIdSlice";
import userProfileReducer from "./features/slice/userProfileSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

// const reducer = combineReducers({
//   auth: authReducer,
// });
// const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: {
    auth: authReducer,
    token: tokenReducer,
    generateNuit: nuitReducer,
    loan: loanReducer,
    messageId: messageIdReducer,
    userProfile: userProfileReducer,
  },
  devTools: true,
});
