import http from "../axios-config";

export const login = async (data) => http.post(`login`, data)

export const register = async (data) => http.post(`register`, data)

export const confirmOtp = async (data) => http.post(`otp`, data)

export const userDetailsApi = async (user_id) => http.get(`${user_id}/user-details`)
export const resetPassword = async (data) => http.post(`reset-password`, data)

export const changePassword = async (data) => http.post(`2/change-password`, data)

