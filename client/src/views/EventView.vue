<template>
  <div class="events-section">
    <theEvents></theEvents>
  </div>
</template>

<script>
import theEvents from '../components/theEvents.vue'

export default {
  components: {
    theEvents,
  },
}
</script>

<style>
.events-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
}
</style>
