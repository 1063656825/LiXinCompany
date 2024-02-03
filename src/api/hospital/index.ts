/*
 * @Author: yutaiqi
 * @Date: 2024-01-23 23:30:32
 * @LastEditTime: 2024-01-28 15:23:50
 * @LastEditors: yutaiqi
 * @Description: 医院api
 * @FilePath: /sytstudy/src/api/hospital/index.ts
 */
import { $http } from '@/utils/request.ts'
import { HosPitalDetail,DeparmentArr } from './type.ts'
enum API {
    // 获取医院信息
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    // 获取医院科室信息
    HOSPITALDEPARTMENT_URL = '/hosp/hospital/department/'
}

 // 获取医院信息
 export const getHostpitalDetail = ( hoscode: string) => $http.get<HosPitalDetail>(`${API.HOSPITALDETAIL_URL}/${hoscode}`)
// 获取医院科室信息
export const getHostpitalDepartment = ( hoscode: string) => $http.get<DeparmentArr>(`${API.HOSPITALDEPARTMENT_URL}/${hoscode}`)