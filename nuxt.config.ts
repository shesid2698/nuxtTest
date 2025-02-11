// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@element-plus/nuxt', '@nuxtjs/color-mode', '@pinia/nuxt', '@unocss/nuxt'],
    runtimeConfig: {
        public: {
            googleClientId: '505369110816-adbbmvem49jfer17pdcijimo5k21f724.apps.googleusercontent.com',
            lineClientId: '2006854918',
            lineSecret: 'eb7d59058338d314c01d78a6cd4a9e47',
        },
    },
});
