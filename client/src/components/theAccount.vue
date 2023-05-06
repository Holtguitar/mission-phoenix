<template>
  <div class="accounts-home">
    <div style="width: 500px; background-color: red;">
      <h1
        v-if="this.state.isLoading"
        v-for="{ user, index } in this.$store.state.users"
        :key="index"
      >
        Name: {{ user.firstName }}
      </h1>
      <h1 v-else>Loading...</h1>
    </div>
    <h1>
      Join Us
    </h1>
    <br />
    <div class="register__form-container">
      <h2>New Here? Create an account.</h2>
      <form class="register__form">
        <input
          type="text"
          placeholder="First Name"
          v-model="state.newFirstName"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          v-model="state.newLastName"
          required
        />
        <input
          type="text"
          placeholder="User Name"
          v-model="state.newUserName"
          required
        />
        <input
          type="password"
          placeholder="Password"
          v-model="state.newPassword"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="this.confirmPassword"
          required
        />
        <input
          type="text"
          placeholder="Email Address (optional)"
          v-model="state.newemailAddress"
        />
        <input
          type="text"
          placeholder="Phone Number (optional)"
          v-model="state.newphoneNumber"
        />
        <input
          type="submit"
          value="Create Account"
          @click.prevent="newUser()"
        />
      </form>
    </div>
    <div class="sign-in__form-container">
      <h2>Welcome back! Sign in here.</h2>
      <form class="sign-in__form">
        <input
          type="text"
          placeholder="User Name"
          required
          v-model="this.signInUserName"
        />
        <input
          type="password"
          placeholder="Password"
          required
          v-model="this.signInPassword"
        />
        <input
          type="submit"
          value="Sign In"
          @click.prevent="SignInUser(this.signInUserName, this.signInPassword)"
        />
        <span>
          <p>{{ this.signInPassword }}</p>
          <p>{{ this.signInUserName }}</p>
        </span>
      </form>
    </div>
  </div>
  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import users from './modules/users'
import { useStore } from 'vuex'

export default {
  props: ['userName', 'firstName'],
  setup() {
    const { newUser, state, SignInUser, GetAllUsers, user } = users()

    return {
      newUser,
      state,
      SignInUser,
      GetAllUsers,
      user,
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
    }
  },
  methods: {
    getAllUsers() {
      this.store.dispatch('GetAllUsers')
      return this.store.state.users
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
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getAllUsers()
  },
}
</script>

<style>
.accounts-home {
  position: relative;
  width: 100%;
  top: 15%;
  height: fit-content;
  /* height: 100%; */
}

.accounts-home h1 {
  position: relative;
  top: 25%;
  text-align: center;
}

.accounts-home hr {
  width: 15%;
  margin-top: 3%;
}

/* Register Form */
.register__form-container {
  position: relative;
  width: 50vw;
  height: 65hv;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  left: 25%;
  top: 0;
  margin-bottom: 50px;
}

.register__form {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.register__form-container button {
  margin: 15px;
  width: 155px;
}

/* Register Form */
.sign-in__form-container {
  position: relative;
  width: 50vw;
  height: 65hv;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  left: 25%;
  top: 0;
}

.sign-in__form {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
}

.sign-in__form-container button {
  margin: 15px;
  width: 155px;
}

.users {
  position: relative;
  height: 100vw;
  background-color: red;
  width: 100vw;
  top: 50%;
}
</style>
