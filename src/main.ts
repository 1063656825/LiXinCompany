/*
 * @Author: yutaiqi
 * @Date: 2024-01-11 21:45:54
 * @LastEditTime: 2024-01-28 14:43:33
 * @LastEditors: yutaiqi
 * @Description: vue3框架提供的方法create App方法，可以用来创建应用实例方法
 * @FilePath: /sytstudy/src/main.ts
 */
// 
import { createApp } from 'vue'
//引入清除默认样式
import '@/style/reset.scss'
// 路由
import router from './router'
// eleemtPlus引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 导入pinia
import pinia from '@/store'

// elementPlus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 主页面文件
import App from './App.vue'

// 组件
import HospitalTop from "@/components/HospitalTop/index.vue"
import HospitalBottom from "@/components/HospitalBottom/index.vue"

// 引入登录组件
import Login from "@/components/Login/index.vue"
const app = createApp(App)
// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', Login)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 路由注册
app.use(router)
// ui组件
app.use(ElementPlus,{
    locale: zhCn,
  })
// pinia注册
app.use(pinia)

app.mount('#app')
