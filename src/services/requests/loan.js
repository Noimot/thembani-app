import http from "../axios-config";

export const kycApi = async (data) =>
  http.post("kyc", data, {
    Headers: {
      "'Content-Type'": "multipart/form-data",
    },
  });

export const loanOnboardingApi = async (data) =>
  http.post("loan", data, {
    Headers: {
      "'Content-Type'": "multipart/form-data",
    },
  });

export const getEligibilitySalaryApi = (salary) =>
  http.get(`eligibility?salary=${salary}`);

export const updateLoanDetailsApi = (user_id, data) =>
  http.put(`loan/${user_id}`, data);

export const paymentScheduleApi = (user_id) =>
  http.get(`${user_id}/payment-schedule`);
