import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import * as dotenv from "dotenv"
import store from "../src/components/store";
import "./assets/main.css"


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

window.addEventListener('beforeunload', (e) => {
    // e.preventDefault();
    // e.returnValue = '';

    // if(store.state.userLoggedOn){
    //     sessionStorage.setItem("userName", store.state.currentUser.userName)
    //     sessionStorage.setItem("passcode", store.state.currentUser.password)
    // };
    // alert(store.state.userLoggedOn)
    // e.preventDefault()
})

window.addEventListener('load', () => {
    
    if(sessionStorage.getItem("userName")){
        // const currentUser = sessionStorage.getItem("userName")
        // const code = sessionStorage.getItem("passcode")
        // const details = {
        //     userName: currentUser,
        //     password: code
        // }
        // store.dispatch("GetAllUsers").then(() => {
        //     store.dispatch("SignInUser", details)
        // }).then(() => {
        //     sessionStorage.clear()
        // })
        
        
        // setTimeout(() => {
        //     sessionStorage.clear()
        // }, 500)
    }
    
})