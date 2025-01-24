<template>
    <div>
      <h1>大錯特錯!!!!</h1>
      <h2>{{ error.statusCode }}</h2>
      <p>{{ error.message }}</p>
      <NuxtLink to="/">回首頁</NuxtLink>
    </div>
</template>
<script setup>
const props = defineProps({
    error: {
        type: Object,
        required: true
    }
});
onMounted(()=>{
  console.log(toRaw(props.error));
});
</script>
