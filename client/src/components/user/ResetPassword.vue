<template>
  <div class="reset-password__form-container">
    <h2>
      Reset Your Password
    </h2>
    <h3>Holtguitar</h3>
    <form class="reset-password__form">
      <div class="reset-password__form-row-1">
        <input
          type="password"
          placeholder="New Password"
          v-model="this.newPassword"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="this.confirmPassword"
          required
        />
      </div>
      <div class="reset-password__form-row-2">
        <select class="security-questions__select">
          <option class="security-questions__options">
            What is your mother's maiden name?
          </option>
        </select>
        <input
          type="text"
          class="security-questions__answer"
          placeholder="Answer"
        />
      </div>
      <div
        class="reset-password__buttons"
        @click.prevent="this.resetPassword()"
      >
        <button class="reset-password__button" @click.prevent>
          <router-link to="/account">Cancel</router-link>
        </button>
        <button class="cancel__button">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  data() {
    return {
      store: useStore(),
      newPassword: '',
      confirmPassword: '',
    }
  },
  methods: {
    resetPassword() {
      //Confirm Passwords Match
      if (this.newPassword === this.confirmPassword) {
        //Confirm Password Length
        if (this.newPassword.length > 7) {
          this.store.dispatch('ResetPassword', this.newPassword)
        } else {
          alert('Password must be longer than 7 characters.')
        }
      } else {
        alert('Passwords Do Not Match')
      }
    },
  },
  mounted() {
    this.store.dispatch('GetAllUsers')
  },
}
</script>
<style>
.reset-password__form-container {
  position: relative;
  width: 40%;
  height: 50vh;
  text-align: center;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  left: 35%;
  padding-top: 10px;
  margin-top: 15%;
}

.reset-password__form {
  position: relative;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5%;
}

.reset-password__form-container button {
  margin: 15px;
  width: 155px;
}

.reset-password__form-row-1 {
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  gap: 5%;
}

.reset-password__form-row-2 {
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 15%;
}

.reset-password__form-row-2 input,
.reset-password__form-row-2 select {
  position: relative;
  width: 50%;
  left: 25%;
}

.reset-password__form-row-1 input {
  position: relative;
  padding-left: 2.5%;
  height: 50%;
  width: 35%;
  top: 25%;
}

.reset-password__buttons {
  width: 100%;
  height: 25%;
}

.reset-password__button {
  position: relative;
  width: 30%;
  height: 50%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
}

.cancel__button {
  position: relative;
  width: 30%;
  height: 50%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
}

.reset-password__button:hover,
.cancel__button:hover {
  cursor: pointer;
}

.reset-password-button:active {
  transform: scale(0.98);
}
</style>
