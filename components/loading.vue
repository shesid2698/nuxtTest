<template>
    <div class="loading-indicator"
         v-show="isLoading == true">
        loading...
    </div>
</template>
<script setup>
const isLoading = ref(false);
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', () => {
    isLoading.value = true;
});
nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
});
onMounted(() => {

});
</script>
<style>
.loading-indicator {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, #a8e6cf7e, /* 粉綠 */ #ffd3b67c, /* 粉黃 */ #ffa9a583 /* 粉紅 */);
    color: red;
    background-size: 500% 500%;
    animation: gradientAnimation 1s ease infinite;
    text-align: center;
    align-content: center;
    font-size: 3rem;
    text-shadow: 1px 1px 2px lightgray;
}
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
        color:#ffd3b6;
    }
    50% {
        background-position: 100% 50%;
        color:#a8e6cf;
    }
    100% {
        background-position: 0% 50%;
        color: #ffaaa5;
    }
}
</style>
