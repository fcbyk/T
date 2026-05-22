/**
 * 使用工程化方式创建vue实例
 */
import { createApp } from "vue"
import App from "./App.vue"


/**
 * App.vue 是一个完整的组件配置对象
 * 单文件组件 (.vue) 经过构建工具（Vite）处理后，会被转换成 JavaScript 对象
 * 这个对象包含了 setup、template、style 等所有配置
 */
createApp(App).mount('#app')