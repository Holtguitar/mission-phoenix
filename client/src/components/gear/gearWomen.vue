<template>
  <div class="back-button">
    <theBackButtonGear :path="`/gear`"></theBackButtonGear>
  </div>

  <div class="page-title">
    <h1>Women's Clothing</h1>
    <hr />
  </div>
  <div class="gear-inventory__women">
    <theGearItem
      v-for="(item, index) in this.state.gear"
      :key="item._id"
      :_id="item._id"
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
import theBackButtonGear from '../base-buttons/theBackButtonGear.vue'

export default {
  setup() {
    const { GetAllGear, state, GetGearByCategory } = gear()
    const womensGear = GetGearByCategory('women')
    return { GetAllGear, state, GetGearByCategory, womensGear }
  },
  data() {
    return {}
  },
  components: {
    theGearItem,
    theBackButtonGear,
  },
  mounted() {
    this.GetGearByCategory('women')
  },
}
</script>

<style>
.back-button {
  position: relative;
  width: 5%;
  height: 5%;
  margin-top: 15%;
  margin-bottom: -10%;
  left: 20%;
  text-decoration: none;
  color: rgba(1, 1, 1, 0.627);
}

.back-link:hover {
  text-decoration: underline;
}

.gear-inventory__women {
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
  width: 100vw;
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
