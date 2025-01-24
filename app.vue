<template>
    <div>
        <!-- 使用layout -->
        <!-- <NuxtLayout>
            <template #header>
                <p>這邊插入</p>
            </template>
            <NuxtPage></NuxtPage>
        </NuxtLayout> -->

        <!-- throttle設定0為啟用 -->
        <!-- <NuxtLoadingIndicator :throttle="100" height="10000"/> -->

        <Loading></Loading>
        <NuxtPage></NuxtPage>
    </div>
</template>
<style>
</style>
