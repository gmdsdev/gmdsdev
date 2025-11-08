// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-11-08",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Guilherme Souza - Frontend Software Engineer",
      link: [
        // Modern browsers - SVG (preferred for dark mode support)
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // Fallback for browsers without SVG support
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        // Legacy browsers (placed in root by convention)
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // iOS/Apple devices
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        // Manifest & Canonical
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "canonical", href: "https://gmds.dev" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil specializing in modern web development, React, Vue.js, and Nuxt.js.",
        },
        {
          name: "keywords",
          content:
            "Guilherme Souza, Frontend Engineer, Software Engineer, Web Developer, React, Vue.js, Nuxt.js, Brazil",
        },
        { name: "author", content: "Guilherme Souza" },
        { name: "theme-color", content: "#ffffff" },
        { name: "color-scheme", content: "light dark" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://gmds.dev" },
        { property: "og:site_name", content: "Guilherme Souza" },
        {
          property: "og:title",
          content: "Guilherme Souza - Frontend Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil specializing in modern web development, React, Vue.js, and Nuxt.js.",
        },
        {
          property: "og:image",
          content: "https://gmds.dev/ogimage.jpg",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:alt",
          content: "Guilherme Souza - Frontend Software Engineer",
        },
        { property: "og:locale", content: "en_US" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Guilherme Souza - Frontend Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Guilherme Souza is a frontend software engineer from Brazil specializing in modern web development, React, Vue.js, and Nuxt.js.",
        },
        {
          name: "twitter:image",
          content: "https://gmds.dev/ogimage.jpg",
        },
        {
          name: "twitter:image:alt",
          content: "Guilherme Souza - Frontend Software Engineer",
        },
        // Additional SEO
        { name: "robots", content: "index, follow" },
        {
          name: "googlebot",
          content: "index, follow, max-snippet:-1, max-image-preview:large",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Guilherme Souza",
            jobTitle: "Frontend Software Engineer",
            nationality: "Brazilian",
            url: "https://gmds.dev",
            email: "dev.guih@gmail.com",
            sameAs: [
              "https://github.com/gmdsdev",
              "https://linkedin.com/in/gmdsdev",
            ],
          }),
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: ["@nuxt/eslint"],
});
