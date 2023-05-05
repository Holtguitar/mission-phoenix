<template>
  <div class="home-section">
    <theHome></theHome>
  </div>
</template>

<script>
import theHome from '../components/theHome.vue'

export default {
  components: {
    theHome,
  },
}
</script>

<style>
.home-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
