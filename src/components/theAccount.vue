<template>
  <div class="accounts-home">
    <h1>
      Accounts
      <hr />
    </h1>
  </div>
  <theFooter></theFooter>
</template>

<script>
import theFooter from './theFooter.vue'

export default {
  components: {
    theFooter,
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.accounts-home {
  position: relative;
  width: 100%;
  height: 100%;
}

.accounts-home h1 {
  position: relative;
  top: 25%;
  text-align: center;
}

.accounts-home hr {
  width: 15%;
  margin-top: 3%;
}
</style>
