<!-- 
  Vue3 单文件组件 (SFC)
  将模板、脚本、样式封装在一个 .vue 文件中，便于模块化开发
-->
  
<template>
  <!-- 模板部分：定义组件的 HTML 结构 -->
  <h1>{{ message }}</h1>
</template>


<script setup>
  /**
   * <script setup> 是 Vue3.2+ 引入的语法糖，简化组合式 API 的使用
   * 在 <script setup> 中，顶层声明的变量、函数会自动暴露给模板，无需 return
   */
  const message = 'Hello App3'
</script>
