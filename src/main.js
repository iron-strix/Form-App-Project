import { createApp } from 'vue'
import '@/style.css'
import router from '@/router'
import App from '@/App.vue'
import FontAwesomeIcon from '@/utilities/FontAwesome'

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).use(router).mount('#app')
