import store from '@/store'
import '@/styles/index.css'
import {createApp} from 'vue'
import App from './App.vue'


const app = createApp(App)

app
    .use(store)
    .mount('#app')
