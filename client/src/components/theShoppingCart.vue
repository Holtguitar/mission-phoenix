<template>
  <div class="shopping-cart__account" v-if="this.$store.state.userLoggedOn">
    <div
      class="shopping-cart"
      v-if="this.$store.state.currentUser.shoppingCart.length > 0"
    >
      <h1 class="shopping-cart__header">Items in Your Cart</h1>
      <theShoppingCartItem
        v-for="(item, index) in this.$store.state.currentUser.shoppingCart"
        :key="item.id"
        :itemID="item.id"
        :cartID="item.cartID"
        :itemName="item.item"
        :color="item.color"
        :size="item.size"
        :price="item.price"
        :image="item.imageURL"
      ></theShoppingCartItem>
      <div class="check-out__button-container">
        Check Out
      </div>
    </div>
    <div class="shopping-cart__empty" v-else>
      <h3 class="shopping-cart__title">
        Looks like your cart is empty.
      </h3>
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
  </div>
  <div class="shopping-cart__guest" v-else>
    <div class="shopping-cart" v-if="this.$store.state.guestCart.length > 0">
      <h1 class="shopping-cart__header">Items in Your Cart</h1>
      <theShoppingCartItem
        v-for="(item, index) in this.$store.state.guestCart"
        :key="item.id"
        :itemID="item.id"
        :cartID="item.cartID"
        :itemName="item.item"
        :color="item.color"
        :size="item.size"
        :price="item.price"
        :quantity="item.quantity"
        :image="item.imageURL"
      ></theShoppingCartItem>
      <div class="check-out__button-container">
        Check Out
      </div>
    </div>
    <div class="shopping-cart__empty" v-else>
      <h3 class="shopping-cart__title">
        Looks like your cart is empty.
      </h3>
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
.shopping-cart__empty {
  width: 100vw;
  height: 100vh;
}

.shopping-cart__account,
.shopping-cart__guest {
  width: 100vw;
  min-height: 100vh;
  margin-top: 10%;
  margin-bottom: 5%;
}

.shopping-cart__header {
  position: relative;
  width: 100vw;
  text-align: center;
  margin-top: 15%;
  margin-bottom: 5%;
}

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
  background-color: white;
  /* backrgb(44, 44, 44)ed; */
}

.check-out__button-container:hover {
  cursor: pointer;
}

.check-out__button-container:active {
  transform: scale(0.98);
}
</style>
