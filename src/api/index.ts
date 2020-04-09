import axios from 'axios'
export class APIError extends Error {
  readonly code: number
  constructor(code: number, message?: string) {
    super(message)
    this.code = code
  }
}
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  async res => {
    if (res.status === 401) {
      //注销
      window.location.pathname = '/login'
    }
    if (!res.data) {
      return res.data
    }
    if (res.data.errorCode) {
      throw new APIError(res.data.errorCode, res.data.errorMessage)
    }
    return res.data.data
  },
  async (error: any) => {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.errorMessage || error.response.data.message)
    }
    throw new Error(error.message)
  }
)
export default axiosInstance
