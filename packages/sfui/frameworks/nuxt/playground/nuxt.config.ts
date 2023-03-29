// @ts-nocheck

export default defineNuxtConfig({
  modules: ['../src/module', '@nuxtjs/tailwindcss'],
  tailwindcss: {},
  storefrontUi: {
    contentPath: './../../../../node_modules/@storefront-ui/vue/dist/**/*.mjs',
  },
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/.*dist\/index\.mjs/],
    },
  },
});
