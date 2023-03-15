import axios from "axios";

export const fetchMethod = async (url: string, method: string) => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response?.status) {
        return Promise.reject(error);
      }
    }
  );
  return axios({
    url,
    method,
  });
};
