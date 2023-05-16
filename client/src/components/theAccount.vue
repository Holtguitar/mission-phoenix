<template>
  <div class="accounts-home" v-if="!this.$store.state.userLoggedOn">
    <h1 class="accounts-home__title">
      Join Us
    </h1>
    <p v-if="!this.signIn" class="sign-in-toggle">
      Already have an account?
      <u @click="this.toggleSignIn()">Sign In</u>
    </p>
    <p v-else class="sign-in-toggle">
      <u @click="this.toggleSignIn()">Register</u>
      for a new account.
    </p>
    <hr />
    <br />
    <div v-if="!this.signIn" class="register__form-container">
      <h2 class="register__form-title">New Here? Create an account.</h2>
      <form class="register__form">
        <div class="register__form-row-1">
          <input
            type="text"
            placeholder="First Name"
            v-model="this.$store.state.newUser.firstName"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            v-model="this.$store.state.newUser.lastName"
            required
          />
          <input
            type="text"
            placeholder="User Name"
            v-model="this.$store.state.newUser.userName"
            required
          />
        </div>
        <div class="register__form-row-2">
          <input
            type="password"
            placeholder="Password"
            v-model="this.$store.state.newUser.password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            v-model="this.confirmPassword"
            required
          />
        </div>
        <div class="register__form-row-3">
          <input
            type="text"
            placeholder="Email Address (optional)"
            v-model="this.$store.state.newUser.emailAddress"
          />
          <input
            type="text"
            placeholder="Phone Number (optional)"
            v-model="this.$store.state.newUser.phoneNumber"
          />
        </div>
        <div class="register__form-row-4">
          <div>
            <label for="vet-status">Veteran Affiliation</label>
            <select
              class="vet-select"
              name="vet-status"
              v-model="this.$store.state.newUser.vetStatus"
            >
              <option>Veteran</option>
              <option>Current Service Member</option>
              <option>Veteran Spouse/Family</option>
              <option>Veteran Supporter</option>
            </select>
          </div>
          <div>
            <input
              class="subscribe-check"
              type="checkbox"
              v-model="this.$store.state.newUser.subscribedToEmails"
              name="subscribed-to-email"
            />
            <label>Subsribe to our news letter</label>
          </div>

          <div>
            <input
              type="submit"
              value="Create Account"
              class="register-form-button"
              @click.prevent="this.attemptNewUser()"
            />
          </div>
        </div>
      </form>
    </div>
    <div v-else class="sign-in__form-container">
      <h2>
        Welcome back! Sign in here.
      </h2>
      <form class="sign-in__form">
        <div class="sign-in__form-row-1">
          <input
            type="text"
            placeholder="User Name"
            required
            v-model="this.login_form.userName"
          />
          <input
            type="password"
            placeholder="Password"
            required
            v-model="this.login_form.password"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          class="sign-in-button"
          @click.prevent="this.signInUser()"
        />
      </form>
    </div>
  </div>
  <div v-else class="accounts-home">
    <h1>Account Info</h1>
    <hr />
    <button @click.prevent="this.signOut()">Sign Out</button>
    <div class="account-info">
      <div class="user-name">
        <h3>
          Name:
          {{ this.$store.state.currentUser.firstName }}
          {{ this.$store.state.currentUser.lastName }}
        </h3>
      </div>
      <div class="user-email">
        <h3>Email: {{ this.$store.state.currentUser.emailAddress }}</h3>
      </div>
      <div>
        <h3>Phone: {{ this.$store.state.currentUser.phoneNumber }}</h3>
      </div>
      <div class="vet-status">
        <h3>Veteran Status: {{ this.$store.state.currentUser.vetStatus }}</h3>
      </div>
    </div>
  </div>
  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import users from './modules/users'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  setup() {
    const {
      newUser,
      state,
      SignInUser,
      GetAllUsers,
      user,
      ConfirmUnique,
    } = users()

    return {
      newUser,
      state,
      SignInUser,
      GetAllUsers,
      user,
      ConfirmUnique,
    }
  },
  components: {
    theFooter,
  },
  data() {
    return {
      confirmPassword: '',
      signInUserName: '',
      signInPassword: '',
      store: useStore(),
      login_form: ref({}),
      signIn: false,
      store: useStore(),
    }
  },
  methods: {
    signInUser() {
      this.store.dispatch('SignInUser', this.login_form)
    },
    attemptNewUser() {
      if (this.$store.state.newUser.userName !== '') {
        if (
          this.$store.state.newUser.firstName !== '' &&
          this.$store.state.newUser.lastName !== ''
        ) {
          if (
            this.$store.state.newUser.password !== '' &&
            this.confirmPassword !== ''
          ) {
            if (this.$store.state.newUser.password === this.confirmPassword) {
              if (this.$store.state.newUser.password.length > 7) {
                this.store.dispatch('NewUser')
              } else {
                alert('Password must be longer than 7 characters.')
              }
            } else {
              alert('Passwords do not match.')
            }
          } else {
            alert('Passwords cannot be blank.')
          }
        } else {
          alert('Name cannot be blank.')
        }
      } else {
        alert('Username cannot be blank.')
      }
    },
    signOut() {
      this.store.dispatch('SignOutUser')
    },
    toggleSignIn() {
      this.signIn = !this.signIn
    },
  },
  computed: {
    passwordsMatch() {
      if (state.newPassword === this.confirmPassword) {
        return true
      } else {
        return false
      }
    },
    getUser() {
      // this.state.
    },
  },
  created() {
    // this.GetAllUsers()
  },
  mounted() {
    window.scrollTo(0, 0)
    this.store.dispatch('GetAllUsers')
    this.store.dispatch('SignInUserWithSessionStorage')
    this.signIn = false
  },
}
</script>

<style>
.accounts-home {
  position: relative;
  width: 75%;
  min-height: 100vh;
  left: 12.5%;
  height: fit-content;
  text-align: center;
  top: 25px;
}

.accounts-home__title {
  position: relative;
  top: 20%;
  text-align: center;
}

.accounts-home hr {
  width: 15%;
  margin-top: 2%;
  margin-bottom: 20px;
}

button:hover {
  cursor: pointer;
}

.sign-in-toggle {
  position: relative;
  width: 50%;
  height: 10%;
  left: 25%;
  text-align: center;
}

.sign-in-toggle u:hover {
  cursor: pointer;
}
/* Register Form */
.register__form-container {
  position: absolute;
  width: 75%;
  height: 65vh;
  text-align: center;
  left: 12.5%;
  padding-top: 2.5%;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
}

.register__form-container input {
  height: 30%;
  border-radius: 2px;
  position: relative;
  top: 20%;
  padding-left: 5px;
  border: grey solid 1px;
}

.register__form {
  position: relative;
  height: 85%;
  width: 100%;
}

.register-form-button {
  position: relative;
  width: 30%;
  top: -2% !important;
  height: 50% !important;
  color: rgb(81, 81, 81) !important;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
}

.register-form-button:hover {
  cursor: pointer;
}

.register-form-button:active {
  transform: scale(0.97);
}

.register__form-title {
  position: relative;
  width: 100%;
  height: 5%;
  top: 0%;
}

.register__form-row-1 {
  position: relative;
  height: 20%;
  width: 90%;
  left: 5%;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.register__form-row-2 {
  position: relative;
  height: 20%;
  width: 90%;
  left: 5%;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.register__form-row-3 {
  position: relative;
  height: 20%;
  width: 90%;
  left: 5%;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.register__form-row-4 {
  position: relative;
  height: 40%;
  width: 90%;
  left: 5%;
  padding-top: 1%;
}

.register__form-row-4 div {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 15px;
  height: 33%;
  width: 100%;
}

.subscribe-check {
  position: relative;
  top: -1% !important;
}

.vet-select {
  height: 35%;
}

/* Sign in Form */

.sign-in__form-container {
  position: relative;
  width: 40%;
  height: 20vh;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  left: 30%;
  top: 0;
}

.sign-in__form {
  position: relative;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5%;
}

.sign-in__form-container button {
  margin: 15px;
  width: 155px;
}

.sign-in__form-row-1 {
  position: relative;
  width: 90%;
  height: 35%;
  left: 5%;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.sign-in__form-row-1 input {
  position: relative;
  padding-left: 2.5%;
}

.sign-in-button {
  position: relative;
  width: 30%;
  height: 35%;
  left: 35%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
}

.sign-in-button:hover {
  cursor: pointer;
}

.sign-in-button:active {
  transform: scale(0.98);
}

.users {
  position: relative;
  height: 100vw;
  width: 100vw;
  top: 50%;
}
</style>
