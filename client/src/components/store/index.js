import { createStore } from "vuex";
import router from "../../router/index";

export default createStore({
    state: {
        users: [],
        currentUser: null,
        userLoggedOn: false,
        token: null
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
        LOGIN_USER(state, user){
            state.currentUser = user;
            state.userLoggedOn = true;
            // state.token = token;
        },
        LOGOFF_USER(state){
            state.currentUser = {};
            state.userLoggedOn = false;
        },
        GET_CURRENT_USER(state){
            return state.currentUser;
        }
    },
    actions: {
        async GetAllUsers({commit})  {
            try {
                let usersToLoad = [];
                await fetch('http://localhost:3000/users')
                .then((res) => res.json())
                .then((data) => {
                    let users = [];

                    for(const id in data){
                        users.push({
                            userName: data[id].userName,
                            password: data[id].password,
                            firstName: data[id].firstName,
                            lastName: data[id].lastName,
                            emailAddress: data[id].emailAddress,
                            phoneNumber: data[id].phoneNumber,
                            vetStatus: data[id].vetStatus,
                            subscribedToEmails: data[id].subscribedToEmails,
                            purchases: data[id].purchases,
                            shoppingCart: data[id].shoppingCart
                        });
                    }

                    usersToLoad = users;
                  
            
                }).then(() => {
                  this.commit("SET_USERS", usersToLoad)
                })
            } catch(err) {
                console.error(err)
                // alert(err)
            }
        },
        async SignInUser({commit}, details){
            try {
                let potentialUser;
                await fetch('http://localhost:3000/users')
                .then((res) => res.json())
                .then((data) => {
                  potentialUser = data.filter((e) => 
                    e.userName.toLowerCase() === details.userName.toLowerCase()
                  )
                }).then(() => {
                  if(potentialUser[0].password === details.password){
                    // Send to server for JWT
                    // fetch("http://localhost:3000/login", {
                    //     method: "POST", 
                    //     headers: {
                    //         "content-Type": "application/json",
                    //     },
                    //     body: JSON.stringify({
                    //         user: potentialUser[0],
                    //     })
                    // }).then((res) => res.json())
                    // .then((data) => {
                        
                    //     this.commit("LOGIN_USER", data.token, data.user)
                    // }).then(router.push("/"))
                    commit("LOGIN_USER", potentialUser[0])
                  } else {
                    alert("Username or password incorrect, please try again.")
                  }
                })
              } catch(err) {
                  console.error(err)
                  alert("Something went wrong, please try again.")
            }
            
        },
        SignOutUser({commit}) {
            this.commit("LOGOFF_USER")
        },
        GetCurrentUser(){
            return this.state.currentUser;
        }

    },
    getters: {
        isLoggedIn(state){
            return state.userLoggedOn
        }, 
        getFirstName(state){
            if(state.userLoggedOn){
                return state.currentUser.firstName
            }
        }
    }

})