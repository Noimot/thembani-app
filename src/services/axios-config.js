import axios from 'axios';
import { TokenName } from './constants';

const baseUrl = process.env.REACT_APP_BASE_URL;
const http = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json', "Accept": '*/*', 'Api-key': 'ml7h7L8nN8Q2yA',

  }
});

http.interceptors.request.use(
  (config) => {
    if (localStorage.getItem(TokenName)) {
      const token = localStorage.getItem(TokenName);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    const err = error;
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (request) => {
    const req = request;
    return req;
  },
  (error) => {
    const err = error;
    return Promise.reject(err);
  }
);

export default http;
