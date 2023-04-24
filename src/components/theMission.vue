<template>
  <div class="mission-statement__container">
    <h1>Our Mission;</h1>
    <hr />
    <h2>
      To identify and eradicate the stigma of combat related PTS that is taking
      so many of our Veteran lives;
      <br />
      <br />
      To train Veterans to Rise out of the ashes of their trauma and pain
      through comprehensive programs, events and hands on training;
      <br />
      <br />
      To offer Hope in the form of counseling, career opportunities and focused
      conversation;
    </h2>
  </div>
  <div class="link-carousel-container">
    <h1>Quick Reference Links</h1>
    <hr />

    <carousel :items-to-show="1">
      <slide v-for="slide in this.slides" :key="slide">
        <img :src="slide.source" />
        <!-- <img src="../../public/gear.jpeg" /> -->
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
        { id: 1, source: '../../public/donate.jpeg' },
        { id: 2, source: '../../public/who-are-we.jpeg' },
        { id: 3, source: '../../public/resources.jpeg' },
        { id: 4, source: '../../public/gear.jpeg' },
        { id: 5, source: '../../public/amethyst.jpeg' },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.carousel {
  position: relative;
  width: 90vw;
  height: 500px;
  left: 5%;
}

.carousel img {
  height: 90vh;
  width: 90vw;
}

.carousel__item {
  position: relative;
  min-height: 300px;
  width: 90vw;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  position: relative;
  padding: 10px;
  height: 500px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white;
}

.nav-arrow {
  position: relative;
  width: fit-content;
  height: 100%;
  font-size: 80px;
  margin-left: 15px;
  margin-right: 15px;
  color: rgb(128, 111, 111);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.nav-arrow:hover {
  cursor: pointer;
}

.nav-arrow:active {
  cursor: pointer;
  transform: scale(0.9);
}

#donate {
  position: absolute;
  width: 100%;
  height: 100%;
}

.link-carousel {
  position: relative;
  width: 75%;
  height: 45%;
  left: 12.5%;
  background-color: blue;
}

.link-carousel-container {
  position: relative;
  width: 100vw;
  height: 150vh;
  margin-top: 25%;
}

.link-carousel-container h1 {
  position: relative;
  width: 100vw;
  text-align: center;
}

.link-carousel-container hr {
  width: 15%;
  margin-top: 3%;
  margin-bottom: 3%;
}

.mission-statement__container h1 {
  position: relative;
  width: 100%;
  text-align: center;
  color: rgb(234, 234, 234);
}

.mission-statement__container h2 {
  position: relative;
  width: 80%;
  text-align: center;
  color: rgb(234, 234, 234);
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
  background-color: rgba(111, 111, 111, 0.174);
  padding-top: 2.5%;
}
</style>
