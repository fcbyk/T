import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(() => ({

  /**
   * 默认构建为了减小生产环境的包体积
   * Vue 的默认入口，只包含运行时，不包含编译器
   * 无法编译template字符串模板
   */
  plugins: [vue()],


  resolve: {
    /**
     * 配置路径别名
     * 导入 vue 模块时，实际加载的是包含编译器的 vue.esm-bundler.js 版本
     */
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
}))