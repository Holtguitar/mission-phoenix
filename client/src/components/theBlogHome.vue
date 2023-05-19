<template>
  <div class="blogs-home">
    <h1>
      Blogs
      <hr />
    </h1>
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
  mounted() {
    window.scrollTo(0, 0)
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
