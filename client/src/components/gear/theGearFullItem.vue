<template>
  <!-- <h2>{{ this.currentItem._id }}</h2> -->
  <theGearFullItemTemplate
    :key="this.state.currentItem._id"
    :_id="this.state.currentItem._id"
    :itemName="this.state.currentItem.itemName"
    :prices="this.state.currentItem.prices"
    :images="this.state.currentItem.imageURLS"
    :colors="this.state.currentItem.colors"
    :sizes="this.state.currentItem.sizes"
    :category="this.state.currentItem.category"
  ></theGearFullItemTemplate>
</template>

<script>
import { useRoute } from 'vue-router'
import gear from '../modules/gear'
import theGearFullItemTemplate from './theGearFullItemTemplate.vue'

export default {
  setup() {
    const { GetGearById, state } = gear()
    const route = useRoute()
    const id = route.params.id
    return { id, GetGearById, state }
  },
  data() {
    return {}
  },
  components: {
    theGearFullItemTemplate,
  },
  computed: {},
  methods: {
    getItem() {
      this.GetGearById(this.id)
    },
  },
  mounted() {
    this.getItem()
  },
}
</script>

<style></style>
