<!--
 * @Author: yutaiqi
 * @Date: 2024-01-14 13:24:59
 * @LastEditTime: 2024-01-23 23:00:47
 * @LastEditors: yutaiqi
 * @Description: 首页搜索区域
 * @FilePath: /sytstudy/src/pages/home/components/Search/index.vue
-->
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { getHostpitalInfo } from '@/api/home/index.ts'
import { Hospital } from '@/api/home/type.ts'
import { useRouter } from 'vue-router'
const state = ref('')
const $router = useRouter()
type HosList = {
    hosname: string,
    hoscode: string
}

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
    getHostpitalInfo(queryString).then(result =>{
        let showData:Array<HosList> = []
        if(result.code === 200){
            showData = result.data.map((item: Hospital) => {
                return {
                    hosname: item.hosname,
                    hoscode: item.hoscode
                }
            })
            console.log(showData,'showdata');
        }
        cb(showData)
    })
}

const handleSelect = (item: Record<string, any>) => {
    console.log(item,state,'state')
    $router.push({path:'/hospital/regist', query: {hoscode: item.hoscode}})
}

onMounted(() => {
})
</script>
<template>
    <div class="search-content">
        <el-autocomplete
            class="search-content__select"
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            :trigger-on-focus="false"
            value-key="hosname"
            placeholder="请输入医院名称"
            @select="handleSelect"
        />
        <el-button type="primary" :icon="Search">搜 索</el-button>
    </div>
</template>
<style scoped lang='scss'>
.search-content {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(.search-content__select) {
        width: 610px;
        height: 32px;
        margin-right: 10px;
    }
}
</style>

  
 
  