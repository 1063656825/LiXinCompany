/*
 * @Author: yutaiqi
 * @Date: 2024-01-11 21:45:54
 * @LastEditTime: 2024-01-16 23:29:07
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /sytstudy/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
        '@': path.resolve(__dirname, './src')
    }
  },
//   跨域
  server: {
    
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true
      }
    }
  },
})
