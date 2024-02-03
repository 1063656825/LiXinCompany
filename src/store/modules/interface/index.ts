/*
 * @Author: yutaiqi
 * @Date: 2024-01-24 22:18:04
 * @LastEditTime: 2024-01-27 22:48:09
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /sytstudy/src/store/modules/interface/index.ts
 */
import type { HosPitalDetail,DeparmentArr } from '@/api/hospital/type'

export interface DetailState {
    hospitalInfo: HosPitalDetail
    departmentMenu: DeparmentArr
}