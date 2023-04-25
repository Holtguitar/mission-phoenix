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
        <img
          src="../../public/Mission-Phoenix-Logo.png"
          class="mission-phoenix-logo"
        />
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
    <div class="nav-bar" id="nav-bar" v-if="this.showMenu">
      <!-- <router-link class="nav-item" id="home" to="/">Home</router-link> -->
      <router-link class="nav-item" id="mission" to="mission">
        Mission
      </router-link>
      <router-link class="nav-item" id="gear" to="gear">Gear</router-link>
      <router-link class="nav-item" id="events" to="events">Events</router-link>
      <router-link class="nav-item" id="blog" to="blogs">Blog</router-link>
      <router-link class="nav-item" id="account" to="account">
        Account
      </router-link>
    </div>
    <div class="nav-bar__submenu hide" id="submenu-nav">
      <router-link class="nav-item" id="team" to="/">Team</router-link>
      <router-link class="nav-item" id="resources" to="resources">
        Resources
      </router-link>
      <router-link class="nav-item" id="sponsors" to="sponsors">
        Sponsors
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      open: false,
      showMenu: false,
      inViewStationary: false,
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
  height: 20vh;
  background: url('brushed-graphite.jpeg');
  margin: 0 auto;
  overflow: hidden;
  z-index: 1030;
}

.mission-phoenix-logo {
  position: relative;
  width: 50%;
  top: 15%;
  left: 5%;
}

/* NAV BAR */
.nav-bar {
  position: relative;
  color: white;
  position: absolute;
  top: 20%;
  left: 35%;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.nav-bar ul {
  position: relative;
  list-style: none;
  display: flex;
  height: 100px;
  top: 0%;
}

.nav-bar li {
  position: relative;
  margin-left: 15%;
  width: 200px;
  text-align: center;
  margin-left: 0%;
  top: 15%;
}

.nav-bar a {
  color: white;
  text-decoration: none;
}

.nav-bar a:hover {
  cursor: pointer;
  color: rgb(175, 175, 175);
}

.nav-bar a:active {
  color: rgb(164, 164, 164);
}

.nav-bar__submenu {
  position: absolute;
  display: flex;
  top: 40%;
  left: 55%;
  width: 80px;
  height: 80px;
  background-color: whitesmoke;
  color: rgb(50, 50, 50);
  padding: 5px;
}

.nav-bar__submenu ul {
  position: relative;
  list-style: none;
  padding-left: 0%;
  margin-top: 10%;
}

.nav-bar__submenu li {
  position: relative;
  margin-bottom: 5px;
  float: left !important;
}

.nav-bar__submenu a {
  color: rgb(16, 16, 16);
  text-decoration: none;
}

.nav-bar__submenu a:hover {
  cursor: pointer;
  color: rgb(175, 175, 175);
}

.nav-bar__submenu a:active {
  color: rgb(164, 164, 164);
}

.show {
  display: block;
}

/* Hamburger Icon */
#nav-icon3 {
  width: 30px;
  height: 20px;
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
  top: 5%;
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
