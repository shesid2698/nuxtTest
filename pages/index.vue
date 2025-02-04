<template>
    <div class="">
        <h1>index</h1>
        <h3>tenNum = {{ tenNum}}</h3>
        <h3>hundredNum = {{ hundredNum}}</h3>
        <h2>原始值={{num}}</h2>
        <h1>時間:{{ time1 }}</h1>
        <NuxtLink to="/count">
            <div>跳頁</div>
        </NuxtLink>
        <NuxtLink to="/mouse">
            <div>滑鼠vue(composables)</div>
        </NuxtLink>
        <NuxtLink to="/count2">
            <div>useState count2</div>
        </NuxtLink>
        {{ wade }}
    </div>
</template>
<script setup>
const num = ref(10);
const wade = useState('wade');
const time = ref(Date.now());
const tenNum = computed(() => num.value * 10);
const hundredNum = computed(() => num.value * 100);
const time1= ref(null);
let rare = null;
onMounted(() => {
  rare =  setInterval(() => {
        time1.value = new Date(Date.now());
    }, 1000);
});
onUnmounted(()=>{
  clearInterval(rare);
  console.log("清除時鐘");
});
</script>
<style scoped></style>
