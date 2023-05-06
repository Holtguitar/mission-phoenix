import { createStore } from "vuex";
import router from "../../router/index";

export default createStore({
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users
            console.log(users)
        }
    },
    actions: {
        async GetAllUsers()  {
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
                            subscribedToEmails: data[id].subscribedToEmails
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
        }
    }

})