/*
 * @Author: yutaiqi
 * @Date: 2024-01-13 21:53:37
 * @LastEditTime: 2024-01-13 22:34:18
 * @LastEditors: yutaiqi
 * @Description: 路由文件
 * @FilePath: /syt/syt/src/router/index.ts
 */
import { createRouter,RouteRecordRaw,createWebHistory } from 'vue-router'
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
        component: () => import('@/pages/hospital/index.vue') 
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