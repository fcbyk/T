<!-- 内置指令 -->
<!-- https://cn.vuejs.org/api/built-in-directives.html#v-text -->

<template>
  
  <!-- v-text -->
  <div>{{ message }}</div>
  <!-- 等同于 -->
  <div v-text="message"></div>

  <!-- 
  v-html 
  v-html 的内容直接作为普通 HTML 插入
  -->
  <div v-html="html"></div>

  <!-- 
  v-pre
  跳过该元素及其所有子元素的编译
  元素内具有 v-pre，所有 Vue 模板语法都会被保留并按原样渲染
  -->
  <div v-pre>{{ message }}</div>

  <!-- 
  v-once
  只渲染元素和组件一次，之后的修改不会重新渲染
  -->
  <div>
    <button @click="message = 'Hello Vue'">Click</button>
  </div>
  <div v-once>{{ message }}</div>

  <!-- 
  v-cloak
  用于防止在 Vue 实例初始化之前或之后闪现未编译的 Mustache 标签
  直到编译完成前，<div> 将不可见
  -->
  <div v-cloak>{{ message }}</div>

</template>


<script setup>
  import { ref } from 'vue'
  const message = ref('Hello World')
  const html = '<span style="color: red;">Hello World</span>'
</script>
