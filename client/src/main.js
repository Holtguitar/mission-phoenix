import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as dotenv from "dotenv"
import store from "../src/components/store";
import "./assets/main.css"

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

let currentUser;
let isLoggedIn = false;
window.addEventListener('beforeunload', () => {
    if(store.state.userLoggedOn){
        currentUser = store.state.currentUser
        isLoggedIn = true;
    }
})

window.addEventListener('load', () => {
    console.log(currentUser)
    console.log(isLoggedIn)
})