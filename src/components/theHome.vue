<template>
  <div class="home">
    <div class="overlay">
      <video
        src="/river-video.mp4"
        autoplay
        muted
        loop
        style="
          width: 120vw;
          height: 120vh;
          left: -10%;
          position: relative;
          filter: brightness(50%);
          opacity: 0.5;
        "
      ></video>
    </div>
    <div class="home-title">
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
    <img
      src="/phoenix-flag.png"
      class="phoenix-flag not-in-view-stationary"
      v-bind:class="{
        'fade-in-view-stationary in-view': inViewStationary,
      }"
    />
  </div>
  <div
    class="home-subtitle not-in-view-stationary"
    v-bind:class="{
      'fade-in-view-stationary in-view': inViewDelayed,
    }"
  >
    <h2>Fighting Veteran Suicide</h2>
    <h2>One Conversation at a Time</h2>
  </div>
  <div class="too-many">
    <h1 id="daily-death-count">
      <div class="daily-num">{{ this.dailyCount }}</div>
      <div>
        Too Many A
        <u>Day</u>
      </div>
    </h1>
    <h1 id="yearly-death-cout">
      <div class="yearly-num">{{ this.yearlyCount }}</div>
      <div>
        Too Many A
        <u>Year</u>
      </div>
    </h1>
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
      inViewDelayed: false,
      dailyCount: 0,
      yearlyCount: 0,
    }
  },
  methods: {
    toggleInViewStationary() {
      this.inViewStationary = true
    },
    toggleInViewRising() {
      this.inViewRising = true
    },
    toggleInViewDelayed() {
      this.inViewDelayed = true
    },
    increaseDailyCount() {
      const myFunction = () => {
        if (this.dailyCount === 22) {
          clearInterval(timer)
          return
        }
        this.dailyCount++
      }

      let timer = setInterval(myFunction, 100)
    },
    increaseYearlyCount() {
      const myFunction = () => {
        if (this.yearlyCount === 6000) {
          clearInterval(timer)
          return
        }
        this.yearlyCount += 10
      }

      let timer = setInterval(myFunction, 0.4)
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

    setTimeout(() => {
      this.toggleInViewDelayed()
    }, 3000)

    setTimeout(() => {
      this.increaseDailyCount()
      this.increaseYearlyCount()
    }, 500)
  },
}
</script>

<style>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.home-title {
  position: relative;
  width: 30vw;
  height: 25vh;
  top: 35%;
  left: 5%;
  /* background-color: red; */
}

.home-subtitle {
  position: absolute;
  /* background-color: red; */
  width: 30vw;
  top: 60%;
  left: 5%;
  text-shadow: 1px 1px 1px rgba(82, 82, 82, 0.492);
}

.home-subtitle h2 {
  text-align: center;
}

.home h1 {
  position: relative;
  top: 10%;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(82, 82, 82, 0.492);
}

.home h2 {
  position: relative;
  top: 10%;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(82, 82, 82, 0.492);
  margin-top: 3%;
}

.home hr {
  position: relative;
  width: 15%;
  margin-top: 3%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #a4bed9;
  opacity: 0.9;
}

.phoenix-flag {
  position: relative;
  width: 60vw;
  height: 60vh;
  left: 5%;
  top: 25%;
  /* left: -5%; */
  filter: brightness(85%) sepia(25%);
  /* filter: blur(4px); */
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

.too-many {
  position: relative;
  width: 40vw;
  height: 15vh;
  left: 30%;
  /* top: 20%; */
  text-align: center;
  font-family: 'Stardos Stencil', cursive;
  display: flex;
  justify-content: space-between;
  display: none;
}

.too-many h1 {
  height: 85px;
}

#death-count {
  margin-right: 10px;
}
</style>
