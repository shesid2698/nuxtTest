<template>
    <div class="">
        <h1>index</h1>
        <h3>tenNum = {{ tenNum}}</h3>
        <h3>hundredNum = {{ hundredNum}}</h3>
        <h2>原始值={{num}}</h2>
        <h1>時間:{{ newTime }}</h1>
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
         <p>共用變數: {{ sharedValue }}</p>
        <button @click="updateValue">修改變數</button>
    </div>
</template>
<script setup>
const num = ref(10);
const sharedValue = ref('預設值');
const wade = useState('wade');
const time = ref(Date.now());
const tenNum = computed(() => num.value * 10);
const hundredNum = computed(() => num.value * 100);
const newTime = computed(() => {
    setInterval(() => {
        time.value = Date.now();
    }, 1000);
    return new Date(time.value);
});
const syncStorage = event => {
    if (event.key === 'sharedValue') {
        sharedValue.value = event.newValue;
    }
};
const updateValue = () => {
  const newValue = '來自這個頁面的更新';
  localStorage.setItem('sharedValue', newValue);
  sharedValue.value = newValue;
};
onMounted(() => {
    window.addEventListener('storage', syncStorage);
    localStorage.setItem("sharedValue","wad1231");
});
</script>
<style scoped></style>
