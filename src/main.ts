import './assets/style/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { setupElementPlus } from './plugins/element'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 使用element-plus插件
setupElementPlus(app)

app.mount('#app')
