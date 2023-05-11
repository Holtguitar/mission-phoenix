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
    <!-- <theGearFullItem
      v-for="(item, index) in this.state.gear"
      :key="item._id"
      :_id="item._id"
      :itemName="item.itemName"
      :prices="item.prices"
      :images="item.imageURLS"
      :colors="item.colors"
      :backgrounds="item.backgrounds"
      :sizes="item.sizes"
    ></theGearFullItem> -->
    <h1>Phoenix Gear</h1>
    <hr />
    <br />
    <div class="link-container">
      <div class="men-container">
        <router-link to="gear-men">
          <div class="image-container">
            <img
              class="link-image"
              src="../../public/gear/men/America-strong-1.jpeg"
            />
          </div>
          <div class="label-container">
            Men
          </div>
        </router-link>
      </div>
      <div class="women-container">
        <router-link to="gear-women">
          <div class="image-container">
            <img
              class="link-image"
              src="../../public/gear/women/be-the-gen-1.jpeg"
            />
          </div>
          <div class="label-container">Women</div>
        </router-link>
      </div>
      <div class="accessories-container">
        <router-link to="gear-accessories">
          <div class="image-container">
            <img
              class="link-image"
              src="../../public/gear/accessories/hat-1.jpeg"
            />
          </div>
          <div class="label-container">Accessories</div>
        </router-link>
      </div>
    </div>
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
    this.GetAllGear()
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

.label-container {
  position: relative;
  height: 25%;
  text-align: center;
  font-size: 25px;
  color: white;
  top: -15%;
  text-decoration: none !important;
}

.link-container {
  width: 70vw;
  height: 50vh;
  left: 15%;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
}

.image-container {
  position: relative;
  height: 50%;
  overflow: hidden;
}

.link-image {
  position: relative;
  width: 100%;
}

.men-container,
.women-container,
.accessories-container {
  position: relative;
  width: 20%;
  height: 100%;
}

.router-link {
  text-decoration: none;
}
</style>
