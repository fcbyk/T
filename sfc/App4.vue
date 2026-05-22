<!-- 模板 -->
<template>
  <h1>App4</h1>
  <div v-highlight>{{ message }}</div>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

// 可以把 setup 函数定义在外面
// setup 函数是组合式 API 的入口
const setup = () => {
  // 数据 (对应 data)
  const message = ref('Hello vue!')
  const count = ref(0)

  // 方法 (对应 methods)
  const increment = () => {
    count.value++
  }

  // 计算属性 (对应 computed)
  const countPlusFive = computed(() => {
    return count.value + 5
  })

  // 侦听器 (对应 watch)
  watch(count, (newVal, oldVal) => {
    console.log('count changed', newVal, oldVal)
    console.log('countPlusFive', countPlusFive.value)
  })

  // 生命周期钩子
  // setup() 执行时机相当于 beforeCreate 和 created
  console.log('app created')
  
  onMounted(() => {
    console.log('app mounted')
  })

  // 必须返回要在模板中使用的变量和方法
  return {
    message,
    count,
    increment,
    countPlusFive
  }
}

// 默认导出组件配置对象（组合式API setup函数形式）
export default {
  // 指令依然可以在选项中定义
  directives: {
    highlight(el) {
      el.style.backgroundColor = 'yellow'
    }
  },
  setup
}
</script>
