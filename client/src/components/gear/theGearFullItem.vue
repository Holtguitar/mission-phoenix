<template>
  <div class="full-inventory-item">
    <div class="full-inventory-row-1">
      <div class="full-main-image-container">
        <img :src="images[0]" class="full-main-image" />
      </div>
      <div class="full-item-name-container">
        <h2 class="full-item-name">{{ itemName }}</h2>
        <h4>{{ this.displayPrice }}</h4>
      </div>
      <div class="full-item-size-container">
        <div v-for="item in this.sizeArray" class="size-selector-container">
          <button class="size-selector-button" @click.prevent="this.size(item)">
            {{ item.size }}
          </button>
        </div>
      </div>
      <div class="full-item-colors-container">
        <div class="color-selector">
          <div
            class="color"
            v-for="(color, index) in this.colors"
            :style="this.bgColorStyler(index)"
          ></div>
        </div>
      </div>
    </div>
    <div class="full-inventory-row-2">
      <p></p>
    </div>
    <div class="full-inventory-row-3"></div>
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
      sizeArray: this.sizes,
      imageArray: this.images,
      priceRange: `$${this.prices[0].min} - $${this.prices[0].max}`,
      displayPrice: `$${this.prices[0].min} - $${this.prices[0].max}`,
    }
  },
  methods: {
    size(selected) {
      this.displayPrice = selected.price
    },
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
    getSizes() {
      const newArr = []
      for (const object in this.sizes[0]) {
        if (this.sizes[0][object].selected) {
          newArr.push(this.sizes[0][object])
        }
      }

      this.sizeArray = newArr
    },
  },
  computed: {
    selectedSizes() {
      this.sizeArray.forEach((e) => {
        console.log('size: ', e)
      })
    },
    bgColorStyler(index) {
      const style = `background-color: ${this.colors[index]}`
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getSizes()
  },
}
</script>

<style>
.full-item-name-container {
  position: absolute;
  background-color: green;
  width: 40%;
  left: 45%;
  top: 5%;
  text-align: center;
}

.full-item-name {
  position: relative;
}

.full-item-size-container {
  position: absolute;
  background-color: rgb(128, 77, 0);
  width: 40%;
  height: 10%;
  left: 45%;
  top: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.full-inventory-item {
  position: relative;
  width: 80vw;
  height: 80vh;
  background-color: white;
  left: 10%;
  border: 1px solid black;
}

.full-inventory-row-1 {
  position: relative;
  width: 100%;
  height: 70%;
  background-color: blue;
}

.full-inventory-row-2 {
  position: relative;
  width: 100%;
  height: 10%;
  background-color: green;
}

.full-inventory-row-3 {
  position: relative;
  width: 100%;
  height: 20%;
  background-color: orange;
}

.full-main-image {
  position: absolute;
  width: 100%;
}

.full-main-image-container {
  position: relative;
  height: 90%;
  width: 30%;
  left: 5%;
  top: 5%;
}

.size-selector-container {
  position: relative;
  width: 75px;
  background-color: red;
  border: 1px solid black;
}

.size-selector-button {
  position: relative;
  height: 50%;
  top: 25%;
}
</style>
