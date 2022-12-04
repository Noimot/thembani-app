import http from "../axios-config";

export const login = async (data) => http.post(`login`, data)

export const register = async (data) => http.post(`register`, data)

export const confirmOtpsign = async (data) => http.post(`otp`, data)