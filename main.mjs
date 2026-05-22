import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let app = createApp(App)

/**
 * Vue 本身没有自带路由功能，需使用官方插件
 * 路由插件（vue-router）：管页面跳转、地址、路由规则
 * 
 * 通过 app.use(router) 安装插件，给 Vue 全局添加能力
 * 全局组件：<router-link>、<router-view>
 * 全局方法：$route、$router
 * 组合式 API：useRoute、useRouter
 * ...路由守卫、其他功能
 */
app.use(router)

app.mount('#app')
