<template>
  <div class="mission-section">
    <theMission></theMission>
  </div>
</template>

<script>
import theMission from '../components/theMission.vue'

export default {
  components: {
    theMission,
  },
}
</script>

<style>
.mission-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
