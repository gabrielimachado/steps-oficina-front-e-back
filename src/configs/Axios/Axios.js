import axios from 'axios'

import { getToken } from '../../services/auth'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: getToken(),
  }

  return config
})
