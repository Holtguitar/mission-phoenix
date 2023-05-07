<template>
  <div class="inventory-item">
    <div class="inventory-row-1">
      <div class="inventory-image-container">
        <img
          class="inventory-image"
          :src="images[this.imageIndex]"
          @mouseenter="this.increaseIndex"
          @mouseleave="this.decreaseIndex"
        />
      </div>
    </div>
    <div class="inventory-row-2">
      <div class="price-range">${{ prices[0].min }} - ${{ prices[0].max }}</div>
    </div>
    <div class="inventory-row-3">
      <div class="inventory-name">{{ itemName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemName', 'prices', 'sizes', 'images', 'colors'],
  data() {
    return {
      bgColors: this.colors,
      imagesURLS: this.images,
      imageIndex: 0,
      imageIndexMax: this.images.length,
    }
  },
  methods: {
    addToCart() {},
    decreaseIndex() {
      if (this.imageIndexMax > 1) {
        this.imageIndex--
      }
    },
    increaseIndex() {
      if (this.imageIndexMax > 1) {
        this.imageIndex++
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.inventory-image {
  position: absolute;
  width: 100%;
  bottom: 0%;
}

.inventory-image:hover {
  cursor: pointer;
}

.inventory-image-container {
  position: relative;
  height: 90%;
  width: 50%;
  left: 25%;
  top: 5%;
  overflow: hidden;
}

.inventory-item {
  position: relative;
  width: 20vw;
  height: 40vh;
  box-shadow: 1px 1px 7px 7px rgba(41, 43, 89, 0.488);
  background-color: white;
}

.inventory-name {
  position: relative;
  color: rgb(76, 76, 76);
  height: 100%;
  width: 100%;
  font-size: 25px;
  text-align: center;
}

.inventory-name:hover {
  text-decoration: underline;
  cursor: pointer;
}

.inventory-row-1 {
  position: relative;
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.inventory-row-2 {
  position: relative;
  width: 100%;
  height: 10%;
}
.inventory-row-3 {
  position: relative;
  width: 100%;
  height: 20%;
}

.price-range {
  width: 100%;
  height: 50%;
  position: relative;
  text-align: center;
  top: 25%;
}
</style>
