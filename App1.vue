<!-- 
计算属性: 计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值
-->
<template>
  <!-- 
   三者区别查看官方文档 
   https://cn.vuejs.org/guide/essentials/computed.html
   -->

  <!-- 不使用计算属性 -->
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

  <!-- 使用计算属性 -->
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <!-- 使用普通函数 -->
  <p>Has published books:</p>
  <p>{{ calculateBooksMessage() }}</p>


  <!-- 使用可写计算属性 -->
  <p>first name: {{firstName }}</p>
  <p>last name: {{ lastName }}</p>
  <p>full name: {{ fullName }}</p>
  <input v-model="fullName" />
</template>

<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 定义计算属性
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 定义一个普通函数
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}


// 可写计算属性
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

</script>