import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router.js'
import App from './App.vue'
import './input.css'
const store = createPinia()
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
