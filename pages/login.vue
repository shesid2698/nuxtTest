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
            <h3>{{ runtime.public.googleClientId }}</h3>
        </ClientOnly>
    </div>
</template>
<script setup>
import { GoogleLogin } from 'vue3-google-login';
const runtime = useRuntimeConfig();
const userInfo = ref(null);
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
</script>
<style scoped></style>
