<!-- 
 自定义指令
  自定义指令用于在 DOM 元素上添加自定义行为
 -->
<template>
    <p v-highlight>This sentence is important!</p>

    <!-- 
    自定义指令语法：
        v-[name]:[arg].[modifiers]="value"
        name：指令名，不包括 v- 前缀
        arg：参数，可选，只能是字符串
        modifiers：修饰符，可选，可以有多个
        value：指令的绑定值，可以是字符串、数字、布尔值、对象等
    -->
    <div v-example:foo.bar="baz"></div>

    <!-- 加方括号表示动态参数 -->
    <div v-example:[foo].hello.world="baz"></div>
</template>

<script setup>
// 自定义指令，组合式API写法
import { ref } from 'vue'
const foo = ref('f-data')
const baz = ref('b-data')

/**
 * 自定义指令如果赋值一个函数(简写)，
 * 那么这个函数会在 `mounted` 和 `updated` 时都调用
 * @param el 指令绑定到的元素。这可以用于直接操作 DOM
 * @param binding 一个对象，包含传递的数据(value、arg、modifiers等)
 * @param vnode Vue 编译生成的虚拟节点
 * @param prevVnode 上一个虚拟节点，仅在 `beforeUpdate` 和 `updated` 钩子中可用
 */
const vHighlight = (el, binding) => {
    el.classList.add('is-highlight')
    console.log(binding)
}

/**
 * 自定义指令，完整写法是一个对象
 * 一个指令的定义对象可以提供几种钩子函数 (都是可选的)
 */
const vExample = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {},
  
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},

  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {
    console.log(binding)
  },

  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},

  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},

  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},

  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}
</script>

<style>
.is-highlight {
  background-color: yellow;
}
</style>
