<!--
 * @Author: yutaiqi
 * @Date: 2024-01-13 23:14:46
 * @LastEditTime: 2024-01-14 13:21:57
 * @LastEditors: yutaiqi
 * @Description: 轮播图
 * @FilePath: /syt/syt/src/pages/home/components/Carousel/index.vue
-->
<script setup lang='ts'>
const imageUrl:string =  new URL('@/assets/images/web-banner-1.png', import.meta.url).href

</script>

<template>
    <el-carousel trigger="click" height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
            <el-image :src="imageUrl" />
        </el-carousel-item>
    </el-carousel>
</template>
<style scoped lang='scss'></style>

