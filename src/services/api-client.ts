import axios, {AxiosRequestConfig} from "axios";

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "622bc2cfa75740fd930457c843314793",
  },
});

class APIClient<T>{
  constructor(public endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
  }
}

export default APIClient;

export interface FetchResponse<T> {
  count: number;
  next: string | null,
  prev: string | null,
  results: T[];
}
