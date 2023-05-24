<template>
  <div class="user-display-section">
    <h1><u>Users Managent</u></h1>
    <div class="user-display-grid">
      <div class="user-display-header">
        <div class="user-display-header__item">First/Last</div>
        <div class="user-display-header__item">Email</div>
      </div>
      <div class="user-display-row__container">
        <div class="user-display-row" v-for="user in this.store.state.users">
          <div class="user-display-row__item">
            <RouterLink :to="{ name: 'editUser', params: { id: user.userId } }">
              <img id="edit-pencil" src="/edit-pencil.png" />
            </RouterLink>
            {{ user.firstName }} {{ user.lastName }}
          </div>
          <div class="user-display-row__item">{{ user.emailAddress }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default {
  data() {
    return {
      store: useStore(),
    }
  },
  methods: {},
  computed: {
    isUserAdmin() {
      if (this.$store.state.userLoggedOn) {
        if (this.$store.state.currentUser.admin) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
  beforeMount() {
    this.store.dispatch('GetAllUsers')
    this.store.dispatch('SignInUserWithSessionStorage')
    this.store.dispatch('GetCurrentUser')
  },
  mounted() {
    this.store.dispatch('GetAllUsers')
    this.store.dispatch('SignInUserWithSessionStorage')
    this.store.dispatch('GetCurrentUser')
  },
}
</script>

<style>
.add-users-link-container {
  text-decoration: none;
  color: rgb(80, 80, 80);
  width: 10%;
  height: 50px;
  font-size: 15px;
  border: 1px grey solid;
}

.add-users-link .add-users-link:hover {
  text-decoration: underline;
}

#edit-pencil {
  position: relative;
  float: left;
  width: 12px;
  left: 5%;
}

#edit-pencil:hover {
  cursor: pointer;
}

.hr-sep {
  width: 100%;
}

.user-display-section {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  margin-top: 15%;
}

.user-display-grid {
  position: relative;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 25%;
  border: 1px solid grey;
}

.user-display-header {
  display: flex;
}

.user-display-header__item {
  background-color: rgb(64, 66, 94);
  color: whitesmoke;
}

.user-display-row__container {
  margin-bottom: 15px;
}

.user-display-row {
  display: flex;
  /* margin-bottom: 15px !important; */
  margin-top: 15px !important;
}

.user-display-header__item,
.user-display-row__item {
  width: 100%;
  height: 20px;
  overflow: scroll;
  scrollbar-color: transparent;
}

.user-display-row {
  /* border-top: 1px solid grey; */
}

.user-display-header {
  height: 30px;
}

.user-display-row {
  /* height: fit-content */
}

.user__first-last {
  display: flex;
  width: 25%;
  position: relative;
  left: 37.5%;
  text-align: center;
  /* border: double 1.5px grey; */
}
.user__first-last h3 {
  width: 100%;
}
</style>
