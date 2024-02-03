<!--
 * @Author: yutaiqi
 * @Date: 2024-01-23 22:37:26
 * @LastEditTime: 2024-01-24 23:20:17
 * @LastEditors: yutaiqi
 * @Description: 停诊通知
 * @FilePath: /sytstudy/src/pages/hospital/clinicPause/index.vue
-->
<template>
    <div>
        <div class="info">
            <h1>{{ hospitalDetail.hospitalInfo.hospital?.hosname }}听诊信息</h1>
            <el-empty description="暂无信息" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
//引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitalDetail'
const hospitalDetail = useDetailStore()
</script>
  
<style scoped lang="scss">
.info {
    h1 {
        text-align: center;
        font-size: 30px;
    }
}
</style>
  
