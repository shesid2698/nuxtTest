<template>
  <div>
    <h1>pinia範例</h1>
    <h3>數量 <span>{{ count.count }}</span></h3>
    <NuxtLink to="/">返回首頁</NuxtLink>
  </div>
</template>
<script setup>
const count = useCounterStore();
</script>
<style scoped></style>
