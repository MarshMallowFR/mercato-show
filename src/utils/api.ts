import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

export const api = async (
  url: string,
  options: AxiosRequestHeaders = {},
): Promise<AxiosResponse> => {
  return axios(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    ...options,
  });
};
