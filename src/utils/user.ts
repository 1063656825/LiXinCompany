/*
 * @Author: yutaiqi
 * @Date: 2024-01-29 22:03:08
 * @LastEditTime: 2024-01-29 22:39:06
 * @LastEditors: yutaiqi
 * @Description: 用户信息处理
 * @FilePath: /sytstudy/src/utils/user.ts
 */
import { UserInfo } from '@/api/user/type'
// 本地存储操作
export const SET_USERINFO = (userInfo:UserInfo) =>{
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export const GET_USERINFO = ():UserInfo => {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo) : {}
}

export const GET_USERNAME = ():string => {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo)?.name  : ''
}

export const GET_USERTOKEN = ():string => {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo)?.token : {}
}

export const REMOVE_USERINFO = () =>{
    localStorage.removeItem('userInfo')
}