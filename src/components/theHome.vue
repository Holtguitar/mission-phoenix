<template>
  <div class="home">
    <h1
      class="not-in-view-stationary"
      v-bind:class="{
        'fade-in-view-stationary in-view': inViewStationary,
      }"
    >
      Semper Orentiem
      <hr />
    </h1>
    <h2
      class="not-in-view"
      v-bind:class="{
        'fade-in-view in-view': inViewRising,
      }"
    >
      ALWAYS RISING
    </h2>
  </div>

  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'

export default {
  components: {
    theFooter,
  },
  data() {
    return {
      inViewStationary: false,
      inViewRising: false,
    }
  },
  methods: {
    toggleInViewStationary() {
      this.inViewStationary = true
    },
    toggleInViewRising() {
      this.inViewRising = true
    },
  },
  mounted() {
    window.scrollTo(0, 0)

    setTimeout(() => {
      this.toggleInViewStationary()
    }, 1000)

    setTimeout(() => {
      this.toggleInViewRising()
    }, 1120)
  },
}
</script>

<style>
.home {
  position: relative;
  width: 100%;
  height: 100%;
}

.home h1 {
  position: relative;
  top: 25%;
  text-align: center;
  text-shadow: 3px 3px 3px rgba(82, 82, 82, 0.492);
  /* background-color: red; */
}

.home h2 {
  position: relative;
  top: 25%;
  text-align: center;
  text-shadow: 3px 3px 3px rgba(82, 82, 82, 0.492);
  margin-top: 3%;
}

.home hr {
  position: relative;
  width: 15%;
  margin-top: 3%;
}

/* Fade In Animation */
/*          FADE IN ANIMATION            */
.not-in-view-stationary {
  /* opacity: 1; */
  opacity: 0;
  visibility: hidden;
}

.not-in-view {
  /* opacity: 1; */
  transform: translateY(20vh);
  opacity: 0;
  visibility: hidden;
}

.fade-in-view-stationary {
  transition: opacity 2.2s ease-in;
  will-change: opacity, visibility;
}

.fade-in-view {
  transition: opacity 2.2s ease-out, transform 2.2s ease-out;
  will-change: opacity, visibility;
}

.in-view {
  opacity: 1;
  transform: none;
  visibility: visible;
}
</style>
