import http from "../axios-config";

export const getNuibToken = async () => http.get('token')

export const submitGenerateNuit = async (data, config) => http.post('onboarding',data, config)

export const getResponse = async (id) => http.get(`get-response?messageID=${id}`)