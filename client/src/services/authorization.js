import axios from "axios";

export const requestAuth = async ({ method, data = {} }) => {
  const response = await axios[method](`/api/auth/signin`, data);
  return response.data;
};
