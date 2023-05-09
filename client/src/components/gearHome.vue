<template>
  <!-- <router-link to="/add-new-gear">Add New Gear</router-link> -->
  <div class="gear-home">
    <!-- <div class="inventory-scroll">
      <theGearItem
        v-for="(item, index) in this.state.gear"
        :key="item._id"
        :itemName="item.itemName"
        :prices="item.prices"
        :images="item.imageURLS"
        :colors="item.colors"
      ></theGearItem>
    </div> -->
    <theGearFullItem
      v-for="(item, index) in this.state.gear"
      :key="item._id"
      :itemName="item.itemName"
      :prices="item.prices"
      :images="item.imageURLS"
      :colors="item.colors"
      :backgrounds="item.backgrounds"
      :sizes="item.sizes"
    ></theGearFullItem>
  </div>

  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'
import gear from './modules/gear'
import theGearItem from './gear/theGearItem.vue'
import theGearFullItem from './gear/theGearFullItem.vue'

export default {
  components: {
    theGearFullItem,
    theGearItem,
    theFooter,
  },
  data() {
    return {
      gearArray: [],
      bgColor: '',
    }
  },
  setup() {
    const { GetAllGear, state } = gear()
    return {
      GetAllGear,
      state,
    }
  },
  methods: {},
  mounted() {
    // this.GetAllGear()
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.inventory-scroll {
  position: relative;
  width: 80vw;
  padding-top: 5%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-left: 5%;
  left: 5%;
}

.item-image {
  width: 250px;
}

.gear-home {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  max-height: fit-content;
  top: 15%;
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
