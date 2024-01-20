/*
 * @Author: yutaiqi
 * @Date: 2024-01-16 21:43:58
 * @LastEditTime: 2024-01-19 23:06:59
 * @LastEditors: yutaiqi
 * @Description: 主页api
 * @FilePath: /sytstudy/src/api/home/index.ts
 */
import { $http } from '@/utils/request.ts'
import { HospitalDataRes,HospitalDicData,HospitalData } from './type.ts'
enum API {
    // 获取医院分页列表
    HOSPITAL_LIST = '/api/hosp/hospital',
    //获取医院的等级与地区接口
    HOSPITALLEVElANDREGION_URL = '/api/cmn/dict/findByDictCode/',
    //根据关键字医院的名字获取数据
    HOSPITALINFO_URL = '/api/hosp/hospital/findByHosname/'
}

// 获取医院列表
export const getHostpitalList = (pages: number, curent: number, hostype = '', districtCode = '') => $http.get<HospitalDataRes>(`${API.HOSPITAL_LIST}/${pages}/${curent}?hostype=${hostype}&districtCode=${districtCode}`) 

// 获取医院等级
export const getHostpitalDic = ( type: string) => $http.get<HospitalDicData>(`${API.HOSPITALLEVElANDREGION_URL}/${type}`)

// 获取医院联想信息
export const getHostpitalInfo = ( hostname: string) => $http.get<HospitalData>(`${API.HOSPITALINFO_URL}${hostname}`)