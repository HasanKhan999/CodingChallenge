import { API_BASE_URL, MOCK_API_KEY } from "@env";
import axios, { AxiosError, AxiosResponse } from "axios";

export const appAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "x-api-key": MOCK_API_KEY,
  },
});

export const callAPI = async <T>(
  axiosPromise: Promise<AxiosResponse<T>>,
): Promise<T> => {
  try {
    return await (
      await axiosPromise
    ).data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err.response?.data.message || err?.message;
    }
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
};
