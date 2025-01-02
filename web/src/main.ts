import { createApp } from 'vue'
import VC2 from '@ektx/vc2'
import router from './router'
import App from './App.vue'
import i18n from './i18n/index'
import '@src/assets/css/reset-1.5.0.css'
import '@ektx/vc2/lib/es/index.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
// @ts-ignore
app.use(VC2)
app.mount('#app')
