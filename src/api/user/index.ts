/*
 * @Author: yutaiqi
 * @Date: 2024-01-28 15:14:10
 * @LastEditTime: 2024-01-29 21:27:36
 * @LastEditors: yutaiqi
 * @Description: 用户接口
 * @FilePath: /sytstudy/src/api/user/index.ts
 */
import { $http } from "@/utils/request";
import { LoginData,UserInfo } from "./type"
const API = {
    // 获取手机验证码
    GETMOBILECODE: '/sms/send/',
    // 注册
    REGISTER: '/user/register',
    // 登录
    LOGIN: '/user/login',
    // 获取用户信息
    GETUSERINFO: '/user/getUserInfo',
    // 修改用户信息
    UPDATEUSERINFO: '/user/updateUserInfo',
    // 修改密码
    UPDATEPASSWORD: '/user/updatePassword',
}
// 获取手机验证码
export const getMobileCode = (Phone: string) => $http.get<string>(`${API.GETMOBILECODE}/${Phone}`)
// 登录
export const login = (data: LoginData) => $http.post<UserInfo>(API.LOGIN, data)