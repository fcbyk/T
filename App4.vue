<!-- 
 v-slot 
 用于声明具名插槽或是期望接收 props 的作用域插槽
 -->
<template>
    <BaseLayout>

        <!-- 为具名插槽传入内容 -->
        <template v-slot:header>
            <h1>Here might be a page title</h1>
        </template>

        <!-- 简写形式: # -->
        <template #footer>
            <p>Here's some contact info</p>
        </template>

        <!-- 默认插槽 -->
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <!-- 接收插槽props -->
        <template #t="obj">
            <p>{{ obj.text }}</p>
        </template>

    </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue'
</script>
