<template>
    <div>
        <ClientOnly>
            <GoogleLogin :callback="callback"
                         prompt
                         popup-type="TOKEN">
                <button>按我</button>
            </GoogleLogin>
            <div v-if="userInfo!=null">
                <p>id = {{userInfo.id  }}</p>
                <p>name = {{userInfo.name  }}</p>
                <p>email = {{userInfo.email  }}</p>
                <p>信箱是否驗證 = {{userInfo.emailVerified  }}</p>
            </div>
            <br>
            <button @click="LineLogin">line登入</button>
            <div v-if="lineUserSub!=''">
                <p>sub= {{ lineUserSub }}</p>
                <p>姓名= {{ lineUserName }}</p>
            </div>
        </ClientOnly>
    </div>
</template>
<script setup>
import { GoogleLogin } from 'vue3-google-login';
const runtime = useRuntimeConfig();
const userInfo = ref(null);
const lineUserSub = ref('');
const lineUserName = ref('');
const client_id = ref(runtime.public.lineClientId);
const redirect_uri = ref('http://localhost:3000/lineauth');
const callback = async response => {
    const accessToken = response.access_token;
    const { data } = await useFetch('/api/auth/google', {
        method: 'POST',
        body: {
            accessToken
        },
        initialCache: false
    });
    userInfo.value = data.value;
    console.log(userInfo.value);
};
const LineLogin = () => {
    let link = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id.value}&redirect_uri=${redirect_uri.value}&state=login&scope=openid%20profile`;
    // 將頁面重新導向到該連結
    // window.location.href = link;
    window.open(
        link, // 網址
        '_blank', // 在新視窗開啟
        `width=500,height=550,left=${(screen.width-500) /2},top=${(screen.height-550)/2},resizable=yes`
    );
};
const syncStorage = event => {
    console.log(event.key);
    if (event.key === 'lineUserSub') {
        lineUserSub.value = event.newValue;
        localStorage.removeItem('lineUserSub');
    }
    if (event.key === 'lineUserName') {
        lineUserName.value = event.newValue;
        localStorage.removeItem('lineUserName');
    }
};
onMounted(() => {
    window.addEventListener('storage', syncStorage);
});
</script>
<style scoped></style>
