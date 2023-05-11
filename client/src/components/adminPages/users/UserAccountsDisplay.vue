<template>
  <div class="user-display-section">
    <h1><u>Users Managent</u></h1>
    <div v-for="user in state.users" :key="user.userId">
      <div class="user__first-last">
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../modules/users'
import { onMounted } from 'vue'

export default {
  setup() {
    const { editUser, state, GetAllUsers, user, userId } = users()

    onMounted(() => {
      GetAllUsers()
    })

    return {
      user,
      userId,
      editUser,
      state,
    }
  },
}
</script>

<style>
.user-display-section {
  position: relative;
  width: 100vw;
  text-align: center;
}

.user__first-last {
  display: flex;
  width: 25%;
  position: relative;
  left: 37.5%;
  text-align: center;
  border: double 1.5px grey;
}
.user__first-last h3 {
  width: 100%;
}
</style>
