import http from './index'

export const login = (data: any) => {
  return http.post('users/login', data)
}
