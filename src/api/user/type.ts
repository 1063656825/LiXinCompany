/*
 * @Author: yutaiqi
 * @Date: 2024-01-28 15:14:15
 * @LastEditTime: 2024-01-29 21:27:26
 * @LastEditors: yutaiqi
 * @Description: 用户类型
 * @FilePath: /sytstudy/src/api/user/type.ts
 */
//用户登录接口需要携带参数类型
export interface LoginData {
    phone: string,
    code: string
}

//登录接口返回用户信息数据
export interface UserInfo {
    name: string,
    token: string
}