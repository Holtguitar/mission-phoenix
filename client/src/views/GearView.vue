<template>
  <div class="gear-section">
    <gearHome></gearHome>
  </div>
</template>

<script>
import gearHome from '../components/gearHome.vue'

export default {
  components: {
    gearHome,
  },
}
</script>

<style>
.gear-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
}
</style>
