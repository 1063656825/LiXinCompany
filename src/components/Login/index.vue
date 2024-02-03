<!--
 * @Author: yutaiqi
 * @Date: 2024-01-28 00:30:30
 * @LastEditTime: 2024-02-01 23:00:22
 * @LastEditors: yutaiqi
 * @Description: 登录页面
 * @FilePath: /sytstudy/src/components/login/index.vue
-->
<template>
    <el-dialog v-model="userInfoStore.loginVisible" title="用户登录" width="60%" :before-close="handleClose">
        <el-row>
            <el-col :span="12">
                <div class="login-phone" v-show="loginType === 'phone'">
                    <el-form ref="loginRef" :model="loginInfo" label-position="left" :rules="loginRule">
                        <el-form-item prop="phone">
                            <el-input v-model="loginInfo.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-input v-model="loginInfo.code" placeholder="请输入验证码">
                                <template #append>
                                    <el-button :disabled="!isPhone || timeout > 0" @click="sendCode">获取验证码<span v-show="timeout > 0">{{ timeout }}</span></el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <el-button @click="handleLogin(loginRef)" class="login-btn" type="primary">用户登录</el-button>
                    <!-- 微信登录 -->
                    <div class="login-change" @click="cahngLoginType('wx')">
                        <p>微信扫码登录</p>
                        <svg t="1685263287521" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2450" width="32" height="32">
                            <path
                                d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                fill="#28C445" p-id="2451"></path>
                            <path
                                d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                fill="#28C445" p-id="2452"></path>
                        </svg>
                    </div>
                </div>
                <div class="login-phone" v-show="loginType === 'wx'">
                    <div class="login-wx__qrcode"></div>
                    <!-- 手机登录 -->
                    <div class="login-change" @click="cahngLoginType('phone')">
                        <p>手机短信验证码登录</p>
                        <svg t="1685676069573" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2476" width="16" height="16">
                            <path
                                d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                                p-id="2477"></path>
                        </svg>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="login-qrcode">
                    <div class="qrcode-content">
                        <el-image :src="wxQrcode"></el-image>
                        <svg t="1685263287521" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2450" width="16" height="16">
                            <path
                                d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                fill="#cdcdcd" p-id="2451"></path>
                            <path
                                d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                fill="#cdcdcd" p-id="2452"></path>
                        </svg>
                        <p>微信扫一扫关注</p>
                        <p>“快速预约挂号”</p>
                    </div>
                    <div class="qrcode-content">
                        <el-image :src="appQrcode"></el-image>
                        <svg t="1685263518283" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3668" width="16" height="16">
                            <path
                                d="M256 85.333333h512c64.8 0 117.333333 52.533333 117.333333 117.333334v618.666666c0 64.8-52.533333 117.333333-117.333333 117.333334H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334z m0 64a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h512a53.333333 53.333333 0 0 0 53.333333-53.333334V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256z m170.666667 618.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z"
                                fill="#000000" p-id="3669"></path>
                        </svg>
                        <p>扫一扫下载</p>
                        <p>“预约挂号”APP</p>
                    </div>
                </div>
                <div class="login-tip">
                    <h1 class="tip">尚医通官方指定平台</h1>
                    <h1 class="tip">快速挂号 安全放心</h1>
                </div>
            </el-col>
        </el-row>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="handleClose">
                    关闭
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { LoginData } from '@/api/hospital/type'
import useUserInfoStore from '@/store/modules/userInfo'
import { SET_USERINFO } from '@/utils/user.ts'
const userInfoStore = useUserInfoStore()
const isPhone = computed(() => {
    let reg = /^(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}$/
    return reg.test(loginInfo.phone)
})

// 登录方式 phone 手机号登录 wx 微信扫码登录
let loginType = ref("phone")
// 微信二维码
const wxQrcode: string = new URL('@/assets/images/code_login_wechat.png', import.meta.url).href
// app二维码
const appQrcode: string = new URL('@/assets/images/code_app.png', import.meta.url).href
// 获取验证码api
import { getMobileCode,login } from "@/api/user/index"
import { FormInstance, ElMessage } from 'element-plus';
// form ref
const loginRef = ref<any>()
const cahngLoginType = (type: string) => {
    loginType.value = type
}
let loginInfo: LoginData = reactive({
    phone: '',
    code: ''
})
let timeout = ref(0)
const loginRule = {
    phone: [
        {
            required: true,
            message: '手机号不能为空',
            trigger: ['blur', 'change']
        },
        {
            message: '手机号格式错误',
            trigger: ['blur', 'change'],
            pattern: /^(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}$/
        }
    ],
    code: {
        required: true,
        message: '验证码不能为空',
        trigger: 'blur'
    }
}
const handleClose = () => {
    loginRef.value.resetFields()
    userInfoStore.setLoginVisible(false)
}
const sendCode = () => {
    getMobileCode(loginInfo.phone).then(res => {
        if (res.code === 200) {
            loginInfo.code = res.data
            timeout.value = 5
            let timer = setInterval(()=>{
                timeout.value -= 1 
                if(timeout.value <= 0) clearInterval(timer)
            },1000)
        } else {
            throw new Error(res.message)
        }
    })
}
const handleLogin = (loginRef: FormInstance | undefined) => {
    if (!loginRef) return
    loginRef.validate(async (valid, fields) => {
        if (valid) {
            let result = await login(loginInfo)
            if (result.code === 200) {
                console.log(result);
                SET_USERINFO(result.data)
                userInfoStore.setUserInfo(result.data)
                handleClose()
            } else {
                throw new Error(result.message)
            }
        } else {
            console.log(fields);
            ElMessage.error('请完善必填项', )
        }
    })
}
</script>
<style scoped lang="scss">
.dialog-footer button:first-child {
    margin-right: 10px;
}

.login-phone {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #7f7f7f;
    padding: 20px;

    :deep(.el-form) {
        width: 100%;
    }

    h1 {
        font-size: 20px;
        font-weight: 900;
    }

    .login-change {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;

        p {
            margin-bottom: 10px;
        }

        svg {
            margin: 0 auto;
        }
    }

    .login-btn {
        width: 100%;
    }
}

.login-qrcode {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .qrcode-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        :deep(.el-image) {
            width: 130px;
            height: 130px;
        }

        p {
            margin: 5px 0;
        }
    }
}

.login-tip {
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;

}</style>
  