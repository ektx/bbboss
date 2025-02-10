import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, path.join(process.cwd(), 'env'), '')
  console.log(env.VITE_APP_TITLE, command, mode)
  return {
    envDir: 'env',
    server: {
      port: 3020,
      proxy: {
        '/api': {
          //获取数据的服务器地址设置
          target: 'http://localhost:3000',
          //需要代理跨域
          changeOrigin: true
        }
      }
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
      }),
      VitePWA({
        registerType: 'autoUpdate',
        // 应用清单
        manifest: {
          name: '宝宝很棒',
          short_name: '宝宝很棒',
          description: '记录宝宝生活',
          theme_color: '#ccc',
          icons: [
            {
              src: 'logo.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        // 注册ws方式
        injectRegister: 'auto',
        // 设置缓存资源
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,jpg,jpeg}']
        },
        //dev环境也开启pwa
        devOptions: {
          enabled: true
        }
      })
    ]
  }
})
