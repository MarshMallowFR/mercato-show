import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

let token = '';

export const getToken = async (): Promise<string> => {
  const url = 'https://api.twitter.com/oauth2/token';
  console.log(
    'Basic ' +
      btoa(
        import.meta.env.VITE_APP_API_TWITTER_KEY +
          ':' +
          import.meta.env.VITE_APP_API_TWITTER_SECRET,
      ),
  );
  const data = await axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization:
        'Basic ' +
        btoa(
          import.meta.env.VITE_APP_API_TWITTER_KEY +
            ':' +
            import.meta.env.VITE_APP_API_TWITTER_SECRET,
        ),
    },
    data: 'grant_type=client_credentials',
  });
  console.log(data);
  const { access_token } = data.data;
  return access_token;
};

export const api = async (
  url: string,
  options: AxiosRequestHeaders = {},
): Promise<AxiosResponse> => {
  if (!token) {
    token = await getToken();
  }
  return axios(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};
