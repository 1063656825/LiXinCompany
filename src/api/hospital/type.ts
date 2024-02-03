/*
 * @Author: yutaiqi
 * @Date: 2024-01-23 23:30:37
 * @LastEditTime: 2024-01-28 10:37:54
 * @LastEditors: yutaiqi
 * @Description: 医院api类型
 * @FilePath: /sytstudy/src/api/hospital/type.ts
 */
//代表医院详情的数据
export interface HosPitalDetail {
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    },
    "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
            "hostypeString": string,
            "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string,
        "intro": null,
        "route": string,
        "status": number,
        "bookingRule": null
    }
}

//代表医院科室的数据
export interface Deparment {
    "depcode": string,
    "depname": string,
    "children"?: Deparment[]
}
export type DeparmentArr = Deparment[]

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