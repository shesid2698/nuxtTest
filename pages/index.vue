<template>
    <div class="">
        <h1>index</h1>
        <h3>tenNum = {{ tenNum}}</h3>
        <h3>hundredNum = {{ hundredNum}}</h3>
        <h2>原始值={{num}}</h2>
        <h1>時間:{{ newTime }}</h1>
        <NuxtLink to="/count"><div>跳頁</div></NuxtLink>
        <NuxtLink to="/mouse"><div>滑鼠vue(composables)</div></NuxtLink>
    </div>
</template>
<script setup>
const num = ref(10);
const time = ref(Date.now());
const tenNum = computed(() => num.value * 10);
const hundredNum = computed(() => num.value * 100);
const newTime = computed(() => {
    setInterval(() => {
        time.value = Date.now();
    }, 1000);
    return new Date(time.value);
});
onMounted(() => {});
</script>
<style scoped></style>
