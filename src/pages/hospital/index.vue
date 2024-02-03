<!--
 * @Author: yutaiqi
 * @Date: 2024-01-13 21:55:14
 * @LastEditTime: 2024-01-28 12:13:22
 * @LastEditors: yutaiqi
 * @Description: 医院首页
 * @FilePath: /sytstudy/src/pages/hospital/index.vue
-->
<template>
    <div class="hospital">
        <!-- 左侧导航区域 -->
        <div class="hospital-menu">
            <div class="top">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span> / 医院信息</span>
            </div>
            <el-menu :default-active="$route.path" class="hospital-menu" @select="handleOpen">
                <el-menu-item v-for="(menu, index) in menuArr" :index="menu.path" :key="index">
                    <template #title>
                        <el-icon>
                            <component :is="menu.icon" />
                        </el-icon>
                        <span>{{ menu.name }}</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧内容展示区域：路由展示组件 -->
        <!-- <Suspense> -->
            <div class="hospital-content">
                <router-view></router-view>
            </div>
        <!-- </Suspense> -->
    </div>
</template>
  
<script lang="ts" setup>
import {
    Document,
    Location,
    Setting,
    Operation,
    CircleCloseFilled,
    HomeFilled
} from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail.ts'
const $router = useRouter()
const $route = useRoute()
const detailStore = useDetailStore()
const handleOpen = (path: string) => {
    $router.push({ path, query: { hoscode: $route.query.hoscode } })
}
interface PathRouter {
    path: string
    name: string
    icon: any
}
// router定义
let menuArr: Array<PathRouter> = [
    {
        path: '/hospital/regist',
        name: '预约挂号',
        icon: Document
    },
    {
        path: '/hospital/detail',
        name: '医院详情',
        icon: Setting
    },
    {
        path: '/hospital/notify',
        name: '预约通知',
        icon: Location
    },
    {
        path: '/hospital/clinicPause',
        name: '停诊信息',
        icon: Operation
    },
    {
        path: '/hospital/search',
        name: '查询/取消',
        icon: CircleCloseFilled
    }
]
onMounted(() => {
    detailStore.getHospital($route.query.hoscode as string)
    detailStore.getHostpitalDeptments($route.query.hoscode as string)
})
</script>
<style scoped lang="scss">
.hospital {
    width: 100%;
    height: 100%;
    display: flex;

    .hospital-menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;

        .top {
            color: #7f7f7f;
        }
    }

    .hospital-content {
        flex: 8;
    }
}
</style>