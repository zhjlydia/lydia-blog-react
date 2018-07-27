import config from "../config.js"
import axios from "axios"

axios.defaults.baseURL=config.apiConfig.baseUrl
console.log(config.apiConfig.baseUrl);
// 请求拦截
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

const articleApi={
    getFrontArticleList(data){
        var param={
            pageIndex:1,
            pageSize:10
        }
        return axios.get("/Article/getFrontArticleList",{params:param})
    }
}

export {articleApi}



