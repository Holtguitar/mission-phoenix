import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as dotenv from "dotenv"
import store from "../src/components/store";

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
