<!-- 
 侦听器：用于监听数据的变化并执行相应的操作
 https://cn.vuejs.org/guide/essentials/watchers.html
-->
<template>
  <p>打开浏览器控制台查看输出</p>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

// 侦听count变化
watch(count, (newCount, oldCount) => {
  console.log('count changed:', newCount, oldCount)
})
</script>
