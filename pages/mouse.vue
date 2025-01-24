<template>
    <div>
        <p>x軸 : {{mouse.x}}</p>
        <p>y軸 : {{mouse.y}}</p>
        <div class=" w-fit sid">
            <ElIconApple class="w-30px"></ElIconApple>
        </div>
    </div>
</template>
<script setup lang="ts">
const mouse = useMouse();
onMounted(() => {
  window.addEventListener('mousemove',()=>{
    const apple = document.querySelector('.sid') as HTMLElement;
    if(apple ==null)return;
    apple.style.top = `${mouse.y.value -15}px`;
    apple.style.left = `${mouse.x.value -15}px`;
  });
});
</script>
<style scoped>
.sid {
    position: fixed;
    top: 0;
    left: 0;
}
</style>
