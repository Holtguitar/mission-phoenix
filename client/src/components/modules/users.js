import {ref, computed} from 'vue'
import { useRoute, useRouter} from 'vue-router'
// import store from "../store/store"

const getUsers = () => {

    const route = useRoute();
    const router = useRouter();

    const userId = computed(() => route.params.id);

    const state = ref({
        newUserName: '',
        newPassword: '',
        newFirstName: '',
        newLastName: '',
        newemailAddress: '',
        newphoneNumber: '',
        newVetStatus: false,
        newsubscribedToEmails: false,
        currentUser: {},
        userLoggedIn: false,
        users: {},
    })

    const GetAllUsers = async () => {
        try {
            await fetch('http://localhost:3000/users')
            .then((res) => res.json())
            .then((data) => {
              state.value.users = data
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
            subscribedToEmails: state.value.newsubscribedToEmails
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

    const editUser = () => { 
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
            subscribedToEmails: state.value.newsubscribedToEmails
          }) 
        }
        fetch("http://localhost:3000/users/update/" + userId.value, 
        requestOptions)
          .then(res =>  res.body ) 
          .then(res => {console.log(res)}) 
          router.push('/users')
      }

    const user = ref({});

    const GetUserById = async () => {
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

    const SignInUser =  async (userName, password) => {
        try {
          await fetch('http://localhost:3000/users')
          .then((res) => res.json())
          .then((data) => {
            
            // const attempt = data.filter(t => t.userName.toLowerCase() == userName.toLowerCase())
            //  user.value = data.filter(t => t.userName === "Holtguitar");
             state.userLoggedIn = true;
             state.currentUser = data.filter(t => t.userName === "Holtguitar")
             console.log(state.currentUser)
            //  user.value = data.filter(t => t.userName == "holtguitar")
            //  console.log(user.value)
            // if(attempt.length === 1) {
            //   if(attempt[0].password === password){
            //     alert("Correct")
            //     user.value = attempt[0];
            //     state.currentUser = user.value;
            //     console.log(state.currentUser)
            //     state.userLoggedIn = true;
            //   } else {
            //     alert("incorrect")
            //   }
            // } else {
            //   alert("User not found")
            // }
          })
        } catch(err) {
            console.error(err)
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