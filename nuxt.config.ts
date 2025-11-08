// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-08",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Guilherme Souza",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        {
          name: "description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil",
        },
        {
          property: "og:image",
          content: "/ogimage.jpg",
        },
        {
          property: "og:title",
          content: "Guilherme Souza",
        },
        {
          property: "og:description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: ["@nuxt/eslint"],
});
