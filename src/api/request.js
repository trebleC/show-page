import axios from "axios";
import { BASR_URL } from "@/config";

export const request = (config) => {
    const instance = axios.create({
        baseURL: BASR_URL,
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    })
    
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, (err) => {
        return Promise.reject(err)
    })
    
    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    
    return instance(config);   
}
