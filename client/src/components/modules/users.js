import {ref, computed} from 'vue'
import { useRoute, useRouter} from 'vue-router'
import {useStore} from "vuex"

const listeningServer = 'https://mission-phoenix.onrender.com'

const getUsers = () => {

    const route = useRoute();
    const router = useRouter();
    const store = useStore()
    const userId = computed(() => route.params.id);
 

    let user = ref({});
    const users = ref({})

    const state = ref({
        newUserName: '',
        newPassword: '',
        newFirstName: '',
        newLastName: '',
        newemailAddress: '',
        newphoneNumber: '',
        newVetStatus: '',
        newSubscribedToEmails: false,
        newPurchases: [],
        newShoppingCart: [],
        currentUser: {},
        userLoggedIn: false,
        users: [],
        isLoading: true
    })

    const GetAllUsers = async () => {
        try {
            await fetch(`${listeningServer}/users`)
            .then((res) => res.json())
            .then((data) => {
              state.value.users = data
            }).then(() => {
              state.value.isLoading = false;
            })
        } catch(err) {
            console.error(err)
            // alert(err)
        }
    }

    const newUser = () => { 
      let uniqueEmail = state.value.users.filter(
        (e) => e.emailAddress.toLowerCase() === state.value.newemailAddress.toLowerCase(),
      )

      let uniqueUserName = state.value.users.filter(
        (e) => e.userName.toLowerCase() === state.value.newUserName.toLowerCase(),
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
            userName: state.value.newUserName,
            password: state.value.newPassword,
            firstName: state.value.newFirstName,
            lastName: state.value.newLastName,
            emailAddress: state.value.newemailAddress,
            phoneNumber: state.value.newphoneNumber,
            vetStatus: state.value.newVetStatus,
            subscribedToEmails: state.value.newSubscribedToEmails,
            purchases: [],
            shoppingCart: []
          }) 
        }
          fetch(`${listeningServer}/users/new`, 
          requestOptions
        ).then(
          setTimeout(() => {
            SignInUser(state.value.newUserName, state.value.newPassword)
          }, 1000)
        )
      }  
    }

    const deleteUser = (_id) => {
        fetch(`${listeningServer}/users/delete/${_id}`, { method: "DELETE"})
            .then(GetAllUsers())
    }

    const editUser = (userId) => { 
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
            // "auth-token": state.token
          },
          body: JSON.stringify({
            userName: state.value.newUserName,
            password: state.value.newPassword,
            firstName: state.value.newFirstName,
            lastName: state.value.newLastName,
            emailAddress: state.value.newemailAddress,
            phoneNumber: state.value.newphoneNumber,
            vetStatus: state.value.newVetStatus,
            subscribedToEmails: state.value.newSubscribedToEmails,
            purchases: state.value.newPurchases,
            shoppingCart: state.value.newShoppingCart
          }) 
        }
        fetch(`${listeningServer}/users/update/${userId.value}`, 
        requestOptions)
          .then(res =>  res.body ) 
          .then(res => {console.log(res)}) 
          router.push('/users')
      }

    
    const GetUserById = async (userId) => {
        try {
            fetch(`${listeningServer}/users/update/${userId.value}`)
            .then(res => res.json)
            .then(data => {
               user.value = data.filter(t => t._id === userId.value)
            })
        } catch(err) {
            // alert(err)
        }
    }

    const SignInUser =  async (userName, password) => {
      let potentialUser;
        try {
          await fetch(`${listeningServer}/users`)
          .then((res) => res.json())
          .then((data) => {
            // Compare username to entire array of users
            potentialUser = data.filter((e) => e.userName.toLowerCase() == userName.toLowerCase());
           
            // check if passwords match
            if(password === potentialUser[0].password){
              store.state.userLoggedIn = true;
              store.state.currentUser = potentialUser[0];
              router.push("/")
            } else {
              alert("Password is incorrect. Please try again")
            }
          })
        } catch(err) {
            console.error(err)
            alert("Something went wrong, please try again.")
      }

    }

    const SignOutUser = () => {
      state.value.currentUser = {};
      console.log("Signed Out")
    }

    const GetUserByEmail = async () => {
      try {
          fetch(`${listeningServer}/users/${_id}`)
          .then(res => res.json)
          .then(data => {
             user.value = data.filter(t => t._id === userId.value)
          })
      } catch(err) {
          // alert(err)
      }
    }

    // const ConfirmUnique = async () => {
    //   let similarEmail, similarUserName
    //   await GetAllUsers()
    //   setTimeout(() => {
    //   }, 1000)
    // }

    return {
        state,
        GetAllUsers,
        newUser,
        deleteUser,
        editUser,
        user,
        userId, 
        GetUserByEmail,
        GetUserById,
        SignInUser,
        SignOutUser,
        // ConfirmUnique
    }
}

export default getUsers