<template>
  <div class="event-container" @click="toggleModalView">
    <h1 class="event-title" v-if="title">{{ title }}</h1>
    <img v-if="previewImage" :src="previewImage" class="event-image" />
  </div>

  <div class="event-modal" v-if="modalView">
  <div class="close-modal__x" @click="toggleModalView">&#x2715</div>
    <h1 class="event-modal__title">{{ title }}</h1>
    <hr/>
    <div class="event-modal__image-container" 
    v-for="(object, index) in referenceArray"
    >
      <a :href="referenceArray[index].link ? referenceArray[index].link : null"  target="_blank" style="text-decoration: none">
        <h2 class="event-modal__image-label">{{ referenceArray[index].imgLabel }}</h2>
      <img :src="referenceArray[index].imgSrc" class="event-modal__image" />
    </a>
    </div>

    <div class="event-modal__spacer"></div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'previewImage', 'referenceItems'],
  data() {
    return {
      modalView: false,
      previewImgLink: this.previewImage,
      referenceArray: this.referenceItems,
    }
  },
  methods: {
    toggleModalView() {
      this.modalView = !this.modalView
    },
  },
  mounted(){
    document.addEventListener('keyup', (e) => {
      if(e.keyCode === 27) {
        if(this.modalView === true) {
          this.toggleModalView();
        }
      }
    })
  }
}
</script>

<style>
.close-modal__x {
  position: relative;
  font-size: 25px;
  width: 25px;
  height: 25px;
  left: 95%;
}

.close-modal__x:hover {
  cursor: pointer;
}

.close-modal:active {
  transform: scale(0.9);
}

.event-container {
  position: relative;
  height: fit-content;
  width: 50vw;
  text-align: center;
  margin-bottom: 5%;
  box-shadow: 1px 1px 10px 10px rgba(39, 39, 39, 0.488);
  padding-bottom: 3%;
  padding-top: 1%;
  left: 25%;
}

.event-container {
  cursor: pointer;
}

.event-image {
  position: relative;
  width: 40vw;
  top: 0;
}

.event-modal {
  position: fixed;
  left: 50%;
  top: 70vh;
  transform: translate(-50%, -55%);
  width: 80vw;
  padding: 2rem 6rem;
  box-shadow: 10rem 10rem 10rem 100rem rgba(39, 39, 39, 0.488);
  z-index: 1000;
  transition: all 0.5s;
  border-radius: 25px;
  border-top: solid 20px rgb(252, 252, 252);
  border-bottom: solid 20px rgb(252, 252, 252);
  background-color: rgb(252, 252, 252);
  overflow-y: scroll;
  max-height: 85vh;
  min-height: fit-content;
  margin-bottom: 50px;
}

.event-modal__spacer {
  width: 100%;
  height: 5%;
  background-color: blue;
  margin-top: 10%;
}

.event-modal__image {
  max-width: 75% ;
  margin-bottom: 5%;
}

.event-modal__image-container {
}

.event-modal__image-label {
  text-decoration: none !important;
  color: rgb(46, 53, 95)
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  opacity: 0.9;
  display: none;
}
</style>
