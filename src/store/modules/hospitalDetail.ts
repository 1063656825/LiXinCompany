/*
 * @Author: yutaiqi
 * @Date: 2024-01-23 23:41:31
 * @LastEditTime: 2024-01-27 22:48:16
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /sytstudy/src/store/modules/hospitalDetail.ts
 */
import { defineStore } from 'pinia'
import { getHostpitalDetail } from '@/api/hospital/index.ts'
import { HosPitalDetail } from '@/api/hospital/type'
import { DetailState } from './interface'
// 获取科室数据
import { getHostpitalDepartment } from '@/api/hospital/index'
const useDetailStore = defineStore('Detail', {
    state: (): DetailState => {
        return {
            hospitalInfo: {} as HosPitalDetail,
            departmentMenu: []
        }
    },
    actions: {
        // 获取医院信息的方法
        async getHospital(hoscode: string) {
            const result = await getHostpitalDetail(hoscode)
            if (result.code === 200) {
                this.hospitalInfo = result.data
            }
        },
        // 获取医院科室信息
        async getHostpitalDeptments(hoscode: string) {
            let result = await getHostpitalDepartment(hoscode)
            if (result.code === 200) {
                this.departmentMenu = result.data ?? []
            }
        }
    },
    getters: {

    }
})
export default useDetailStore
