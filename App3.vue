<!-- 列表渲染 -->
<template>

  <!-- 
  v-for 基础用法
  基于一个数组来渲染一个列表
  v-for 指令需要使用 item in items 形式的特殊语法
  -->
  <h3>基础列表渲染</h3>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>

  <!-- 
  v-for 带索引
  可以提供第二个参数为当前项的索引
  -->
  <h3>带索引的列表</h3>
  <ul>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index + 1 }}. {{ item.name }}
    </li>
  </ul>

  <!-- 
  v-for 遍历对象
  可以遍历对象的属性
  -->
  <h3>遍历对象</h3>
  <ul>
    <li v-for="(value, key, index) in userInfo" :key="key">
      {{ index + 1 }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <!-- 
  v-for 维护状态
  当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用"就地更新"的策略
  为了给 Vue 一个提示，以便它能跟踪每个节点的身份，需要为每项提供一个唯一 key attribute
  -->
  <h3>使用 key 维护状态</h3>
  <button @click="addItem">添加项目</button>
  <button @click="removeItem">删除项目</button>
  <button @click="shuffleItems">打乱顺序</button>
  <ul>
    <li v-for="item in dynamicItems" :key="item.id">
      {{ item.name }} - ID: {{ item.id }}
    </li>
  </ul>

  <!-- 
  v-for 与 template 结合使用
  可以一次性渲染多个元素
  -->
  <h3>template 中的 v-for</h3>
  <template v-for="item in items" :key="item.id">
    <div class="item-wrapper">
      <span>{{ item.name }}</span>
      <span class="badge">{{ item.badge }}</span>
    </div>
  </template>

  <!-- 
  v-for 渲染数字范围
  -->
  <h3>渲染数字范围</h3>
  <ul>
    <li v-for="n in 5" :key="n">
      数字: {{ n }}
    </li>
  </ul>

</template>


<script setup>
import { ref } from 'vue'

// 基础列表数据
const items = ref([
  { id: 1, name: 'Vue.js', badge: '前端' },
  { id: 2, name: 'React', badge: '前端' },
  { id: 3, name: 'Node.js', badge: '后端' },
])

// 用户信息对象
const userInfo = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
})

// 动态列表数据
const dynamicItems = ref([
  { id: 1, name: '项目 A' },
  { id: 2, name: '项目 B' },
  { id: 3, name: '项目 C' },
])

let nextId = 4

const addItem = () => {
  dynamicItems.value.push({
    id: nextId++,
    name: `项目 ${String.fromCharCode(64 + nextId - 1)}`,
  })
}

const removeItem = () => {
  if (dynamicItems.value.length > 0) {
    dynamicItems.value.pop()
  }
}

const shuffleItems = () => {
  dynamicItems.value.sort(() => Math.random() - 0.5)
}
</script>

<style scoped>
.item-wrapper {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.badge {
  margin-left: 10px;
  padding: 2px 8px;
  background-color: #42b983;
  color: white;
  border-radius: 12px;
  font-size: 12px;
}
</style>