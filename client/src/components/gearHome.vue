<template>
  <div class="gear-home">
    <div v-for="{ item, index } in this.state.gear" :key="index">
      <h1>{{ item }}</h1>
      <h2>TEST</h2>
    </div>
    <router-link to="/add-new-gear">Add New Gear</router-link>
  </div>

  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import gear from './modules/gear'

export default {
  components: {
    theFooter,
  },
  data() {
    return {
      gearArray: [],
    }
  },
  setup() {
    const { GetAllGear, state } = gear()
    return {
      GetAllGear,
      state,
    }
  },
  methods: {
    loadGear() {
      this.gearArray = this.state.gear
      console.log('array: ', this.gearArray[0][1].itemName)
    },
  },
  mounted() {
    this.GetAllGear()
    setTimeout(() => {
      this.loadGear()
    }, 5000)
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.gear-home {
  position: relative;
  width: 100%;
  height: 100%;
}

.gear-home h1 {
  position: relative;
  top: 25%;
  text-align: center;
}

.gear-home hr {
  width: 15%;
  margin-top: 3%;
}
</style>
