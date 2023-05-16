<template>
  <div
    class="shopping-cart__main"
    v-if="this.$store.state.currentUser.shoppingCart.length > 0"
  >
    <theShoppingCartItem
      v-for="(item, index) in this.$store.state.currentUser.shoppingCart"
      :key="item.id"
      :cartID="item.cartID"
      :itemName="item.item"
      :color="item.color"
      :size="item.size"
      :price="item.price"
    ></theShoppingCartItem>
    <div class="check-out__button-container">
      <!-- <router-link to="/">Check Out</router-link> -->
      Check Out
    </div>
  </div>
  <div class="shopping-cart__main">
    <h3 class="shopping-cart__title">Looks like your cart is empty.</h3>
    <hr style="width: 15%;" />
    <h4 class="shopping-cart__subtitle">
      Visit
      <router-link
        to="/gear"
        style="color: rgb(0, 0, 85); text-decoration: underline;"
      >
        here
      </router-link>
      to view our inventory.
    </h4>
  </div>
</template>
<script>
import theShoppingCartItem from './shoppingcart/theShoppingCartItem.vue'
import { useStore } from 'vuex'

export default {
  components: {
    theShoppingCartItem,
    data() {
      return {
        store: useStore(),
      }
    },
    methods: {},
    mounted() {
      this.store.dispatch('GetAllUsers')
      this.store.dispatch('SignInUserWithSessionStorage')
    },
  },
}
</script>
<style>
.shopping-cart__main {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  margin-top: 15% !important;
}

.shopping-cart__subtitle {
  width: 100%;
  text-align: center;
  position: relative;
  /* margin-top: 15%; */
}

.shopping-cart__title {
  width: 100%;
  text-align: center;
  position: relative;
  margin-top: 15%;
}

.check-out__button-container {
  position: relative;
  width: 115px;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
  left: 77%;
  color: rgb(70, 70, 70);
  text-align: center;
  padding-top: 2%;
  /* backrgb(44, 44, 44)ed; */
}
</style>
