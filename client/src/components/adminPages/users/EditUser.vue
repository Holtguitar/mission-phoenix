<template>
  <EditUserTemplate
    :key="this.store.state.editUser.userId"
    :id="this.store.state.editUser.userId"
    :firstName="this.store.state.editUser.firstName"
    :lastName="this.store.state.editUser.lastName"
    :emailAddress="this.store.state.editUser.emailAddress"
    :userName="this.store.state.editUser.userName"
    :admin="this.store.state.editUser.admin"
    :phoneNumber="this.store.state.editUser.phoneNumber"
    :addressLine1="this.store.state.editUser.addressLine1"
    :addressLine2="this.store.state.editUser.addressLine2"
    :state="this.store.state.editUser.state"
    :city="this.store.state.editUser.city"
    :zip="this.store.state.editUser.zip"
    :subscribedToEmails="this.store.state.editUser.subscribedToEmails"
    :vetStatus="this.store.state.editUser.vetStatus"
  ></EditUserTemplate>
</template>

<script>
import { useStore } from 'vuex'
import EditUserTemplate from './EditUserTemplate.vue'
import { useRoute } from 'vue-router'
export default {
  data() {
    return {
      store: useStore(),
      route: useRoute(),
    }
  },
  components: {
    EditUserTemplate,
  },
  methods: {
    getUserById() {
      this.store.dispatch('GetUserById', this.route.params.id)
    },
  },
  mounted() {
    this.getUserById()
  },
}
</script>

<style></style>
