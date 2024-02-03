/*
 * @Author: yutaiqi
 * @Date: 2024-01-13 21:53:37
 * @LastEditTime: 2024-01-23 22:55:59
 * @LastEditors: yutaiqi
 * @Description: 路由文件
 * @FilePath: /sytstudy/src/router/index.ts
 */
import { createRouter,RouteRecordRaw,createWebHistory } from 'vue-router'
import {
    Document,
    Location,
    Setting,
    Operation,
   CircleCloseFilled,
} from '@element-plus/icons-vue'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component: () => import('@/pages/home/index.vue') 
    },
    {
        path:'/hospital',
        component: () => import('@/pages/hospital/index.vue'),
        children: [
            {
                path: 'regist',
                name: 'regist',
                component: () => import('@/pages/hospital/regist/index.vue'),
                meta: {
                    title: '预约挂号',
                    icon: Document
                }
            },
            {
                path: 'detail',
                name: 'detail',
                component: () => import('@/pages/hospital/detail/index.vue'),
                meta: {
                    title: '医院详情',
                    icon: Setting
                }
            },
            {
                path: 'notify',
                name: 'notify',
                component: () => import('@/pages/hospital/notify/index.vue'),
                meta: {
                    title: '预约通知',
                    icon: Location
                }
            },
            {
                path: 'clinicPause',
                name: 'clinicPause',
                component: () => import('@/pages/hospital/clinicPause/index.vue'),
                meta: {
                    title: '停诊信息',
                    icon: Operation
                }
            },
            {
                path: 'search',
                name: 'search',
                component: () => import('@/pages/hospital/search/index.vue'),
                meta: {
                    title: '查询/取消',
                    icon: CircleCloseFilled
                }
            }
        ]
    }
]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes,
  // 5.滚动行为：控制滚动条的位置
  scrollBehavior(){
    return {left:0,top:0}
  }   
})
export default router