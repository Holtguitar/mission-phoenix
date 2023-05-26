<template>
  <div class="reset-password__form-container">
    <h2>
      Reset Your Password
    </h2>
    <div class="user-name__form" v-if="this.displayNameForm">
      <br />
      <h3>User Info</h3>
      <div class="input-container">
        <input
          type="text"
          placeholder="User Name"
          v-model="this.userInfo.userName"
        />
        <input
          type="text"
          placeholder="Email Address"
          v-model="this.userInfo.emailAddress"
        />
      </div>
      <div class="form-button__container">
        <div class="form-button">Cancel</div>
        <div class="form-button" @click="this.submitUserInfo()">Next</div>
      </div>
    </div>
    <div class="user-security-question__form" v-if="this.displaySecurityForm">
      <h3>Security Question</h3>
      <div class="input-container">
        <h3>{{ this.securityQuestion }}</h3>
        <input
          type="text"
          placeholder="Answer"
          v-model="this.securityAnswerAttempt"
        />
      </div>
      <div class="form-button__container">
        <div class="form-button">Cancel</div>
        <div class="form-button" @click="this.submitSecurityAnswer()">Next</div>
      </div>
    </div>
    <div class="user-password-reset__form" v-if="this.displayPasswordForm">
      <div class="input-container">
        <input
          type="password"
          placeholder="New Password"
          v-model="this.newPassword"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="this.confirmPassword"
        />
      </div>
      <div class="form-button__container">
        <div class="form-button">Cancel</div>
        <div class="form-button" @click="this.submitPasswordReset()">Reset</div>
      </div>
    </div>

    <!-- <form class="reset-password__form">
      <div class="reset-password__form-row-1">
        <input class="email-input" type="text" placeholder="Email Address" />
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
            {{ this.$store.state.currentUser.firstName }}
          </option>
        </select>
        <input
          type="text"
          class="security-questions__answer"
          placeholder="Answer"
        />
      </div>
      <div class="reset-password__buttons">
        <div
          class="reset-password__button"
          @click.prevent="this.resetPassword()"
        >
          <router-link to="/account">Cancel</router-link>
        </div>
        <div class="cancel__button">
          Reset
        </div>
      </div>
    </form> -->
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
      displayNameForm: true,
      displaySecurityForm: false,
      displayPasswordForm: false,
      userInfo: {
        username: '',
        emailAddress: '',
      },
      securityQuestion: '',
      securityAnswer: '',
      securityAnswerAttempt: '',
    }
  },
  methods: {
    submitUserInfo() {
      this.store.dispatch('ConfirmUserForReset', this.userInfo)

      if (this.store.state.resetUser === null) {
        alert('User Not Found.')
      } else {
        this.displayNameForm = false
        this.displaySecurityForm = true
        this.securityQuestion = this.$store.state.resetUser.securityQuestion[0]
        this.securityAnswer = this.$store.state.resetUser.securityQuestion[1]
      }
    },
    submitSecurityAnswer() {
      if (this.securityAnswer === this.securityAnswerAttempt) {
        this.displaySecurityForm = false
        this.displayPasswordForm = true
        this.securityAnswer = ''
      } else {
        alert('Incorrect, please try again.')
      }
    },
    submitPasswordReset() {
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
  height: 50vh;
  width: 50vw;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  text-align: center;
  position: relative;
  margin-top: 15%;
  left: 25%;
  padding-top: 1%;
}

.reset-password__form {
  position: relative;
  height: 60%;
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
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
}

.reset-password__form-row-2 {
  width: 100%;
  height: 50% !important;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 15%;
}

.reset-password__form-row-2 input,
.reset-password__form-row-2 select {
  position: relative;
  width: 35%;
  left: 32.5%;
}

.reset-password__form-row-1 input {
  position: relative;
  height: 25%;
  width: 35%;
  left: 32.5%;
}

.reset-password__buttons {
  position: relative;
  top: 25%;
  width: 100%;
  height: 25%;
  justify-content: center;
  gap: 5%;
  display: flex;
}

.reset-password__button {
  position: relative;
  width: 20%;
  height: 50%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
  background-color: whitesmoke;
  line-height: 150%;
}

.cancel__button {
  position: relative;
  width: 20%;
  height: 50%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
  background-color: whitesmoke;
  line-height: 150%;
}

.reset-password__button:hover,
.cancel__button:hover {
  cursor: pointer;
}

.reset-password-button:active {
  transform: scale(0.98);
}

/* Various stages of the password reset form */
.form-button__container {
  position: relative;
  width: 100%;
  height: 25%;
  margin-top: 15%;
  display: flex;
  justify-content: center;
  gap: 10%;
}

.form-button {
  position: relative;
  width: 20%;
  height: 50%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  color: rgb(81, 81, 81) !important;
  background-color: whitesmoke;
  line-height: 150%;
}

.form-button:hover {
  cursor: pointer;
}
.hidden {
  display: none;
}

.input-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
}
.user-name__form {
}

.user-security-question__form {
}
</style>
