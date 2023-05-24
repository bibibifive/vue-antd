import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 标签中以 -icon 结尾的均视为自定义元素
          isCustomElement: (tag) => tag.endsWith('-icon'),
        },
      },
    }),
    visualizer(),
  ],
  base: './',
  build: {
    outDir: './docs',
    // sourcemap:true,
    chunkSizeWarningLimit: 1000,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString()
    //       }
    //     },
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       additionalData: '@import "@/assets/styles/base.scss";'
  //     }
  //   }
  // },
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://127.0.0.1:3000/',
    },
  },
})
