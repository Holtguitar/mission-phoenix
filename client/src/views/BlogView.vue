<template>
  <div class="blogs-section">
    <theBlogHome></theBlogHome>
  </div>
</template>

<script>
import theBlogHome from '../components/theBlogHome.vue'

export default {
  components: {
    theBlogHome,
  },
}
</script>

<style>
.blogs-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
}
</style>
