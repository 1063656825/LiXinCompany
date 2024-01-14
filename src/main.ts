/*
 * @Author: yutaiqi
 * @Date: 2024-01-11 21:45:54
 * @LastEditTime: 2024-01-13 22:42:45
 * @LastEditors: yutaiqi
 * @Description: vue3框架提供的方法create App方法，可以用来创建应用实例方法
 * @FilePath: /syt/syt/src/main.ts
 */
// 
import { createApp } from 'vue'
// 路由
import router from './router'
// eleemtPlus引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 主页面文件
import App from './App.vue'

// 组件
import HospitalTop from "@/components/HospitalTop/index.vue"
import HospitalBottom from "@/components/HospitalBottom/index.vue"
const app = createApp(App)
// 注册全局组件
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

// 路由注册
app.use(router)
// ui组件
app.use(ElementPlus)

app.mount('#app')
