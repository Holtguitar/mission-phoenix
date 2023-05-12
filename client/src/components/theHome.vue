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
        <p class="join-p">
          <RouterLink to="/account" id="join-link">Join the fight</RouterLink>
        </p>
      </div>
    </div>
    <div class="down-scroll">
      <img
        v-if="inViewDelayed"
        v-for="(item, index) in this.arrowArray"
        src="../../public/icons/down-arrow.png"
        class="down-arrow-icon"
        :class="item.faded ? 'faded' : ''"
      />
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-1">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgba(103, 1, 1)"
    ></path>
  </svg>
  <div class="section-2">
    <div class="section-image-container">
      <img src="../../public/funeral-flag.png" />
    </div>
    <div class="section-header-container">
      <h1 class="section-header">Connect</h1>
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-2">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgb(27, 25, 135)"
    ></path>
  </svg>
  <div class="section-3">
    <div class="section-header-container">
      <h1 class="section-header">Counsel</h1>
    </div>
    <div class="section-image-container">
      <img src="../../public/funeral-flag.png" />
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-3">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgba(103, 1, 1)"
    ></path>
  </svg>
  <div class="section-4">
    <div class="section-image-container">
      <img src="../../public/funeral-flag.png" />
    </div>
    <div class="section-header-container">
      <h1 class="section-header">Equip</h1>
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-4">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgb(27, 25, 135)"
    ></path>
  </svg>
  <div class="section-5">
    <div class="section-header-container">
      <h1 class="section-header">Restore</h1>
    </div>
    <div class="section-image-container">
      <img src="../../public/funeral-flag.png" />
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-5">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgba(103, 1, 1)"
    ></path>
  </svg>
  <div class="section-6">
    <div class="section-image-container">
      <img src="../../public/funeral-flag.png" />
    </div>
    <div class="section-header-container">
      <h1 class="section-header">Rise</h1>
      <img class="ring-flare" src="../../public/icons/ring-flare.png" />
    </div>
  </div>
  <svg viewBox="0 0 500 200" class="border-6">
    <path
      d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
      fill="rgba(78, 78, 78)"
    ></path>
  </svg>
  <div class="section-7">
    <div></div>
    <div></div>
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

  <!-- <theFooter></theFooter> -->
</template>

<script>
import theFooter from './theFooter.vue'

export default {
  components: {
    theFooter,
  },
  data() {
    return {
      fadedIndex: 0,
      arrowArray: [
        { source: '../../public/icons/down-arrow.png', faded: true },
        { source: '../../public/icons/down-arrow.png', faded: false },
        { source: '../../public/icons/down-arrow.png', faded: false },
      ],
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
    arrowCycle() {
      this.arrowArray.forEach((e) => (e.faded = false))

      if (this.fadedIndex === 2) {
        this.fadedIndex = 0
      } else {
        this.fadedIndex++
      }

      this.arrowArray[this.fadedIndex].faded = true
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

    setInterval(this.arrowCycle, 500)
  },
}
</script>

<style>
.border-1 {
  position: relative;
  top: -55%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-2 {
  position: relative;
  top: -30%;
  transform: rotate(180deg);
  /* transform: rotateX(180deg); */
}

.border-3 {
  position: relative;
  top: 0%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-4 {
  position: relative;
  top: 25%;
  transform: rotate(180deg);
  /* transform: rotateX(180deg); */
}

.border-5 {
  position: relative;
  top: 50%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-6 {
  position: relative;
  top: 72%;
  transform: rotate(180deg);
  /* transform: rotateX(180deg); */
}

.down-scroll {
  position: absolute;
  width: 5%;
  height: 10%;
  left: 92.25%;
  top: 90%;
  display: flex;
  flex-direction: column;
}

.down-arrow-icon {
  filter: brightness(80%);
  width: 100%;
  height: 30%;
  margin-bottom: -10%;
  opacity: 0.5;
}

.faded {
  opacity: 1;
}

.flag-video {
  /* display: none; */
  position: absolute;
  bottom: -20%;
  width: 120%;
  height: 150%;
  margin: auto auto;
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

#join-link {
  text-decoration: none;
  color: white;
}

.join-p:hover {
  cursor: pointer;
  text-decoration: underline;
}

.join-button {
  position: relative;
  width: 40%;
  height: 40px;
  background: rgba(162, 3, 3, 0.773);
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
  border-left: 20px solid rgba(162, 3, 3, 0.773);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

.overlay {
  position: absolute;
  margin: auto auto;
  margin-top: -5%;
  height: 130vh;
  width: 100vw;
  background-color: rgb(103, 1, 1);
  overflow: hidden;
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

.ring-flare {
  position: absolute;
  width: 100%;
  left: 0%;
  top: -125%;
  /* background-color: blue; */
  /* top: -100%; */
}

.section-2,
.section-3,
.section-4,
.section-5,
.section-6 {
  display: flex;
  justify-content: center;
  gap: 5%;
}

.section-2 {
  position: absolute;
  background-color: rgb(103, 1, 1);
  width: 100vw;
  height: 100vh;
  top: 115%;
}

.section-3 {
  position: absolute;
  background-color: rgb(27, 25, 135);
  width: 100vw;
  height: 100vh;
  top: 215%;
}

.section-4 {
  position: absolute;
  background-color: rgb(103, 1, 1);
  width: 100vw;
  height: 100vh;
  top: 315%;
}

.section-5 {
  position: absolute;
  background-color: rgb(27, 25, 135);
  width: 100vw;
  height: 100vh;
  top: 415%;
}

.section-6 {
  position: absolute;
  background-color: rgb(103, 1, 1);
  width: 100vw;
  height: 100vh;
  top: 515%;
}

.section-7 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 615%;
  background-color: rgba(78, 78, 78);
}

.section-header-container {
  position: relative;
  /* background-color: rgba(78, 78, 78, 0.805); */
  height: 10%;
  width: 40%;
  top: 40%;
  text-align: center;
  color: whitesmoke;
}

.section-image-container {
  position: relative;
  background-color: purple;
  height: 40%;
  width: 40%;
  top: 20%;
}

.section-image-container img {
  /* display: none; */
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
