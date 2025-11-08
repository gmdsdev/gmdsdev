// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-08",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Guilherme Souza",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          name: "description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: ["@nuxt/eslint"],
});
