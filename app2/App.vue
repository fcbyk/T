<script setup>
import ComponentA from './ComponentA.vue'
import { provide } from 'vue'

// 提供一个值，可以被后代组件注入
provide('location', {
  x:199.23,
  y:234.23
})
</script>

<template>
  <div class="app">
    <p>App</p>
    <ComponentA />
  </div>
</template>

<style scoped>
.app {
  margin: auto;
  margin-top: 30px;
  height: 400px;
  width: 400px;
  padding: 10px;
  border: 1px solid rgb(1, 148, 94);
}
</style>
