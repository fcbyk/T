<template>
  <button @click="handleClick">点击重新传值给父组件</button>
</template>

<script setup>

// 声明自定义事件（数组/对象语法）
const emit = defineEmits(['child-click', 'submit-form'])

let count = 0
let form = {
  username: 'vue',
  password: 1000
}

// 直接触发自定义事件：emit(事件名, 传递的参数)
emit('child-click', `来自子组件的消息${count}`)
emit('submit-form', form)

/**
 * 间接触发自定义事件
 * @description 子组件点击事件 -> 触发自定义事件
 */
const handleClick = () => {
  count+=1
  form.password+=1
  emit('child-click', `来自子组件的消息${count}`)
  emit('submit-form', form)
}
</script>