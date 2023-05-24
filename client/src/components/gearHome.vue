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
      :sizes="item.sizes"
    ></theGearFullItem> -->
    <h1>Phoenix Gear</h1>
    <router-link
      v-if="this.isUserAdmin"
      to="add-new-gear"
      class="add-gear-link"
    >
      Add New Gear
    </router-link>

    <hr />
    <br />
    <div class="link-container">
      <div class="men-container">
        <router-link to="gear-men">
          <div class="image-container">
            <img class="link-image" src="/gear/men/America-strong-1.jpeg" />
          </div>
          <div id="label-container">
            Men
          </div>
        </router-link>
      </div>
      <div class="women-container">
        <router-link to="gear-women">
          <div class="image-container">
            <img class="link-image" src="/gear/women/Be-the-gen-1.jpeg" />
          </div>
          <div id="label-container">Women</div>
        </router-link>
      </div>
      <div class="accessories-container">
        <RouterLink to="gear-accessories">
          <div class="image-container">
            <img class="link-image" src="/gear/accessories/hat-1.jpeg" />
          </div>
          <div id="label-container">Accessories</div>
        </RouterLink>
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
import { useStore } from 'vuex'

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
      store: useStore(),
      currentUser: this.$store.dispatch('GetCurrentUser'),
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
  computed: {
    isUserAdmin() {
      if(this.$store.state.userLoggedOn){
        if(this.$store.state.currentUser.admin){
          return true
        } else {
          return false
        }
      } else { return false}
    }
  },
  mounted() {
    this.GetAllGear()
    window.scrollTo(0, 0)
    this.store.dispatch('GetAllUsers')
    this.store.dispatch('SignInUserWithSessionStorage')
  },
}
</script>

<style>
.add-gear-link {
  text-decoration: none;
  color: rgb(80, 80, 80);
  font-size: 20px;
}

.add-gear-link:hover {
  text-decoration: underline;
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
  text-align: center;
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

#label-container {
  position: relative;
  height: 25%;
  text-align: center;
  font-size: 25px;
  top: 5%;
  color: rgb(63, 63, 63);
  text-decoration: underline;

}

.link-container {
  width: 80vw;
  height: 50vh;
  left: 10%;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10%;
}

.image-container {
  position: relative;
  width: 100%;
  height: 60%;
  /* height: 50%; */
  /* width: 25%; */
  overflow: hidden;
}

.link-image {
  position: relative;
  /* display: none; */
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
