<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <h1>{{ data?.message }}</h1>
  <h1>Index page</h1>
  <NuxtLink to="/blog/hello-world">
    Go to blog post
  </NuxtLink>
</template>
