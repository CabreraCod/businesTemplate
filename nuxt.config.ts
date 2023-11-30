
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
  },
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
  buildModules: [
    'nuxt-vite'
  ],
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: false,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
      useVuetifyLabs: false, 
    }
  }
})