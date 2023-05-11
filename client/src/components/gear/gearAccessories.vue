<template>
  <div class="page-title">
    <h1>Accessories</h1>
    <hr />
  </div>
  <div class="gear-inventory__accessories">
    <theGearItem
      v-for="(item, index) in this.state.gear"
      :key="item._id"
      :itemName="item.itemName"
      :prices="item.prices"
      :images="item.imageURLS"
      :colors="item.colors"
    ></theGearItem>
  </div>
</template>

<script>
import theGearItem from './theGearItem.vue'
import gear from '../modules/gear'

export default {
  setup() {
    const { GetAllGear, state, GetGearByCategory } = gear()
    const accessoriessGear = GetGearByCategory('accessories')
    return { GetAllGear, state, GetGearByCategory, accessoriessGear }
  },
  data() {
    return {}
  },
  components: {
    theGearItem,
  },
  mounted() {
    this.GetGearByCategory('accessories')
  },
}
</script>

<style>
.gear-inventory__accessories {
  width: 100vw;
  left: 0%;
  height: fit-content;
  min-height: 100vh;
  position: absolute;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 5%;
}

.page-title {
  width: 100%;
  height: 15%;
  position: relative;
  margin-top: 10%;
  text-align: center;
  margin-bottom: 5%;
}

.page-title hr {
  width: 15%;
}
</style>
