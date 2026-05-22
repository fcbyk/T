import { createApp } from 'vue'
import App from './App.vue'

// 第二个参数是传递 props
createApp( App, {
  title: '呜呜呜',
  num: 100
})

// 全局注册组件
.component("Hello", {
  template: `<div>Hello</div>`,
})

.mount('#app')

