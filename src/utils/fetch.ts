import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
} from 'axios';

interface IRequestMethod {
  (path: string, data?: object, options?: AxiosRequestConfig): AxiosPromise<
    any
  >;
}

interface IDelayMethod {
  (time: number): Promise<any>;
}

const instance: AxiosInstance = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers: {
    // Authoriztion: `Bearer ${localStorage.getItem('token')}`
  },
});

// 响应拦截处理
instance.interceptors.response.use(
  response => response,
  error => {
    if (process.env.NODE_ENV === 'production') {
      const Sentry = require('@sentry/browser');
      Sentry.captureException(error);
    }
    // handel response errors
  },
);

// 请求拦截处理
// instance.interceptors.request.use((config) => {
//   // handel headers configs
//   return config
// })

const request: IRequestMethod = (
  path: string,
  options?: AxiosRequestConfig,
) => {
  return instance
    .request({
      url: path,
      ...(options || {}),
    })
    .then((res: AxiosResponse) => res.data);
};

export const get: IRequestMethod = (
  path: string,
  data?: object,
  options?: AxiosRequestConfig,
) => {
  return instance
    .get(path, {
      ...(options || {}),
      params: data || {},
    })
    .then((res: AxiosResponse) => res.data);
};

export const post: IRequestMethod = (
  path: string,
  data?: object,
  options?: AxiosRequestConfig,
) => {
  return instance
    .post(path, data || {}, options)
    .then((res: AxiosResponse) => res.data);
};

export const delay: IDelayMethod = (time: number) => {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve();
    }, time);
  });
};

export default request;

/* eslint-disable */
