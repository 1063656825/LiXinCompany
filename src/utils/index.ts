/*
 * @Author: yutaiqi
 * @Date: 2024-01-14 12:50:44
 * @LastEditTime: 2024-01-14 13:12:08
 * @LastEditors: yutaiqi
 * @Description: 通用工具类
 * @FilePath: /syt/syt/src/utils/index.ts
 */

/**
 * @description: 获取相对路径url，替换require
 * @param {string} path
 * @return {*}
 */
export function getRequireUrl(path:string):string{
    try {
        console.log(path, import.meta.url,'path, import.meta.url');
        
        return new URL(path, import.meta.url).href;
      } catch (error) {
        console.error('Error creating URL from path:', error);
        throw error; 
      }
}