<script setup>
/**
 * 局部注册组件
 * script setup 的单文件组件中，导入的组件可以直接在模板中使用，无需注册
 */
import ComponentA from './ComponentA.vue'

// 无需显式导入 defineProps
// import { defineProps } from 'vue'

// 声明所接受的 props
const props = defineProps({
  title: String,
  num: Number
})

// 使用 props
console.log(props.title, props.num)

</script>

<template>

  <!-- 全局组件 -->
  <Hello /> 

  <!-- 局部组件 -->
  <ComponentA />

  <div>{{ title }}</div>
  <div>{{ num }}</div>
  
</template>