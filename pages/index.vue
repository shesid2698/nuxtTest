<template>
    <div class="">
        <h1>index</h1>
        <ElButton @click="ThrowError()">錯誤測試</ElButton>
    </div>
</template>
<script setup>
const ThrowError = () => {
    throw new Error("有錯了...");
};
onMounted(() => {
  throw createError({
        status: 404,
        statusText: '錯誤測試'
    });
});
onErrorCaptured(error=>{
console.log(error);
});
</script>
<style scoped></style>
