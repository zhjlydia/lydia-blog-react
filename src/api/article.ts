import http from './index'

export const getArticles = (data: any) => {
  return http.get('article', data)
}
