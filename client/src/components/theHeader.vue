<template>
  <section class="header">
    <div
      class="mission-phoenix-logo not-in-view-stationary"
      v-bind:class="{
        'fade-in-view-stationary in-view': inViewStationary,
      }"
      id="mission-phoenix-logo"
      alt="Phoenix logo"
    >
      <a href="/">
        <img src="/Mission-Phoenix-Logo.png" class="mission-phoenix-logo" />
      </a>
    </div>
    <div
      id="nav-icon3"
      v-bind:class="{ open: open }"
      @click="this.toggleHamburger"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- <button @click="this.toggleInViewStationary">CLICK</button> -->
    <div class="navigation-container">
      <div class="nav-bar">
        <router-link
          class="nav-item"
          id="mission"
          to="mission"
          @mouseover="
            ;(this.showSubMission = true),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Mission
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
        <router-link
          class="nav-item"
          id="gear"
          to="/gear"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = true)
          "
        >
          Gear
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
        <router-link
          class="nav-item"
          id="events"
          to="/events"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Events
        </router-link>
        <router-link
          class="nav-item"
          id="blog"
          to="/blogs"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Blog
        </router-link>
        <router-link
          class="nav-item"
          id="account"
          to="/account"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = true),
              (this.showSubGear = false)
          "
        >
          Account
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
      </div>
      <div class="subnav-bar">
        <div
          class="subnav-item"
          id="submenu-mission"
          v-if="this.showSubMission"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          <router-link class="nav-item" to="/">Donate</router-link>
          <router-link class="nav-item" to="/">Sponsors</router-link>
          <router-link class="nav-item" to="/">Our Team</router-link>
          <router-link class="nav-item" to="/">Resources</router-link>
        </div>
        <div
          class="subnav-item"
          id="submenu-gear"
          v-if="this.showSubGear"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          <router-link class="nav-item" to="/">Men</router-link>
          <router-link class="nav-item" to="/">Women</router-link>
          <router-link class="nav-item" to="/">Accessories</router-link>
          <router-link class="nav-item" to="/">Shopping Cart</router-link>
        </div>
        <div
          class="subnav-item"
          id="submenu-account"
          v-if="this.showSubAccount"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          <router-link class="nav-item" to="/">
            Account Info
          </router-link>
          <router-link class="nav-item" to="/">Shopping Cart</router-link>
          <router-link class="nav-item" to="/">Purchase History</router-link>
        </div>
      </div>
      <!-- <div class="nav-bar" id="nav-bar" v-if="this.showMenu">
        <router-link
          class="nav-item"
          id="mission"
          to="mission"
          @mouseover="
            ;(this.showSubMission = true),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Mission
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
        <router-link
          class="nav-item"
          id="gear"
          to="/gear"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = true)
          "
        >
          Gear
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
        <router-link
          class="nav-item"
          id="events"
          to="/events"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Events
        </router-link>
        <router-link
          class="nav-item"
          id="blog"
          to="/blogs"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false)
          "
        >
          Blog
        </router-link>
        <router-link
          class="nav-item"
          id="account"
          to="/account"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = true),
              (this.showSubGear = false)
          "
        >
          Account
          <img
            class="submenu-down-arrow"
            src="../../public/icons/down-arrow.png"
          />
        </router-link>
      </div>
      <div class="nav-bar__submenu" id="submenu-nav" v-if="isLoggedIn">
        <h3 class="welcome-user">
          Welcome, {{ this.$store.state.currentUser.firstName }}
        </h3>
        <div class="shopping-cart">
          <img
            class="shopping-cart__image"
            src="/public/icons/shopping-bag.png"
          />
          <div class="shopping-cart__count-container">
            <h3>{{ this.$store.state.currentUser.shoppingCart.length }}</h3>
          </div>
        </div>
      </div>
      <div
        class="nav-bar__submenu-mission"
        id="submenu-mission"
        v-if="this.showSubMission"
        @mouseleave="
          ;(this.showSubMission = false),
            (this.showSubAccount = false),
            (this.showSubGear = false)
        "
      >
        <router-link class="nav-item" to="/">Donate</router-link>
        <router-link class="nav-item" to="/">Sponsors</router-link>
        <router-link class="nav-item" to="/">Our Team</router-link>
        <router-link class="nav-item" to="/">Resources</router-link>
      </div>
      <div
        class="nav-bar__submenu-mission"
        id="submenu-gear"
        v-if="this.showSubGear"
        @mouseleave="
          ;(this.showSubMission = false),
            (this.showSubAccount = false),
            (this.showSubGear = false)
        "
      >
        <router-link class="nav-item" to="/">Men</router-link>
        <router-link class="nav-item" to="/">Women</router-link>
        <router-link class="nav-item" to="/">Accessories</router-link>
        <router-link class="nav-item" to="/">Shopping Cart</router-link>
      </div>
      <div
        class="nav-bar__submenu-mission"
        id="submenu-account"
        v-if="this.showSubAccount"
        @mouseleave="
          ;(this.showSubMission = false),
            (this.showSubAccount = false),
            (this.showSubGear = false)
        "
      >
        <router-link class="nav-item" to="/">
          Account Info
        </router-link>
        <router-link class="nav-item" to="/">Shopping Cart</router-link>
        <router-link class="nav-item" to="/">Purchase History</router-link>
      </div> -->
    </div>
  </section>
</template>

<script>
import users from '../components/modules/users'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {},
  setup() {
    const { state, SignOutUser, user, currentUser } = users()
    return { state, SignOutUser, user, currentUser }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'getFirstName']),
  },
  data() {
    return {
      store: useStore(),
      open: false,
      showMenu: true,
      inViewStationary: false,
      currentUser: this.$store.dispatch('GetCurrentUser'),
      showSubMission: false,
      showSubAccount: false,
      showSubGear: false,
    }
  },
  methods: {
    toggleHamburger() {
      this.open = !this.open
      this.showMenu = !this.showMenu
    },
    toggleInViewStationary() {
      this.inViewStationary = true
    },
  },
  mounted() {
    setTimeout(() => {
      this.toggleInViewStationary()
    }, 100)
  },
  created() {
    this.$store.dispatch('GetAllUsers')
    this.$store.dispatch('SignInUserWithSessionStorage')
  },
}
</script>

<style>
.hide {
  display: none !important;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  background-color: rgba(78, 78, 78, 0.805);
  margin: 0 auto;
  overflow: hidden;
  z-index: 1030;
  opacity: 0.99;
}

.mission-phoenix-logo {
  position: relative;
  width: 40%;
  top: 20%;
  left: 5%;
}

/* NAV BAR */
.navigation-container {
  width: 50%;
  height: 75%;
  position: absolute;
  top: 12.5%;
  left: 45%;
}

.nav-bar {
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.submenu-down-arrow {
  width: 15%;
}

.nav-item {
  color: white;
  text-decoration: none;
  height: 100%;
  width: 20%;
  padding: 2%;
  text-align: center;
}

.nav-bar a:hover {
  cursor: pointer;
  background-color: rgb(120, 120, 120);
}

.nav-bar a:active {
  color: rgb(164, 164, 164);
}

/* Subnav Bar */
.subnav-bar {
  position: relative;
  width: 100%;
  height: 50%;
  /* display: flex; */
}

.subnav-item {
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 2.5%;
  width: 100%;
  height: 100%;
  background-color: rgb(120, 120, 120);
}

.subnav-item a {
  height: 25%;
  position: relative;
  width: 25%;
}

.nav-bar__submenu {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 60%;
  height: 50%;
  color: rgb(50, 50, 50);
  padding: 5px;
  display: flex;
  flex-direction: row;
}

.nav-bar__submenu ul {
  position: relative;
  list-style: none;
  padding-left: 0%;
  margin-top: 10%;
}

.nav-bar__submenu .account-icon {
  position: absolute;
  width: 4%;
  top: 10%;
  left: 80%;
  margin: auto;
}

.nav-bar__submenu-mission {
  /* width: 45%;
  height: 50%;
  background-color: rgb(113, 113, 113);
  border: solid 1px grey;
  color: whitesmoke;
  position: relative;
  top: -45%;
  left: 40%; */

  position: relative;
  color: white;
  position: absolute;
  top: 45%;
  left: 40%;
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  font-size: 15px;
  background-color: rgb(120, 120, 120);
  gap: 10%;
  /* display: none; */
}

.nav-bar__submenu-mission a {
  text-decoration: none;
  color: whitesmoke;
  position: relative;
  height: 30%;
  top: 35%;
}

.nav-bar__submenu-mission a:hover {
  color: rgb(175, 175, 175);
}

.shopping-cart {
  position: relative;
  left: 94%;
}

.shopping-cart:hover {
  cursor: pointer;
}

.shopping-cart__image {
  width: 100%;
  opacity: 0.7;
}

.shopping-cart__count-container {
  color: rgb(135, 0, 0);
  position: absolute;
  width: 55%;
  left: 22.5%;
  top: 0%;
  text-align: center;
}

.nav-bar__submenu .welcome-user {
  position: absolute;
  margin: auto;
  text-align: end;
  height: 50%;
  /* width: 30%; */
  width: fit-content;
  left: 60%;
  top: 25%;
}

.show {
  display: block;
}

/* Hamburger Icon */
#nav-icon3 {
  width: 30px;
  height: 25%;
  position: fixed;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  left: 87.5%;
  top: 2.5%;
  height: 3%;
  display: none;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: rgb(208, 208, 208);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 20px;
}

#nav-icon3.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}

/* Fade In Animation */
/*          FADE IN ANIMATION            */
.not-in-view-stationary {
  /* opacity: 1; */
  opacity: 0;
  visibility: hidden;
}

.not-in-view {
  /* opacity: 1; */
  transform: translateY(-10vh);
  opacity: 0;
  visibility: hidden;
}

.fade-in-view-stationary {
  transition: opacity 2.2s ease-in;
  will-change: opacity, visibility;
}

.fade-in-view {
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;
}

.in-view {
  opacity: 1;
  transform: none;
  visibility: visible;
}

.shopping-cart {
  width: 50px;
}
</style>
