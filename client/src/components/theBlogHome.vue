<template>
  <div class="blogs-home">
    <h1>
      Blogs
      <hr />
    </h1>
    <!-- <div v-for="(item, index) in this.objects" v-html="item.content.rendered"></div> -->
    <!-- <div v-for="item in objects">
      <img v-for="image in item.images" :src="image.src" style="min-width: 150px; height: 200px"/>
      <div v-html="item.price_html"></div>
    </div> -->
    <!-- <thePreloader></thePreloader> -->
  </div>
  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import thePreloader from './preloader/thePreloader.vue';

export default {
  components: {
    theFooter,
    thePreloader
  },
  data(){
    return {
      objects: []
    }
  },
  methods:{
    loadData(){
      fetch("https://missionphoenix.org/wp-json/wp/v2/users").then((res) => res.json()).then((data) => {
        for(let obj in data){
          this.objects.push(data[obj])
        }
      })

      console.log(this.objects)
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.loadData()
  },
}
</script>

<style>
.blogs-home {
  position: relative;
  width: 100%;
  height: 100%;
  /* background: url('/icons/cracked-wall.png'); */
}

.blogs-home h1 {
  position: relative;
  top: 25%;
  text-align: center;
}

.blogs-home hr {
  width: 15%;
  margin-top: 3%;
}
</style>
