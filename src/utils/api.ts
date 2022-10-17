import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

export const api = async (
  url: string,
  options: AxiosRequestHeaders = {},
): Promise<AxiosResponse> => {
  return axios(url, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    ...options,
  });
};
