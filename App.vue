<template>
  <p>{{ message }}</p>
  <p>{{ password }}</p>

  <!-- 绑定自定义事件 -->
  <Child 
    @child-click="handleChildClick" 
    @submit-form="handleSubmit"
  />
</template>
<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const message = ref('')
const password = ref({})

/**
 * 父组件定义回调函数
 * 由 子组件 触发自定义事件 调用
 */
const handleChildClick = (msg) => {
  console.log('父组件收到：', msg)
  message.value = msg
}

const handleSubmit = (formData) => {
  console.log('表单数据：', formData)
  password.value = formData.password
}
</script>