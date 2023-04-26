<template>
  <!-- <div class="too-many">
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
  <div class="mission-statement__container">
    <h1>Our Mission;</h1>
    <hr />
    <h2>
      To identify and eradicate the stigma of combat related PTSD that is taking
      so many of our veteran's lives;
      <br />
      <br />
      To train veterans to RISE out of the ashes of their trauma and pain
      through comprehensive programs, events and hands on training;
      <br />
      <br />
      To offer HOPE in the form of counseling, career opportunities and focused
      conversation;
    </h2>
  </div>
  <div class="link-carousel-container">
    <h1>Quick Reference Links</h1>
    <hr />

    <carousel :items-to-show="1">
      <slide v-for="slide in this.slides" :key="slide">
        <img :src="slide.source" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'Basic',
  components: {
    theFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { id: 1, source: '/donate.jpeg' },
        { id: 2, source: '/who-are-we.jpeg' },
        { id: 3, source: '/resources.jpeg' },
        { id: 4, source: '/gear.jpeg' },
        { id: 5, source: '/amethyst.jpeg' },
        { id: 6, source: '/sponsors.jpeg' },
      ],
      // dailyCount: 0,
      // yearlyCount: 0,
    }
  },
  methods: {
    // increaseDailyCount() {
    //   const myFunction = () => {
    //     if (this.dailyCount === 22) {
    //       clearInterval(timer)
    //       return
    //     }
    //     this.dailyCount++
    //   }
    //   let timer = setInterval(myFunction, 100)
    // },
    // increaseYearlyCount() {
    //   const myFunction = () => {
    //     if (this.yearlyCount === 6000) {
    //       clearInterval(timer)
    //       return
    //     }
    //     this.yearlyCount += 10
    //   }
    //   let timer = setInterval(myFunction, 0.4)
    // },
  },
  mounted() {
    window.scrollTo(0, 0)
    // setTimeout(() => {
    //   this.increaseDailyCount()
    //   this.increaseYearlyCount()
    // }, 500)
  },
}
</script>

<style>
.carousel {
  position: relative;
  width: 50vw;
  height: 60vh;
  left: 25%;
  /* background-color: blue; */
}

.carousel img {
  position: relative;
  height: 90%;
  width: 100%;
  top: -5%;
  /* background-color: blue; */
}

.carousel__item {
  position: relative;
  min-height: 50vh;
  width: 50vw;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  top: -10%;
  position: relative;
}

.carousel__slide {
  position: relative;
  padding: 1%;
  height: 500px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white;
}

.link-carousel {
  position: relative;
  width: 75%;
  height: 45%;
  left: 12.5%;
}

.link-carousel-container {
  position: relative;
  width: 100vw;
  height: 150vh;
  top: 25%;
}

.link-carousel-container h1 {
  position: relative;
  width: 100vw;
  text-align: center;
}

.link-carousel-container hr {
  width: 15%;
}

.mission-statement__container h1 {
  position: relative;
  width: 100%;
  text-align: center;
}

.mission-statement__container h2 {
  position: relative;
  width: 80%;
  text-align: center;
  left: 10%;
}

.mission-statement__container hr {
  width: 15%;
  margin-top: 3%;
}

.mission-statement__container {
  position: relative;
  top: 25%;
  left: 10%;
  width: 80vw;
  height: 50vh;
  background-color: rgba(111, 111, 111, 0.262);
  padding-top: 2.5%;
}

/* .too-many {
  position: relative;
  width: 40vw;
  height: 15vh;
  left: 30%;
  top: 20%;
  text-align: center;
  font-family: 'Stardos Stencil', cursive;
  display: flex;
  justify-content: space-between;
}

.too-many h1 {
  height: 85px;
}

#death-count {
  margin-right: 10px;
} */
</style>
