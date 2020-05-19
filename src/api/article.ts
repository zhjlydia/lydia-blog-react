import http from './index'

export const getArticles = (data: any) => {
  return http.get('article', data)
}

export const addArticle = (data: any) => {
  return http.post('article', data)
}

export const getArticle = (slug: string, data: any) => {
  return http.get(`article/${slug}`, data)
}

export const updateArticle = (slug: string, data: any) => {
  return http.put(`article/${slug}`, data)
}

export const deleteArticle = (slug: string, data: any) => {
  return http.delete(`article/${slug}`, data)
}
