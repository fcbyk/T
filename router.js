import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './pages/HomeView.vue'
import AboutView from './pages/AboutView.vue'

/**
 * 定义路由规则
 * URL 和 组件的映射
 */
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

// 创建并导出路由实例
export default createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式
  routes, // 路由规则
})