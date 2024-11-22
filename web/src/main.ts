import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import i18n from './i18n/index'
import '@src/assets/css/reset-1.5.0.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
