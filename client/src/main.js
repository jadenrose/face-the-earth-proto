import { createApp } from 'vue'
import App from './app/App.vue'
import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app')
