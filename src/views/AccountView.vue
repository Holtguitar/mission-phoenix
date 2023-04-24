<template>
  <div class="accounts-section">
    <theAccount></theAccount>
  </div>
</template>

<script>
import theAccount from '../components/theAccount.vue'

export default {
  components: {
    theAccount,
  },
}
</script>

<style>
.accounts-section {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
}
</style>
