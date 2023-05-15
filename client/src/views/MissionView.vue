<template>
  <div class="mission-home">
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
.mission-home {
  position: relative;
  /* left: -6.25% !important; */
  left: 0% !important;
  top: 15%;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
