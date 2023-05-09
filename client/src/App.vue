<template>
  <theHeader></theHeader>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import theHeader from './components/theHeader.vue'
import theFooter from './components/theFooter.vue'
import users from './components/modules/users'
import gear from './components/modules/gear'

const { GetAllUsers } = users()
const { GetAllGear } = gear()
GetAllUsers()
GetAllGear()
</script>
