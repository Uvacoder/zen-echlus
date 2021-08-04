const { appConfig } = require('./package.json')
const viteMainJs = require('vite-main-js')
// const { preprocess: svelteWindicss } = require('svelte-windicss-preprocess')
// import WindiCSS from 'vite-plugin-windicss'
const WindiCSS = require('vite-plugin-windicss')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    cssCodeSplit: true,
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    viteMainJs(),
    [WindiCSS.default()],
    svelte({
      preprocess: [
        // svelteWindicss({
        //   compile: false,
        //   prefix: 'windi-',
        //   globalPreflight: true,
        //   globalUtility: true,
        // }),
      ],
      emitCss: true,
      hot: !production,
    }),
  ],
}
