<script setup>
import { inject } from 'vue'

// 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值
const location = inject('location')

console.log(location.y)
console.log(inject('msg').num)
</script>

<template>
  <div class="cb">
    <p>Component B</p>
    <p>LocationY: {{ location.y }}</p>
  </div>
</template>

<style scoped>
.cb {
  height: 150px;
  width: 150px;
  padding: 10px;
  border: 1px solid rgb(123, 1, 148);
}
</style>
