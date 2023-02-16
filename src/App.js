import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Login from "./pages/auth/loginin";
import Signup from "./pages/auth/signup";
import AccountComfirmation from "./pages/account-comfirmation";
import CatchAllRoutes from "./pages/404";
import Instructions from "./pages/instructions";
import GenerateNuib from "./pages/generate-nuib";
import CustomerOnboarding from "./pages/dashboard/customer-onboading/customer-onboarding";
import Dashboard from "./pages/dashboard";
import Home from "./pages/dashboard/home";
import Status from "./pages/dashboard/loan-details/Status";
import LoanOnboarding from "./pages/dashboard/loan/onboarding";
import ClientEligibility from "./pages/dashboard/loan/client-eligibility";
import InsuranceStatus from "./pages/dashboard/insurance/InsuranceStatus";
import PasswordChange from "./pages/dashboard/settings/PasswordChange";
import ProfileInfo from "./pages/dashboard/profile/ProfileInfo";
import Notification from "./pages/dashboard/notification/Notification";
import PaymentReschedule from "./pages/dashboard/loan/payment-reschedule";
import KycUpload from "./pages/dashboard/loan/kyc-upload";
import LoanAcceptancce from "./pages/dashboard/loan/loan-acceptancce";
import LoanStats from "./pages/dashboard/LoanStats";
import ResetPassword from "./pages/auth/ResetPassword";
import { RequiredRoute, CheckToken } from "./utils/helpers/required-route";

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RequiredRoute>
              <Dashboard />
            </RequiredRoute>
          }
          path="/"
        >
          <Route index element={<Home />} />
          <Route path="customer-onboarding" element={<CustomerOnboarding />} />
          <Route path="loan-stats" element={<LoanStats />} />
          <Route path="loan-details" element={<Status />} />
          <Route path="insurance" element={<InsuranceStatus />} />
          <Route path="settings" element={<PasswordChange />} />
          <Route path="profile" element={<ProfileInfo />} />
          <Route path="notification" element={<Notification />} />
          <Route
            path="loan-application/customer-onboarding"
            element={<LoanOnboarding />}
          />
          <Route
            path="loan-application/client-eligibility"
            element={<ClientEligibility />}
          />
          <Route
            path="loan-application/payment-reschedule"
            element={<PaymentReschedule />}
          />
          <Route path="loan-application/kyc-upload" element={<KycUpload />} />
          <Route
            path="loan-application/loan-acceptance"
            element={<LoanAcceptancce />}
          />
        </Route>
        <Route
          path="/login"
          element={
            <CheckToken>
              <Login />
            </CheckToken>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/confirm-account" element={<AccountComfirmation />} />
        <Route path="/instruction" element={<Instructions />} />
        <Route path="/generate-nuib" element={<GenerateNuib />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} />{" "} */}

        <Route path="/*" element={<CatchAllRoutes />} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
