<template>
  <div class="home">
    <div class="overlay">
      <video
        class="flag-video"
        src="/american-flag.mp4"
        loop
        autoplay
        muted
      ></video>
    </div>
    <div class="home-title">
      <div>
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
      <div
        class="not-in-view-stationary"
        v-bind:class="{
          'fade-in-view-stationary in-view': inViewDelayed,
        }"
      >
        <h3>Fighting Veteran Suicide</h3>
        <h3>One Conversation at a Time</h3>
      </div>
      <div
        class="join-button not-in-view-stationary"
        v-bind:class="{
          'fade-in-view-stationary in-view': inViewDelayed,
        }"
      >
        <p class="join-p">Join The Fight</p>
      </div>
    </div>
  </div>

  <!-- <div class="too-many">
    <h1 class="too-many-title">
      We are here to help veterans fight the war within.
    </h1>
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
  </div> -->

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
.flag-video {
  position: fixed;
  top: 0;
}

.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: whitesmoke;
}

.home-title {
  position: relative;
  width: 30vw;
  height: 50vh;
  top: 25%;
  /* background-color: rgb(98, 0, 255); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.home-subtitle {
  position: relative;
  top: 10%;
  text-align: center;
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

.join-p {
  position: relative;
  color: white;
  top: -15%;
}

.join-p:hover {
  cursor: pointer;
  text-decoration: underline;
}

.join-button {
  /* top: 80%; */
  /* left: -18%; */
  position: relative;
  width: 40%;
  height: 40px;
  background: rgba(255, 0, 0, 0.773);
  text-align: center;
  left: 30%;
  top: -10%;
}
.join-button:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
.join-button:before {
  content: '';
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgba(255, 0, 0, 0.773);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

/*          FADE IN ANIMATION            */
.not-in-view-stationary {
  opacity: 0;
  visibility: hidden;
}

.not-in-view {
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

/* .too-many {
  position: relative;
  width: 100vw;
  height: 70vh;
  color: whitesmoke;
  text-align: center;
  font-family: 'Stardos Stencil', cursive;
  display: flex;
  flex-direction: column;
  background-color: rgba(98, 103, 98, 0.528);
  display: none;
}

.too-many h1 {
  position: relative;
  background-color: rgba(14, 30, 175, 0.819);
  width: 25%;
  left: 33.5%;
  padding: 15px;
  height: fit-content;
}

.too-many-title {
  height: 150px !important;
} */
</style>
