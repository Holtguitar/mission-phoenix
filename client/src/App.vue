<script setup>
import { RouterLink, RouterView } from 'vue-router'
import theHeader from './components/theHeader.vue'
import theFooter from './components/theFooter.vue'
</script>

<template>
  <theHeader></theHeader>
  <RouterView />
</template>

<style scoped></style>
