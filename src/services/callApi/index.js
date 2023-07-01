import axios from "axios";

const makeCallApi = ({
  baseURL,
  url = "",
  method = "GET",
  params = {},
  data = {},
  headers = {},
  responseType = null,
  timeout = 20000,
}) => {
  const callApi = axios.create({
    baseURL: baseURL || import.meta.env.VITE_BACKEND_URL,
    timeout,
  });

  callApi.interceptors.request.use(
    (conf) => {
      const config = conf;
      config.headers = {
        "Content-Type": "application/json",
        ...config.headers,
        ...headers,
      };

      return config;
    },
    (error) => Promise.reject(error)
  );

  callApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return callApi({
    url,
    method,
    params,
    data,
    responseType,
  });
};

export default makeCallApi;
