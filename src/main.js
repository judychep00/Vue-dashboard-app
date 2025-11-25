import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// ✅ create Pinia instance
const pinia = createPinia()

// ✅ install Pinia and Router
app.use(pinia)
app.use(router)

app.mount('#app')
