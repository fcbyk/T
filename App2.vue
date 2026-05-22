<!-- 条件渲染 -->
<template>

  <!-- 
  v-show
  基于表达式值的真假性，来改变元素的可见性
  通过设置内联样式的 display CSS 属性来工作
   -->
  <div>
    <button @click="show = !show">Toggle v-show</button>
  </div>
  <div v-show="show">元素1</div>

  <!-- 
  v-if
  基于表达式值的真假性，来决定是否渲染元素
  -->
  <div>
    <button @click="isVisible = !isVisible">Toggle v-if</button>
  </div>
  <div v-if="isVisible">元素2（使用 v-if）</div>

  <!-- 
  v-else-if 和 v-else
  配合 v-if 使用，实现多条件分支
  -->
  <div> 
    <button @click="changeType">切换类型</button>
  </div>
  <div v-if="type === 'A'">类型 A</div>
  <div v-else-if="type === 'B'">类型 B</div>
  <div v-else-if="type === 'C'">类型 C</div>
  <div v-else>不是 A/B/C</div>

  <!-- 
  v-if 与 template 结合使用
  可以一次性切换多个元素
  -->
  <div>
    <button @click="showGroup = !showGroup">切换分组显示</button>
  </div>
  <template v-if="showGroup">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
  </template>

</template>


<script setup>
import { ref } from 'vue'

const show = ref(true)
const isVisible = ref(true)
const type = ref('A')
const showGroup = ref(true)

const changeType = () => {
  const types = ['A', 'B', 'C', 'D']
  const currentIndex = types.indexOf(type.value)
  type.value = types[(currentIndex + 1) % types.length]
}
</script>