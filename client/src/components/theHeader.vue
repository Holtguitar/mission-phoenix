<template>
  <section
    class="header"
    @click="
      ;(this.showSubMission = false),
        (this.showSubAccount = false),
        (this.showSubGear = false),
        (this.showSubAdmin = false)
    "
  >
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
    <!-- Hamburger, used to show menu in mobile view -->
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
    <div class="navigation-container">
      <!-- Main nav item -->
      <div class="nav-bar">
        <div
          v-if="this.$store.state.userLoggedOn"
          class="nav-item"
          id="admin"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = true)
          "
        >
          Admin
          <img class="submenu-down-arrow" src="/icons/down-arrow.png" />
      </div>
        <router-link
          class="nav-item"
          id="mission"
          to="mission"
          @mouseover="
            ;(this.showSubMission = true),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          Mission
          <img class="submenu-down-arrow" src="/icons/down-arrow.png" />
        </router-link>
        <router-link
          class="nav-item"
          id="gear"
          to="/gear"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = true),
              (this.showSubAdmin = false)
          "
        >
          Gear
          <img class="submenu-down-arrow" src="/icons/down-arrow.png" />
        </router-link>
        <router-link
          class="nav-item"
          id="events"
          to="/events"
          @mouseover="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
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
              (this.showSubGear = false),
              (this.showSubAdmin = false)
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
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          Account
          <img class="submenu-down-arrow" src="/icons/down-arrow.png" />
        </router-link>
      </div>
      <!-- Submenus, shown on hover of parent element -->
      <div class="subnav-bar">
        <div
          class="subnav-item"
          id="submenu-mission"
          v-if="this.showSubMission"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          <router-link class="nav-item" to="/">Donate</router-link>
          <router-link class="nav-item" to="/sponsors">Sponsors</router-link>
          <router-link class="nav-item" to="/team">Our Team</router-link>
          <router-link class="nav-item" to="/resources">Resources</router-link>
        </div>
        <div
          class="subnav-item"
          id="submenu-gear"
          v-if="this.showSubGear"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          <router-link class="nav-item" to="/gear-men">Men</router-link>
          <router-link class="nav-item" to="/gear-women">Women</router-link>
          <router-link class="nav-item" to="/gear-accessories">
            Accessories
          </router-link>
          <router-link class="nav-item" to="/shopping-cart">
            Shopping Cart
          </router-link>
        </div>
        <div
          class="subnav-item"
          id="submenu-account"
          v-if="this.showSubAccount"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          <router-link class="nav-item" to="/account">
            Account Info
          </router-link>
          <router-link class="nav-item" to="/shopping-cart">
            Shopping Cart
          </router-link>
          <router-link class="nav-item" to="/">Purchase History</router-link>
        </div>
        <div
          class="subnav-item"
          id="submenu-admin"
          v-if="this.showSubAdmin"
          @mouseleave="
            ;(this.showSubMission = false),
              (this.showSubAccount = false),
              (this.showSubGear = false),
              (this.showSubAdmin = false)
          "
        >
          <router-link class="nav-item" to="/add-new-gear">Gear</router-link>
          <router-link class="nav-item" to="/">Events</router-link>
          <router-link class="nav-item" to="/">
            Blogs
          </router-link>
          <router-link class="nav-item" to="/">
            Users
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="welcome-container"
      id="welcome-container"
      v-bind:class="{ collapsed: welcomeCollapsedFlipped }"
    >
      <div class="welcome-header" v-if="!this.welcomeCollapsed">
        <div class="welcome-header__text">
          <router-link to="/account" v-if="!isLoggedIn">
            Sign In
          </router-link>
          <div v-else>
            Welcome, {{ this.$store.state.currentUser.firstName }}
          </div>
        </div>
      </div>
      <div class="shopping-cart__container" v-if="!this.welcomeCollapsed">
        <router-link to="/shopping-cart">
          <div class="shopping-cart__image-container">
            <img src="/icons/shopping-bag.png" class="shopping-cart__image" />
          </div>
          <div
            class="shopping-cart__count-container"
            v-if="this.$store.state.userLoggedOn"
          >
            {{ this.$store.state.currentUser.shoppingCart.length }}
          </div>
          <div v-else class="shopping-cart__count-container">
            {{ this.$store.state.guestCart.length }}
          </div>
        </router-link>
      </div>
      <div class="collapse-arrow__container" @click="this.toggleWelcomeHeader">
        <img
          class="collapse-arrow__image"
          id="collapse-arrow__image"
          src="/icons/down-arrow.png"
          v-bind:class="{ flipped: welcomeCollapsedFlipped }"
        />
      </div>
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
      showSubAdmin: true,
      welcomeCollapsed: true,
      welcomeCollapsedFlipped: true
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
    toggleWelcomeHeader() {
      this.welcomeCollapsedFlipped = !this.welcomeCollapsedFlipped
      setTimeout(() => {
        this.welcomeCollapsed = !this.welcomeCollapsed
      }, 300)
    },
  },
  beforeUnmount() {
    document.removeEventListener('click', () => {
      ;(this.showSubMission = false),
        (this.showSubAccount = false),
        (this.showSubGear = false)
    })
  },
  mounted() {
    this.store.dispatch('GetAllUsers')
    this.store.dispatch('SignInUserWithSessionStorage')
    // console.log(this.store.state.currentUser)

    setTimeout(() => {
      this.toggleInViewStationary()
    }, 100)

    document.addEventListener('click', () => {
      ;(this.showSubMission = false),
        (this.showSubAccount = false),
        (this.showSubGear = false)
    })
  },
}
</script>

<style>
.show {
  display: block;
}

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
  width: 60%;
  height: 75%;
  position: absolute;
  top: 12.5%;
  left: 35%;
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

.nav-item:hover {
  cursor: pointer;
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

/* Welcome Container */

#welcome-container.collapsed {
  transition: width 0.5s ease-in-out;
  will-change: width;
  width: 3%;
}

#welcome-container {
  transition: width 0.5s ease-in-out;
  will-change: width;
}

.collapse-arrow__container {
  position: absolute;
  height: 40px;
  width: 45px;
  top: 10%;
  right: 0;
  bottom: 0;
  text-align: center;
}

.collapse-arrow__container:hover {
  cursor: pointer;
}

.collapse-arrow__image {
  width: 50%;
  position: relative;
  top: 30%;
  left: 5%;
  rotate: 90deg;
}

#collapse-arrow__image {
  transition: rotate 0.5s ease-in-out;
  will-change: rotate;
  rotate: 90deg;
}

#collapse-arrow__image.flipped {
  transition: rotate 0.5s ease-in-out;
  will-change: rotate;
  rotate: 270deg;
}

.shopping-cart__container {
  position: relative;
  height: 100%;
  width: 10%;
  left: -5%;
}

.shopping-cart__container:hover {
  cursor: pointer;
}

.shopping-cart__count-container {
  position: relative;
  height: 50%;
  width: 50%;
  top: -60%;
  left: 25%;
  text-align: center;
  color: rgb(118, 0, 0);
}

.shopping-cart__image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.shopping-cart__image {
  position: relative;
  height: 100%;
  width: 100%;
}

.welcome-container {
  position: absolute;
  width: 30%;
  height: 40%;
  right: 5%;
  top: 100%;
  background-color: rgba(78, 78, 78, 0.805);
  border-top: 1px solid grey;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.welcome-header {
  position: relative;
  height: 100%;
  width: 75%;
}

.welcome-header__text {
  position: relative;
  height: 50%;
  width: 100%;
  top: 30%;
  color: whitesmoke;
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
</style>
