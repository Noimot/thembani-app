import http from "../axios-config";

export const updateProfile = async (data) => http.post(`https://135.148.118.100/thembaniServer/public/api/profile`, data)