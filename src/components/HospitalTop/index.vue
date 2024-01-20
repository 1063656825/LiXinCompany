<!--
 * @Author: yutaiqi
 * @Date: 2024-01-13 19:52:37
 * @LastEditTime: 2024-01-20 09:34:49
 * @LastEditors: yutaiqi
 * @Description: 共通头
 * @FilePath: /sytstudy/src/components/HospitalTop/index.vue
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
const $router = useRouter()
const backHome = () => $router.push('/')
</script>
<template>
    <div class="naver-top">
        <div class="naver-top__content">
            <div class="naver-top__left" @click="backHome">
                <img src="../../assets/images/logo.png" alt="" />
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="naver-top__right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.naver-top {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;

    .naver-top__content {
        width: 1200px;
        height: 70px;
        background: #fff;
        display: flex;
        justify-content: space-between;

        .naver-top__left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            p {
                font-size: 20px;
                color: #55a6fe;
            }
            &:hover{
                cursor: pointer;
            }
        }

        .naver-top__right {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #bbb;

            .help {
                margin-right: 10px;
            }
        }
    }
}
</style>
