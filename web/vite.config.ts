import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, path.join(process.cwd(), 'env'), '')
  console.log(env.VITE_APP_TITLE, command, mode)
  return {
    envDir: 'env',
    server: {
      port: 3020
      // proxy: {
      //   '/api': {
      //     //获取数据的服务器地址设置
      //     target: env.VITE_SERVE,
      //     //需要代理跨域
      //     changeOrigin: true
      //     //路径重写
      //     // rewrite: (path) => path.replace(/^\/api/, ''),
      //   }
      // }
    },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve'
      })
    ]
  }
})
