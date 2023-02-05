import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Login from "./pages/auth/loginin";
import Signup from "./pages/auth/signup";
import AccountComfirmation from "./pages/account-comfirmation";
import CatchAllRoutes from "./pages/404";
import Instructions from "./pages/instructions";
import GenerateNuib from "./pages/generate-nuib";
import CustomerOnboarding from "./pages/dashboard/customer-onboading/customer-onboarding";
import Dashboard from "./pages/dashboard";
import Home from "./pages/dashboard/home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard">
            <Route path="/dashboard" element={<Home />} />
            <Route
              path="customer-onboarding"
              element={<CustomerOnboarding />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Signup />} />
          <Route path="/confirm-account" element={<AccountComfirmation />} />
          <Route path="/instruction" element={<Instructions />} />
          <Route path="/generate-nuib" element={<GenerateNuib />} />
          <Route path="/" element={<Navigate replace to="/login" />} />{" "}
          <Route path="/*" element={<CatchAllRoutes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
