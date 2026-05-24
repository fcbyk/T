<script setup>
const message = ref('点击按钮插入数据到 MongoDB Atlas')

async function insertData() {
  try {
    const result = await $fetch('/api/hello')
    
    if (result.success) {
      message.value = '✅ 插入成功！去 MongoDB Atlas 控制台查看吧'
    } else {
      message.value = '❌ 失败: ' + result.message
    }
  } catch (error) {
    message.value = '❌ 请求失败'
    console.error(error)
  }
}
</script>

<template>
  <div style="padding: 50px; text-align: center;">
    <h1>MongoDB Atlas Hello World</h1>
    <p>{{ message }}</p>
    <button @click="insertData" style="padding: 15px 30px; font-size: 18px; cursor: pointer;">
      插入数据
    </button>
  </div>
</template>
