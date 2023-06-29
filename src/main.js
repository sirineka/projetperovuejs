import './assets/main.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Use plugin with optional defaults
app.use(VCalendar, {})

app.mount('#app')

