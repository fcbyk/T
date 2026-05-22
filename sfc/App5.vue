<!-- 模板 -->
<template>
  <h1>App5</h1>
  <div v-highlight>{{ message }}</div>
  <button @click="increment">{{ count }}</button>
</template>


<script setup>
/**
 * 语法糖 (script setup)
 * 顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用
 * https://cn.vuejs.org/api/sfc-script-setup.html#script-setup
 */
import { ref, computed, watch, onMounted } from 'vue'

// 数据
const message = ref('Hello vue!')
const count = ref(0)

// 方法
const increment = () => {
  count.value++
}

// 计算属性
const countPlusFive = computed(() => count.value + 5)

// 侦听器
watch(count, (newVal, oldVal) => {
  console.log('count changed', newVal, oldVal)
  console.log('countPlusFive', countPlusFive.value)
})

// 生命周期
// setup 执行时机相当于 beforeCreate 和 created
console.log('app created')

onMounted(() => {
  console.log('app mounted')
})

// 自定义指令
const vHighlight = {
  mounted: (el) => {
    el.style.backgroundColor = 'yellow'
  }
}
</script>
