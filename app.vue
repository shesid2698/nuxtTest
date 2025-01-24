<template>
    <div>
        <!-- 使用layout -->
        <!-- <NuxtLayout>
            <template #header>
                <p>這邊插入</p>
            </template>
            <NuxtPage></NuxtPage>
        </NuxtLayout> -->


        <NuxtPage></NuxtPage>
    </div>
</template>
<script>
onErrorCaptured(error=>{
  console.log("錯誤了..",error);
});
</script>
