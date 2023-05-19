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
    <div class="down-scroll" @click="goto('section-2')">
      <img
        v-if="inViewDelayed"
        v-for="(item, index) in this.arrowArray"
        src="/icons/down-arrow.png"
        class="down-arrow-icon"
        :class="item.faded ? 'faded' : ''"
      />
    </div>
  </div>

  <div class="section-2" ref="section-2">
    <svg viewBox="0 5 500 30" class="border-1">
      <path
        d="M 0 30 C 100 50 500 0 500 10 L 500 0 L 0 0"
        fill="rgb(103, 1, 1)"
      ></path>
    </svg>
    <div class="section-container">
      <div class="section-image-container">
        <img src="/icons/connect.png" />
      </div>
      <div class="section-header-container">
        <h1 class="section-header">Connect</h1>
      </div>
    </div>
  </div>

  <div class="section-3">
    <svg viewBox="0 5 500 30" class="border-2">
      <path
        d="M 0 30 C 100 50 500 0 500 10 L 500 0 L 0 0"
        fill="rgb(11, 10, 99)"
      ></path>
    </svg>
    <div class="section-container">
      <div class="section-header-container">
        <h1 class="section-header">Counsel</h1>
      </div>
      <div class="section-image-container">
        <img src="/icons/counsel.png" />
      </div>
    </div>
  </div>

  <div class="section-4">
    <svg viewBox="0 5 500 30" class="border-3">
      <path
        d="M 0 30 C 100 50 500 0 500 10 L 500 0 L 0 0"
        fill="rgb(103, 1, 1)"
      ></path>
    </svg>
    <div class="section-container">
      <div class="section-image-container">
        <img src="/icons/equip.png" />
      </div>
      <div class="section-header-container">
        <h1 class="section-header">Equip</h1>
      </div>
    </div>
  </div>

  <div class="section-5">
    <svg viewBox="0 5 500 30" class="border-4">
      <path
        d="M 0 30 C 100 50 500 0 500 10 L 500 0 L 0 0"
        fill="rgb(11, 10, 99)"
      ></path>
    </svg>
    <div class="section-container">
      <div class="section-header-container">
        <h1 class="section-header">Restore</h1>
      </div>
      <div class="section-image-container">
        <img src="/icons/restore.png" />
      </div>
    </div>
  </div>

  <div class="section-6">
    <svg viewBox="0 5 500 30" class="border-5">
      <path
        d="M 0 30 C 100 50 500 0 500 10 L 500 0 L 0 0"
        fill="rgb(103, 1, 1)"
      ></path>
    </svg>
    <div class="section-container">
      <div class="section-image-container">
        <img src="/icons/rise.png" />
      </div>
      <div class="section-header-container">
        <h1 class="section-header">Rise</h1>
      </div>
    </div>
  </div>
  <div class="section-7">
    <div class="section-7-header__container">
      <div class="section-7-header">Too Many Have Already Lost The Battle</div>
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
      fadedIndex: 0,
      arrowArray: [
        { source: '/icons/down-arrow.png', faded: true },
        { source: '/icons/down-arrow.png', faded: false },
        { source: '/icons/down-arrow.png', faded: false },
      ],
      inViewStationary: false,
      inViewRising: false,
      inViewDelayed: false,
      dailyCount: 0,
      yearlyCount: 0,
    }
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop
      // window.scrollTo(0, top)
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    },
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
  top: -10%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-2 {
  position: relative;
  top: -10%;
  transform: rotate(180deg);
}

.border-3 {
  position: relative;
  top: -10%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-4 {
  position: relative;
  top: -10%;
  transform: rotate(180deg);
}

.border-5 {
  position: relative;
  top: -10%;
  transform: rotate(180deg);
  transform: rotateX(180deg);
}

.border-6 {
  position: relative;
  top: -10%;
  transform: rotate(180deg);
}

.down-scroll {
  position: relative;
  width: 3.5%;
  height: 10%;
  top: 90%;
  left: 55%;
  display: flex;
  flex-direction: column;
}

.down-scroll:hover {
  cursor: pointer;
}

.down-arrow-icon {
  filter: brightness(80%);
  width: 100%;
  height: 30%;
  margin-bottom: -10%;
  opacity: 0.5;
}

.down-arrow-icon:hover {
  cursor: pointer;
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
  scroll-behavior: smooth;
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
}

.rotate {
  transition: 5s ease-in;
  transform: rotate(90deg);
}

.section-2,
.section-3,
.section-4,
.section-5,
.section-6 {
  position: relative;
  filter: sepia(45%);
  width: 100vw;
  height: 100vh;
}

.section-2 {
  top: 10%;
  background-color: rgb(103, 1, 1);
}

.section-3 {
  background-color: rgb(11, 10, 99);
}

.section-4 {
  background-color: rgb(103, 1, 1);
}

.section-5 {
  background-color: rgb(11, 10, 99);
}

.section-6 {
  background-color: rgb(103, 1, 1);
}

.section-7 {
  background-color: rgb(114, 114, 114);
  position: relative;
  filter: sepia(45%);
  width: 100vw;
  height: 150vh;
  /* height: fit-content; */
  top: -5%;
  margin-bottom: -3%;
}

.section-7-header__container {
  position: relative;
  width: 70%;
  height: 15%;
  left: 15%;
  top: 5%;
  color: whitesmoke;
  background-color: rgba(0, 0, 96, 0.196);
  text-align: center;
  border-radius: 5px;
}

.section-7-header {
  width: 100%;
  height: 50%;
  /* background-color: green; */
  font-size: 35px;
  top: 35%;
  position: absolute;
  text-decoration: underline;
}

.section-container {
  width: 100%;
  height: 75%;
  top: 12.5%;
  /* background-color: purple; */
  display: flex;
  justify-content: center;
  gap: 10%;
}

.section-header-container {
  position: relative;
  height: 12.5%;
  width: 20%;
  top: 40%;
  text-align: center;
  color: whitesmoke;
  border: solid 2px whitesmoke;
}

.select-header-container {
  cursor: pointer;
}

.section-header-container:hover,
.section-image-container:hover {
  cursor: pointer;
}

.section-image-container {
  position: relative;
  /* background-color: purple; */
  height: 50%;
  width: 30%;
  top: 20%;

  /* border-radius: 200px; */
  box-shadow: 1px 1px 5px 5px rgba(90, 90, 139, 0.31);
  overflow: hidden;
}

.section-image-container img {
  width: 100%;
  height: 100%;
  position: relative;
}

.select-image-container img:hover {
  cursor: pointer;
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
