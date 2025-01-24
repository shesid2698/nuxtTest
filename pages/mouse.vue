<template>
  <div>
    <p>x軸 : {{mouse.x}}</p>
    <p>y軸 : {{mouse.y}}</p>
  </div>
</template>
<script setup lang="ts">
const mouse = useMouse();
onMounted(()=>{
});
</script>
<style scoped></style>
