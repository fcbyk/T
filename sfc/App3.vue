<!-- 模板 -->
<template>
  <h1>App3</h1>
  <div v-highlight>{{ message }}</div>
  <button @click="increment">{{ count }}</button>
</template>

<script>
// 默认导出组件配置对象（选项式API）
export default {
  // 数据
  data() {
    return {
      message: 'Hello vue!',
      count: 0
    }
  },

  // 计算属性
  computed: {
    countPlusFive() {
      return this.count + 5
    }
  },

  // 方法
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子
  created() {
    console.log('app created')
  },
  mounted() {
    console.log('app mounted')
  },

  // 侦听器
  watch: {
    count(newVal, oldVal) {
      console.log('count changed', newVal, oldVal)
      console.log('countPlusFive', this.countPlusFive)
    }
  },

  // 指令
  directives: {
    highlight(el) {
      el.style.backgroundColor = 'yellow'
    }
  }
}
</script>

<style scoped>
/* 如果需要样式可以在这里添加 */
</style>
