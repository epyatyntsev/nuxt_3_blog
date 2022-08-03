import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  router: {
    // https://router.vuejs.org/api/#routeroptions
    options: {
      
    }
  },

  css: ["@/assets/scss/main.scss"],

  buildModules: ["@pinia/nuxt"],
});
