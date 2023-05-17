<template>
  <router-link :to="{ path }">Back</router-link>
</template>

<script>
export default {
  props: ['path'],
}
</script>

<style>
/* .back-button__gear {
  width: 60px;
  height: 25px;
  color: rgb(82, 82, 82);
  position: relative;
  top: 205px !important;
  left: 20%;
  background-color: red;
  text-align: center;
} */
</style>
