/*
 * @Author: yutaiqi
 * @Date: 2024-01-16 23:12:54
 * @LastEditTime: 2024-01-28 15:23:36
 * @LastEditors: yutaiqi
 * @Description: axios请求封装
 * @FilePath: /sytstudy/src/utils/request.ts
 */
// 为什么对axios进行封装？封装目的是什么
/**
 * 1. 利用axios请求、响应拦截器功能
 * 2. 请求拦截器，一版可以在请求头中携带公共的参数：token
 * 3. 响应拦截，可以简化服务器返回的数据，处理http网络错误
 */

// import axios from 'axios'
// // 通过axios.create方法创建一个axios实例，可以设置基础路径、超时的时间的设置
// const instance = axios.create({
//     baseURL: '/api',
//     timeout: 5000
// })

// // 请求拦截器
// instance.interceptors.request.use(
//     config => {
//         // // 在请求头中携带token
//         // if (localStorage.getItem('token')) {
//         //   config.headers.Authorization = localStorage.getItem('token')
//         // }
//         // config: 请求拦截器回调注入的对象(配置对象)，配置对象的身上最重要的一件事就是headers

//         return config
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// // 响应拦截器
// instance.interceptors.response.use(
//     response => {
//         // 1. 如果服务器返回的http状态码是200，就直接返回服务器返回的数据
//         // 2. 如果服务器返回的http状态码不是200，就抛出错误
//         if (response.status === 200) {
//             return response.data
//         } else {
//             throw new Error(response.data.message)
//         }
//     },
//     error => {
//         return Promise.reject(error.message || error)
//     }
// )

// export const request = instance
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig,InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
    code: number;
    message: string;
    ok: boolean;
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
    data: T;
}
const URL: string = '/api'
enum RequestEnums {
    TIMEOUT = 20000,
    OVERDUE = 600, // 登录失效
    FAIL = 999, // 请求失败
    SUCCESS = 200, // 请求成功
}
const config = {
    // 默认地址
    baseURL: URL as string,
    // 设置超时时间
    timeout: RequestEnums.TIMEOUT as number,
    // 跨域时候允许携带凭证
    withCredentials: true
}

class RequestHttp {
    // 定义成员变量并指定类型
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig) {
        // 实例化axios
        this.service = axios.create(config);

        /**
         * 请求拦截器
         * 客户端发送请求 -> [请求拦截器] -> 服务器
         * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
         */
        this.service.interceptors.request.use(
            // 高版本 axios 这个类型 AxiosRequestConfig 报错，需要使用InternalAxiosRequestConfig替换
            (config: InternalAxiosRequestConfig) => {
                // const token = localStorage.getItem('token') || '';
                // return {
                //     ...config,
                //     headers: {
                //         'x-access-token': token, // 请求头中携带token信息
                //     }
                // }
                
                return config;
            },
            (error: AxiosError) => {
                // 请求报错
                Promise.reject(error)
            }
        )

        /**
         * 响应拦截器
         * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
         */
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data, config } = response; // 解构
                if (data.code === RequestEnums.OVERDUE) {
                    // 登录信息失效，应跳转到登录页面，并清空本地的token
                    localStorage.setItem('token', '');
                    // router.replace({
                    //   path: '/login'
                    // })
                    return Promise.reject(data);
                }
                // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
                if (data.code && data.code !== RequestEnums.SUCCESS) {
                    ElMessage.error(data); // 此处也可以使用组件提示报错信息
                    return Promise.reject(data)
                }
                return data;
            },
            (error: AxiosError) => {
                const { response } = error;
                if (response) {
                    this.handleCode(response.status)
                }
                if (!window.navigator.onLine) {
                    ElMessage.error('网络连接失败');
                    // 可以跳转到错误页面，也可以不做操作
                    // return router.replace({
                    //   path: '/404'
                    // });
                }
            }
        )
    }
    handleCode(code: number): void {
        switch (code) {
            case 401:
                ElMessage.error('登录失败，请重新登录');
                break;
            default:
                ElMessage.error('请求失败');
                break;
        }
    }

    // 常用方法封装
    get<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.get(url, { params });
    }
    post<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.post(url, params);
    }
    put<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.put(url, params);
    }
    delete<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.delete(url, { params });
    }
}

// 导出一个实例对象
export const $http =  new RequestHttp(config);