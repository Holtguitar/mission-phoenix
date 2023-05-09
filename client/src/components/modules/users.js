import {ref, computed} from 'vue'
import { useRoute, useRouter} from 'vue-router'


const getUsers = () => {

    const route = useRoute();
    const router = useRouter();

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
        newVetStatus: false,
        newsubscribedToEmails: false,
        newPurchases: [],
        newShoppingCart: [],
        currentUser: {},
        userLoggedIn: false,
        users: [],
        isLoading: true
    })

    const GetAllUsers = async () => {
        try {
            await fetch('http://localhost:3000/users')
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
            subscribedToEmails: state.value.newsubscribedToEmails,
            purchases: [],
            shoppingCart: []
          }) 
        }
          fetch("http://localhost:3000/users/new", 
          requestOptions
        ).then(GetAllUsers())
    }

    const deleteUser = (_id) => {
        fetch("http://localhost:3000/users/delete/" + _id, { method: "DELETE"})
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
            subscribedToEmails: state.value.newsubscribedToEmails,
            purchases: state.value.newPurchases,
            shoppingCart: state.value.newShoppingCart
          }) 
        }
        fetch(`http://localhost:3000/users/update/${userId.value}`, 
        requestOptions)
          .then(res =>  res.body ) 
          .then(res => {console.log(res)}) 
          router.push('/users')
      }

    
    const GetUserById = async (userId) => {
        try {
            fetch(`http://localhost:3000/users/update/${userId.value}`)
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
          await fetch('http://localhost:3000/users')
          .then((res) => res.json())
          .then((data) => {
            // Compare username to entire array of users
            potentialUser = data.filter((e) => e.userName.toLowerCase() == userName.toLowerCase());
           
            // check if passwords match
            if(password === potentialUser[0].password){
              alert("Correct")
            } else {
              alert("Incorrect")
            }
          }).then(() => {
            user = potentialUser[0];
            console.log(user)
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
          fetch("http://localhost:3000/users" + _id)
          .then(res => res.json)
          .then(data => {
             user.value = data.filter(t => t._id === userId.value)
          })
      } catch(err) {
          // alert(err)
      }
    }

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
        SignOutUser
    }
}

export default getUsers