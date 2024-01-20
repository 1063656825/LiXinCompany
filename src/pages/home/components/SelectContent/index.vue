<!--
 * @Author: yutaiqi
 * @Date: 2024-01-15 22:12:02
 * @LastEditTime: 2024-01-18 23:47:47
 * @LastEditors: yutaiqi
 * @Description: 筛选区域
 * @FilePath: /sytstudy/src/pages/home/components/SelectContent/index.vue
-->
<script setup lang='ts'>
import { Ref,ref,reactive, onMounted, defineEmits } from 'vue'
import { getHostpitalDic } from '@/api/home/index.ts'
import { HospitalDicData } from '@/api/home/type.ts'
interface selectForm {
    level: string,
    area: string
}
let form: selectForm = reactive({
    level: '',
    area: ''
})
// let { hosAreaValue, hosLevelValue } = defineProps({
//     hosAreaValue: {
//         type: String,
//         default: ''
//     },
//     hosLevelValue: {
//         type: String,
//         default: ''
//     }
// })

const emit = defineEmits(['update:hos-area-value','update:hos-level-value','change'])

// 医院等级
let hosLevel: Ref<HospitalDicData> = ref([] as HospitalDicData)
// 地区
let hosArea: Ref<HospitalDicData> = ref([] as HospitalDicData)
onMounted(()=>{
    initData()
})
// 初始化数据
async function initData() {
    let hosLevelReq = await getHostpitalDic('Hostype')
    if(hosLevelReq.code == 200) hosLevel.value = hosLevelReq.data
    let hosAreaReq = await getHostpitalDic("Beijin")
    if(hosAreaReq.code == 200) hosArea.value = hosAreaReq.data
}
// 切换等级
function changeLevel(val: any) {
    console.log(val,'level');
    
    emit('update:hos-level-value',val)
    emit('change')
}
// 切换区域
function changeArea(val: any) {
    console.log(val,'area');

    emit('update:hos-area-value',val)
    emit('change')

}
</script>
<template>
    <div class="select-content">
        <span class="select-content__title">医院</span>
        <el-form :model="form">
            <el-form-item label="等级:">
                <el-radio-group v-model="form.level" @change="changeLevel">
                    <el-radio :label="''">全部</el-radio>
                    <el-radio v-for="item in hosLevel" :key="item.id" :label="item.value">{{ item.name }}</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
         <el-form :model="form">
            <el-form-item label="地区:">
                <el-radio-group v-model="form.area" @change="changeArea">
                    <el-radio :label="''">全部</el-radio>
                    <el-radio v-for="item in hosArea" :key="item.id" :label="item.value">{{ item.name }}</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang='scss'>
.select-content__title{
    font-weight: 900;
}
:deep(.el-radio__input)  {
    display: none ;
} 
:deep(.el-form-item){
    margin-bottom: 0px !important;
}

</style>
