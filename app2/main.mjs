// https://cn.vuejs.org/guide/components/provide-inject.html

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

// 应用层注入
app.provide('msg', {
  text: '应用层注入的文本',
  num: 10086
})

app.mount('#app')

