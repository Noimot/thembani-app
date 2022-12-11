import http from "../axios-config";

export const getNuibToken = async () => http.get('https://135.148.118.100/thembaniServer/public/api/token')

export const submitGenerateNuit = async (data, config) => http.post('https://135.148.118.100/thembaniServer/public/api/onboarding',data, config)

export const getResponse = async (id) => http.get(`https://thembani.miatech.com.ng/public/api/get-response?messageID=${id}`)