<template>
    <div>
        <ElButton color="green"
                  @click="SetTimes"
                  :loading="PlusTime!=0">倒計時</ElButton>
        <br>
        <span>倒數:{{PlusTime}}</span>
        <br>
        <input type="text"
               v-model="TheName">
        <span>{{ TheName }}</span>
        <p class="text-red-400">P.S. setInterval 只能用在function裡面，不可直接用在onMounted之外</p>
    </div>
</template>
<script setup>
useHead({
  script:[
    {
      src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
      tagPosition:'bodyClose',
    }
  ]
});
const TargetTime = useCookie('targetTime');
const PlusTime = ref(0);
const TheName = ref('');
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
    setTimeout(() => {
      $("p").css("color","blue");
    }, 3000);
    if (TargetTime.value != null && TargetTime.value != undefined && TargetTime.value != '') {
        countTime();
    }
});
onUnmounted(() => {
    clearInterval(times);
});
</script>
<style scoped></style>
