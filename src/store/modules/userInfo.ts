/*
 * @Author: yutaiqi
 * @Date: 2024-01-28 14:44:43
 * @LastEditTime: 2024-01-29 22:47:27
 * @LastEditors: yutaiqi
 * @Description: 用户信息
 * @FilePath: /sytstudy/src/store/modules/userInfo.ts
 */
import { defineStore } from "pinia";
import { GET_USERNAME,REMOVE_USERINFO } from "@/utils/user";
import { UserInfo } from '@/api/user/type'
const useUserInfoStore = defineStore('Info', {
    state: () => ({
        userInfo: {} as UserInfo,
        loginVisible: false,
        userName: GET_USERNAME()
    }),
    actions: {
        setUserInfo(data: UserInfo) {
            this.userInfo = data
            this.userName = data.name
        },
        setLoginVisible(data: boolean) {
            this.loginVisible = data
        },
        logout() {
            this.userName = ''
            this.userInfo = {} as UserInfo
            REMOVE_USERINFO()

        }
    }
})
export default useUserInfoStore