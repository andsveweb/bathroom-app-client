import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import moment from 'moment'

// create and mount app and use all plugins
createApp(App).use(store).use(router).use(moment).use(VueAxios, axios).mount('#app') //
