<!--
 * @Author: yutaiqi
 * @Date: 2024-01-13 21:15:19
 * @LastEditTime: 2024-01-13 21:40:20
 * @LastEditors: yutaiqi
 * @Description: 底部区域
 * @FilePath: /syt/syt/src/components/HospitalBottom/index.vue
-->
<script setup lang='ts'>

</script>
<template>
    <div class="bottom">
        <div class="bottom-content">
            <span class="bottom-content__left">
                京ICP备 13018369号 电话挂号010-56253825
            </span>
            <div class="bottom-content__right">
                <span class="mr-10">联系我们</span>
                <span class="mr-10">合作伙伴</span>
                <span class="mr-10">用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.mr-10 {
    margin-right: 10px;
}

.bottom {
    width: 100%;
    height: 50px;
    background: #f0f2f5;
    display: flex;
    justify-content: center;

    .bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;
        height: 50px;
        font-size: 14px;
    }
}
</style>
