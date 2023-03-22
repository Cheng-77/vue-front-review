// Set config defaults when creating the instance
import axios from "axios";
import { Notification } from 'element-ui';

const instance = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 3000,  //单位毫秒
    headers: {'X-Custom-Header': 'foobar'}
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let {status,message,data} = response.data;

    if (status == 20000){
        return data;
    }else {
        Notification.error(message);
        return Promise.reject(false);
    }

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance; //js对象 ，给别人使用


