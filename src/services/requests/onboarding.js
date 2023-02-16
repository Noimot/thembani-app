import http from "../axios-config";

export const getNuibToken = async () => http.get("token");

export const requestCacc = async () => http.get("cacc");

export const generateNuit = async (data) =>
  http.post("onboarding", data, {
    Headers: {
      "'Content-Type'": "multipart/form-data",
    },
  });

export const getMessageIdApi = async () =>
  http.get("get-response?messageID=0000000000011092093");

export const postUserProfileApi = async (data) => http.post('profile', data);
