<template>
  <div>
    <h1>pinia範例</h1>
    <h1>B 頁面</h1>
    <p>共用變數: {{ count.sharedValue }}</p>
    <button @click="updateValue">修改變數</button>
    <NuxtLink to="/">返回</NuxtLink>
  </div>
</template>
<script setup>
const count = useCounterStore();
const updateValue = () => {
  count.setSharedValue('來自 B 頁面的更新');
};
</script>
<style scoped></style>
