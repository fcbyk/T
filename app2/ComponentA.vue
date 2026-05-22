<script setup>
import ComponentB from './ComponentB.vue';
import { inject } from 'vue'

// 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值
const location = inject('location')

console.log(location.x)
console.log(inject('msg').text)
</script>

<template>
  <div class="ca">
    <p>Component A</p>
    <p>LocationX: {{ location.x }}</p>
    <ComponentB />
  </div>
</template>

<style scoped>
.ca {
  height: 300px;
  width: 300px;
  padding: 10px;
  border: 1px solid rgb(1, 60, 148);
}
</style>