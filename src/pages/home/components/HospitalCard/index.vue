<!--
 * @Author: yutaiqi
 * @Date: 2024-01-16 21:55:22
 * @LastEditTime: 2024-01-23 23:01:09
 * @LastEditors: yutaiqi
 * @Description: 医院卡片
 * @FilePath: /sytstudy/src/pages/home/components/HospitalCard/index.vue
-->

<script setup lang='ts'>
import { Ref,ref, defineProps, defineEmits, watch } from 'vue'
import { HospitalData, Hospital } from '@/api/home/type';
import { useRouter } from 'vue-router';
const $router = useRouter()
let { current, limit, total, data } = defineProps({
    current: {
        type: Number,
        default: 1
    },
    limit: {
        type: Number,
        default: 10
    },
    total: {
        type: Number,
        default: 0
    },
    data: {
        type: Array,
        default: [] 
    }
})
const emit = defineEmits(['change', 'update:current', 'update:limit'])
// 当前页
let currentPage:Ref<number> = ref(current)
// 每页数量
let pageSize:Ref<number> = ref(limit)
// 总数量
const disabled:Ref<boolean> = ref(false)

// let hospitalData:Ref<HospitalData> = ref(data)
watch(data, (newvalue, oldvalue)=> {
    console.log(newvalue, oldvalue);

})

const handleSizeChange = (val: number) => {
    pageSize.value = val
    console.log(`${val} items per page`)
    emit('update:limit', val)
    emit('update:current', 1)
    emit('change')
}
const handleCurrentChange = (val: number) => {
    currentPage.value = val
    emit('update:current', val)
    emit('change')
}
const goDetail = (row:Hospital) => {
    $router.push({path:'/hospital/regist', query: {hoscode: row?.hoscode}})
}

</script>
<template>
    <div class="hospital-content">
        <el-card v-if="data.length > 0" shadow="hover" class="card-item__content" v-for="item in (data as HospitalData)" :key="item.id" @click="goDetail(item)">
            <div class="card-item__left">
                <div class="card-item__title">{{ item.hosname }}</div>
                <div class="card-item__bottom">
                    <div class="card-item__level">
                        <svg t="1705416993319" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1101" width="16" height="16">
                            <path
                                d="M747 832.62H317.45a55.46 55.46 0 0 1-55.39-55.39V449.06a55.46 55.46 0 0 1 55.39-55.39h76.67A39.61 39.61 0 0 0 426 377.52l124.5-170c19.94-27.22 54.32-36.92 85.54-24.15s49 43.79 44.09 77.18L663.3 376.14a15.33 15.33 0 0 0 15.17 17.53h100.88a87.66 87.66 0 0 1 87 98.32l-32.3 263.64A87.75 87.75 0 0 1 747 832.62zM317.45 438.67a10.4 10.4 0 0 0-10.39 10.39v328.17a10.4 10.4 0 0 0 10.39 10.39H747a42.7 42.7 0 0 0 42.34-37.47l32.31-263.63a42.65 42.65 0 0 0-42.34-47.85H678.47a60.34 60.34 0 0 1-59.7-69l16.8-115.54c2.26-15.5-7.09-25.17-16.59-29.06s-23-3.54-32.2 9.09l-124.5 170a84.79 84.79 0 0 1-68.16 34.56zM176.5 824.5A22.5 22.5 0 0 1 154 802V427a22.5 22.5 0 0 1 45 0v375a22.5 22.5 0 0 1-22.5 22.5z"
                                fill="#222222" p-id="1102"></path>
                        </svg>
                        <span>{{ item.param.hostypeString }}</span>
                    </div>
                    <div class="card-item__time">
                        <svg t="1705417086220" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2211" width="16" height="16">
                            <path
                                d="M512 1024a512 512 0 1 1 512-512 512.484848 512.484848 0 0 1-512 512z m0-959.353535a447.353535 447.353535 0 1 0 447.353535 447.353535A447.838384 447.838384 0 0 0 512 64.646465z"
                                fill="#3D3D3D" p-id="2212"></path>
                            <path
                                d="M751.838384 544.323232H512a32.323232 32.323232 0 0 1-32.323232-32.323232V176.161616a32.323232 32.323232 0 1 1 64.646464 0v303.515152h207.515152a32.323232 32.323232 0 0 1 0 64.646464z"
                                fill="#3D3D3D" p-id="2213"></path>
                            <path d="M877.252525 517.171717a354.262626 354.262626 0 0 1-708.363636 0" fill="#F683A2"
                                p-id="2214"></path>
                        </svg>
                        <span v-if="item.bookingRule">每天{{ item?.bookingRule.releaseTime }}放号</span>
                    </div>
                </div>
            </div>
            <div class="card-item__right">
                <el-image :src="`data:image/jpeg;base64,${item.logoData}`" class="card-item__img" />
            </div>
        </el-card>
        <el-empty v-else class="hospital-empty" description="医院数据为空" />
    </div>
    <el-pagination class="home-pagination" v-model:current-page="currentPage" v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100, 300, 400]" :small="true" :disabled="disabled" :background="true"
        layout="prev, pager, next, jumper, ->, total, sizes" :total="total" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
</template>
<style scoped lang='scss'>
.hospital-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .hospital-empty{
        width: 100%;
    }
}

.card-item__content {
    width: 48%;
    margin: 10px 0;

    :deep(.el-card__body) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .card-item__left {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .card-item__title {
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 20px;
            }

            .card-item__bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                color: #7f7f7f;

                div {
                    display: flex;
                    align-items: center;

                    span {
                        margin-left: 5px;
                    }
                }
            }
        }

        .card-item__right {
            display: flex;
            justify-content: center;
            align-items: center;

            .card-item__img {
                width: 50px;
                height: 50px;
            }
        }
    }
}

.home-pagination {
    width: 100%;
    margin: 10px 0;
}</style>
