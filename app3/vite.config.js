import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [vue()]  // 注册 Vue 插件
}))


/**

Vite 默认查找当前目录的 index.html 作为入口

工作流程：

启动 Vite (npm run dev)
    ↓
查找 index.html（项目根目录）
    ↓
解析 <script type="module" src="main.mjs">
    ↓
加载 main.mjs
    ↓
遇到 import App from "./App.vue"
    ↓
Vite 插件处理 .vue 文件
    ↓
编译成浏览器可理解的 JS
    ↓
返回给浏览器

 */