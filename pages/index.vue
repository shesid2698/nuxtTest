<template>
    <div>
        <ElButton color="green"
                  @click="SetTimes"
                  :loading="PlusTime!=0">倒計時</ElButton>
        <br>
        <span>倒數:{{PlusTime}}</span>
        <br>
        <input type="text" v-model="TheName">
        <span>{{ TheName }}</span>
    </div>
</template>
<script setup>
const TargetTime = useCookie('targetTime');
const PlusTime = ref(0);
const TheName = ref("");
let times = null;
const SetTimes = () => {
    if (TargetTime.value == null || TargetTime.value == undefined || TargetTime.value == '') {
        TargetTime.value = new Date(Date.now() + 2 * 60 * 1000);
        countTime();
    } else {
        countTime();
    }
};
const countTime = () => {
    times = setInterval(() => {
        var targetTime = new Date(TargetTime.value);
        PlusTime.value = Math.floor((targetTime - Date.now()) / 1000);
        if (PlusTime.value <= 0) {
            PlusTime.value = 0;
            clearInterval(times);
            TargetTime.value = '';
            TargetTime.value = undefined;
            TargetTime.value = null;
        }
    }, 1000);
};
onMounted(() => {
    if (TargetTime.value != null && TargetTime.value != undefined && TargetTime.value != '') {
        countTime();
    }
});
onUnmounted(() => {
    clearInterval(times);
});
</script>
<style scoped></style>
