import { createStore } from "vuex";
import router from "../../router/index";
const listeningServer = 'https://mission-phoenix.onrender.com'

export default createStore({
    state: {
        users: [],
        newUser: {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            vetStatus: '',
            subscribedToEmails: false,
            purchases: [],
            shoppingCart: [],
            admin: false,
            addressLine1: '',
            addressLine2: '',
            zipCode: '',
            city: '',
            state: '',
            zip: ''
        },
        editUser: {},
        currentUser: null,
        userLoggedOn: false,
        token: null,
        guestCart: []
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
        SET_EDIT_USER(state, user){
            state.editUser = user[0];
        },
        LOGIN_USER(state, user){
            state.currentUser = user;
            state.userLoggedOn = true;
            // state.token = token;
        },
        LOGOFF_USER(state){
            state.currentUser = {};
            state.userLoggedOn = false;
            sessionStorage.clear();
        },
        GET_CURRENT_USER(state){
            return state.currentUser;
        },
        GET_USERS(state){
            return state.users;
        },
        RESET_NEW_USER(state){
            state.newUser = {};
        },
        ADD_TO_CART(state, cartItem){
            state.currentUser.shoppingCart.push(cartItem);
        },
        ADD_TO_GUEST_CART(state, cartItem){
            state.guestCart.push(cartItem);
        },
        REMOVE_FROM_CART(state, itemID){
            let array = state.currentUser.shoppingCart.filter((e) => e.cartID !== itemID);
            state.currentUser.shoppingCart = array;
        },
        REMOVE_FROM_GUEST_CART(state, itemID){
            let array = state.guestCart.filter((e) => e.cartID !== itemID);
            state.guestCart = array;
        }
    },
    actions: {
        async GetAllUsers({commit})  {
            try {
                let usersToLoad = [];
                await fetch(`${listeningServer}/users`)
                .then((res) => res.json())
                .then((data) => {
                    let users = [];
                    for(const id in data){
                        users.push({
                            userId: data[id]._id,
                            userName: data[id].userName,
                            password: data[id].password,
                            firstName: data[id].firstName,
                            lastName: data[id].lastName,
                            emailAddress: data[id].emailAddress,
                            phoneNumber: data[id].phoneNumber,
                            vetStatus: data[id].vetStatus,
                            subscribedToEmails: data[id].subscribedToEmails,
                            purchases: data[id].purchases,
                            shoppingCart: data[id].shoppingCart,
                            admin: data[id].admin,
                            addressLine1: data[id].addressLine1,
                            addressLine2: data[id].addressLine2,
                            zipCode: data[id].zipCode,
                            city: data[id].city,
                            state: data[id].state,
                            zip: data[id].zip
                            
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
        async GetUserById({commit}, id) {
            try {
                await fetch(`${listeningServer}/users`)
                .then((res) => res.json())
                .then((data) => {
                    let user = data.filter((e) => e._id === id)
                    this.commit("SET_EDIT_USER", user)
                })
            } catch(err) {
                console.log(err)
            }
        },
        async SignInByUserName({commit}, userName)  {
            try {
                
                await fetch(`${listeningServer}/users`)
                .then((res) => res.json())
                .then((data) => {
                    let cachedUser = data.filter((e) => e.userName === userName);
                    this.commit("LOGIN_USER", cachedUser[0])
                })
            } catch(err) {
                console.error(err)
                // alert(err)
            }
        },
        async SignInUser({commit}, details){
            try {
                let potentialUser;
                await fetch(`${listeningServer}/users`)
                .then((res) => res.json())
                .then((data) => {
                  potentialUser = data.filter((e) => 
                    e.userName.toLowerCase() === details.userName.toLowerCase()
                  )
                }).then(() => {
                  if(potentialUser[0].password === details.password){
                
                    // Send to server for JWT
                    // fetch(`${listeningServer}/login`, {
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
                    //     sessionStorage.setItem("username", data.token)
                        
                    // }).then(
                    //     // router.push("/")
                    // )
                    commit("LOGIN_USER", potentialUser[0])
                    sessionStorage.setItem("username",potentialUser[0].userName)
                  } else {
                    alert("Username or password incorrect, please try again.")
                  }
                })
              } catch(err) {
                  console.error(err)
                  alert("Something went wrong, please try again.")
            }
            
        },
        SignOutUser({commit}, state) {
            this.commit("LOGOFF_USER")
        },
        SignInUserWithSessionStorage({dispatch, commit}){
            const sessionUserName = sessionStorage.getItem('username')
            if(sessionUserName){
                this.dispatch("SignInByUserName", sessionUserName)
            } else {
                this.commit("LOGOFF_USER")
            }
        },
        NewUser({commit, dispatch}) {
            dispatch("GetAllUsers").then(() => {
                    let uniqueEmail = this.state.users.filter(
                        (e) => e.emailAddress.toLowerCase() === this.state.newUser.emailAddress.toLowerCase(),
                    )
            
                    let uniqueUserName = this.state.users.filter(
                        (e) => e.userName.toLowerCase() === this.state.newUser.userName.toLowerCase(),
                    )
                  
                    if(uniqueUserName.length > 0) {
                        alert("Username is already in use.")
                    } else if(uniqueEmail.length > 0 ) {
                        alert("Email is already in use.")
                    } else {
                        const requestOptions = {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                              // "auth-token": state.token
                            },
                            body: JSON.stringify({
                                userName: this.state.newUser.userName,
                                password: this.state.newUser.password,
                                firstName: this.state.newUser.firstName,
                                lastName: this.state.newUser.lastName,
                                emailAddress: this.state.newUser.emailAddress,
                                phoneNumber: this.state.newUser.phoneNumber,
                                vetStatus: this.state.newUser.vetStatus,
                                subscribedToEmails: this.state.newUser.subscribedToEmails,
                                purchases: this.state.newUser.purchases,
                                shoppingCart: this.state.newUser.shoppingCart,
                                admin: this.state.newUser.admin,
                                addressLine1: this.state.newUser.addressLine1,
                                addressLine2: this.state.newUser.addressLine2,
                                zipCode: this.state.newUser.zipCode,
                                city: this.state.newUser.city,
                                state: this.state.newUser.state,
                                zip: this.state.newUser.zip
                            
                            }) 
                        }
                        fetch(`${listeningServer}/users/new`, requestOptions)
                            .then (() => {
                                this.state.currentUser = this.state.newUser;
                                this.state.userLoggedOn = true;
                                this.state.newUser = {};
                            }
                        ).then(() => {
                            router.push("/")
                        })
                    }
            })   
        },
        EditUser() {      
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    // "auth-token": state.token
                },
                body: JSON.stringify({
                    userName: this.state.editUser.userName,
                    password: this.state.editUser.password,
                    firstName: this.state.editUser.firstName,
                    lastName: this.state.editUser.lastName,
                    emailAddress: this.state.editUser.emailAddress,
                    phoneNumber: this.state.editUser.phoneNumber,
                    vetStatus: this.state.editUser.vetStatus,
                    subscribedToEmails: this.state.editUser.subscribedToEmails,
                    purchases: this.state.editUser.purchases,
                    shoppingCart: this.state.editUser.shoppingCart,
                    admin: this.state.editUser.admin,
                    addressLine1: this.state.editUser.addressLine1,
                    addressLine2: this.state.editUser.addressLine2,
                    zipCode: this.state.editUser.zipCode,
                    city: this.state.editUser.city,
                    state: this.state.editUser.state,
                    zip: this.state.editUser.zip
                
                }) 
            }
            fetch(`${listeningServer}/users/update`, requestOptions)
            .then(() => {
                router.push("/user-accounts-display")
            })
        },
        GetCurrentUser(){
            return this.state.currentUser;
        },
        AddToCart({commit}, cartItem){
            if(this.state.userLoggedOn){
                this.commit("ADD_TO_CART", cartItem);

                const requestOptions = {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json"
                      // "auth-token": state.token
                    },
                    body: JSON.stringify({
                        userName: this.state.currentUser.userName,
                        password: this.state.currentUser.password,
                        firstName: this.state.currentUser.firstName,
                        lastName: this.state.currentUser.lastName,
                        emailAddress: this.state.currentUser.emailAddress,
                        phoneNumber: this.state.currentUser.phoneNumber,
                        vetStatus: this.state.currentUser.vetStatus,
                        subscribedToEmails: this.state.currentUser.subscribedToEmails,
                        purchases: this.state.currentUser.purchases,
                        shoppingCart: this.state.currentUser.shoppingCart,
                        admin: this.state.currentUser.admin,
                        addressLine1: this.state.currentUser.addressLine1,
                        addressLine2: this.state.currentUser.addressLine2,
                        zipCode: this.state.currentUser.zipCode,
                        city: this.state.currentUser.city,
                        state: this.state.newUser.state,
                        zip: this.state.newUser.zip,
                        
                    }) 
                  }
                  fetch(`${listeningServer}/users/update/${this.state.currentUser._id}`, 
                  requestOptions)
                    .then(
                        res => res.json()
                    ).then(() => {
                        router.push(`/gear-${cartItem.category}`)
                    })
                    // router.push('/users')
            } else {
                this.commit("ADD_TO_GUEST_CART", cartItem);
            }
        },
        RemoveFromCart({commit}, id){
            if(this.state.userLoggedOn){
                this.commit("REMOVE_FROM_CART", id);

                const requestOptions = {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json"
                      // "auth-token": state.token
                    },
                    body: JSON.stringify({
                        userName: this.state.currentUser.userName,
                        password: this.state.currentUser.password,
                        firstName: this.state.currentUser.firstName,
                        lastName: this.state.currentUser.lastName,
                        emailAddress: this.state.currentUser.emailAddress,
                        phoneNumber: this.state.currentUser.phoneNumber,
                        vetStatus: this.state.currentUser.vetStatus,
                        subscribedToEmails: this.state.currentUser.subscribedToEmails,
                        purchases: this.state.currentUser.purchases,
                        shoppingCart: this.state.currentUser.shoppingCart,
                        admin: this.state.currentUser.admin,
                        addressLine1: this.state.currentUser.addressLine1,
                        addressLine2: this.state.currentUser.addressLine2,
                        zipCode: this.state.currentUser.zipCode,
                        city: this.state.currentUser.city,
                        state: this.state.newUser.state,
                        zip: this.state.newUser.zip,
                    }) 
                  }
                  fetch(`${listeningServer}/users/update/${this.state.currentUser._id}`, 
                  requestOptions)
                    .then(
                        res => res.json()
                    )
                    // router.push('/users')
            } else {
                this.commit("REMOVE_FROM_GUEST_CART", id);
            }
        }
    },
    getters: {
        isLoggedIn(state){
            return state.userLoggedOn
        }, 
        getFirstName(state){
            // if(state.userLoggedOn){
                return state.currentUser.firstName
            // }
        },
    }

})