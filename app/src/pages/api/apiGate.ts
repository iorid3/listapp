import axios from "axios";

export const fetchMethod = async (url: string, data: any, method: string) => {
  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response?.status) {
        return Promise.reject(error);
      }
    }
  );
  return axios({
    url,
    data,
    method,
  });
};
