/*
 * @Author: yutaiqi
 * @Date: 2024-01-11 21:45:54
 * @LastEditTime: 2024-01-13 20:25:47
 * @LastEditors: yutaiqi
 * @Description: 文件功能描述
 * @FilePath: /syt/syt/vite.config.ts
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
  }
})
