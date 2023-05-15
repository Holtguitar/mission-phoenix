<template>
  <div class="accounts-section">
    <theAccount></theAccount>
  </div>
  <!-- <theFooter></theFooter> -->
</template>

<script>
import theAccount from '../components/theAccount.vue'

import theFooter from '../components/theFooter.vue'

export default {
  components: {
    theAccount,
    theFooter,
  },
}
</script>

<style>
.accounts-section {
  position: relative;
  margin-top: 10%;
  left: 0;
  width: 100vw;
  min-height: 100vh;
}
</style>
