<template>
  <div class="gear-home">
    <router-link to="/add-new-gear">Add New Gear</router-link>
    <!-- <h1>
      Phoenix Gear
      <hr />
    </h1> -->
    <img src="/public/gear/men/13-stars-1.jpeg" />
    <img src="/public/gear/women/22-stars-2.jpeg" />
  </div>

  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'

export default {
  components: {
    theFooter,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.gear-home {
  position: relative;
  width: 100%;
  height: 100%;
}

.gear-home h1 {
  position: relative;
  top: 25%;
  text-align: center;
}

.gear-home hr {
  width: 15%;
  margin-top: 3%;
}
</style>
