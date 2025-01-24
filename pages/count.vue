<template>
  <div>
    <h3>數量 <span>{{ count.count }}</span></h3>
  </div>
</template>
<script setup>
const count = useCounterStore();
</script>
<style scoped></style>
