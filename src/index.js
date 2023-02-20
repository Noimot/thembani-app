import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import spinner from "./assets/images/spinner.png";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <span>
            <img src={spinner} />
          </span>
        }
      >
        <Toaster position={"top-center"} />
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
