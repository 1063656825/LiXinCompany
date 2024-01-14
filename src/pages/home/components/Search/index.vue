<!--
 * @Author: yutaiqi
 * @Date: 2024-01-14 13:24:59
 * @LastEditTime: 2024-01-14 13:37:03
 * @LastEditors: yutaiqi
 * @Description: 首页搜索区域
 * @FilePath: /syt/syt/src/pages/home/components/Search/index.vue
-->
<script lang="ts" setup>
import { ref } from 'vue'
//引入element-plus提供图标
import { Search } from "@element-plus/icons-vue";

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
]
const list = states.map((item): ListItem => {
    return { value: `value:${item}`, label: `label:${item}` }
})

interface ListItem {
    value: string
    label: string
}

const value = ref([])
const options = ref<ListItem[]>([])
const loading = ref(false)

const remoteMethod = (query: string) => {
    if (query !== '') {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            options.value = list.filter((item) => {
                return item.label.toLowerCase().includes(query.toLowerCase())
            })
        }, 200)
    } else {
        options.value = []
    }
}
</script>
<template>
    <div class="search-content">
        <el-select-v2 class="search-content__select" v-model="value"  multiple filterable remote :remote-method="remoteMethod"
            clearable :options="options" :loading="loading" placeholder="Please enter a keyword" />
        <el-button type="primary" :icon="Search">搜 索</el-button>
    </div>
</template>
<style scoped lang='scss'>
.search-content{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .search-content__select{
        width: 610px;
        height: 32px;
        margin-right: 10px;
    }
}
</style>

  
 
  