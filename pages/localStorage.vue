<template>
  <div>
    <input type="text" @change="SetLocal">
  </div>
</template>
<script setup>
const SetLocal = (event)=>{
  localStorage.setItem("sharedValue",event.target.value);
  console.log(event.target.value);
}
</script>
<style scoped></style>
