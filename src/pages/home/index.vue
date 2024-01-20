<!--
 * @Author: yutaiqi
 * @Date: 2024-01-13 21:54:31
 * @LastEditTime: 2024-01-18 23:46:34
 * @LastEditors: yutaiqi
 * @Description: 首页
 * @FilePath: /sytstudy/src/pages/home/index.vue
-->
<script setup lang='ts'>
import Carousel from './components/Carousel/index.vue'
import Search from './components/Search/index.vue'
import SelectContent from './components/SelectContent/index.vue'
import HospitalCard from './components/HospitalCard/index.vue'
import { Ref, onMounted,ref } from 'vue'

import { getHostpitalList } from '@/api/home/index.ts'
import { HospitalData } from '@/api/home/type.ts'
let current:Ref<number> = ref(1);
let limit:Ref<number> = ref(10);
let cardList:Ref<HospitalData> = ref([])
let total:Ref<number> = ref(0)
let hosLevelValue:Ref<string> = ref('')
let hosAreaValue:Ref<string> = ref('')
onMounted(()=>{
    getHostpitalListInfo()
})
const getHostpitalListInfo = ()=>{
    getHostpitalList(current.value,limit.value,hosLevelValue.value,hosAreaValue.value).then(res=>{
        if(res.code == 200){
            total.value = res.data.totalElements
            cardList.value = res.data.content
        }
        
    })
}
</script>
<template>
    <!-- 轮播图 -->
    <Carousel />
    <!-- 搜索 -->
    <Search />
    <!-- 底部内容区域：左侧筛选区域、内容展示区域；右侧推荐区域 -->
    <el-row :gutter="20">
        <el-col :span="18">
            <!-- 筛选区域 -->
            <SelectContent v-model:hos-area-value="hosAreaValue" v-model:hos-level-value="hosLevelValue" @change="getHostpitalListInfo"/>
            <!-- 医院展示区 -->
            <HospitalCard v-model:current="current" v-model:limit="limit" :total="total" :data="cardList" @change="getHostpitalListInfo"/>
        </el-col>
        <el-col :span="6">
            margin-right
        </el-col>
    </el-row>
</template>
<style scoped lang='scss'></style>
