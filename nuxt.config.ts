export default defineNuxtConfig({
  compatibilityDate: '2026-05-02',
  devtools: { enabled: false },
  
  // 运行时配置 - 从环境变量读取
  runtimeConfig: {
    mongodbUri: ''
  }
})