<template>
  <div class="full-inventory-item">
    <div class="full-main-image-container">
      <img :src="this.activeImage" class="full-main-image" />
    </div>
    <div class="full-sub-images">
      <div
        v-if="this.images.length > 1"
        class="full-sub-image-container"
        v-for="(image, index) in this.images"
        :key="index"
      >
        <img
          class="full-sub-image"
          :src="image"
          @click="this.changeActiveImage(index)"
        />
      </div>
    </div>
    <div class="full-item-name-container">
      <h2 class="full-item-name">{{ itemName }}</h2>
      <h3>{{ this.displayPrice }}</h3>
    </div>
    <div class="full-item-size-container">
      <div v-for="item in this.sizeArray" class="size-selector-container">
        <button class="size-selector-button" @click.prevent="this.size(item)">
          {{ item.size }}
        </button>
      </div>
    </div>
    <div class="full-item-colors-container">
      <div
        class="color-container"
        v-for="(color, index) in this.backgroundArray"
        :style="[
          color.backgroundColor,
          color.active
            ? 'box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488)'
            : '',
        ]"
        @click="changeActiveColor(index)"
      ></div>
    </div>
    <div class="quantity-selector-container">
      <input class="quantity-selector" type="number" placeholder="1" />
    </div>
    <div class="add-to-cart-container">
      <button class="add-to-cart" @click.prevent="this.addToCart()">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemName', 'prices', 'sizes', 'images', 'colors', 'backgrounds'],
  data() {
    return {
      imageArray: [],
      activeImage: this.images[0],
      imageIndex: 0,
      imageIndexMax: this.images.length,
      sizeArray: this.sizes,
      priceRange: `$${this.prices[0].min} - $${this.prices[0].max}`,
      displayPrice: `$${this.prices[0].min} - $${this.prices[0].max}`,
      backgroundArray: [],
      activeColor: '',
    }
  },
  methods: {
    changeActiveColor(index) {
      this.backgroundArray.forEach((e) => {
        e.active = false
      })

      this.backgroundArray[index].active = true
      this.activeColor = this.colors[index]
    },
    changeActiveImage(index) {
      this.imageArray.forEach((e) => {
        e.active = false
      })

      this.imageArray[index].active = true
      this.activeImage = this.images[index]
    },
    backgroundSetter() {
      this.colors.forEach((e) => {
        this.backgroundArray.push({
          backgroundColor: `background-color: ${e}`,
          active: false,
        })
      })
    },
    imageSetter() {
      this.images.forEach((e) => {
        this.imageArray.push({
          url: e,
          active: false,
        })
      })
    },
    size(selected) {
      this.displayPrice = `$${selected.price}`
    },
    addToCart() {},
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
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getSizes()
    this.backgroundSetter()
    this.imageSetter()
    this.changeActiveImage(0)
  },
}
</script>

<style>
.add-to-cart {
  position: absolute;
  width: 35%;
  height: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
}

.add-to-cart:hover {
  cursor: pointer;
}

.add-to-cart:active {
  transform: scale(0.9);

  box-shadow: 1px 1px 3px 2px rgba(41, 43, 89, 0.488);
}

.add-to-cart-container {
  position: absolute;
  width: 40%;
  height: 5%;
  left: 45%;
  top: 55%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.full-item-colors-container {
  position: absolute;
  width: 40%;
  height: 10%;
  left: 45%;
  top: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-right: 2%;
}

.color-container {
  position: relative;
  width: 10%;
  height: 80%;
  top: 5%;
  border: grey solid 2.5px;
  margin-right: 2%;
}

.color-container:hover {
  cursor: pointer;
}

.full-item-name-container {
  position: absolute;
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
  width: 40%;
  height: 10%;
  left: 45%;
  top: 35%;
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

.full-main-image {
  position: absolute;
  width: 100%;
}

.full-main-image-container {
  position: relative;
  height: 70%;
  width: 30%;
  left: 15%;
  top: 5%;
  border: rgba(99, 99, 99, 0.504) solid 2px;
  overflow: hidden;
}

.size-selector-container {
  position: relative;
  width: 50px;
}

.size-selector-button {
  position: relative;
  height: 50%;
  width: 100%;
  top: 25%;
}

.size-selector-button:hover {
  cursor: pointer;
}

.full-sub-image {
  position: absolute;
  width: 100%;
}

.full-sub-image:hover {
  cursor: pointer;
}

.full-sub-images {
  position: relative;
  height: 15%;
  min-width: 30%;
  max-width: fit-content;
  top: 10%;
  left: 15%;
  display: flex;
  justify-content: space-between;
}

.full-sub-image-container {
  position: relative;
  width: 25%;
  height: 100%;
  overflow: hidden;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
}

.full-sub-image-container:active {
  transform: scale(0.98);
}

.quantity-selector {
  position: relative;
  width: 25%;
}

.quantity-selector-container {
  position: absolute;
  width: 20%;
  height: 5%;
  left: 55%;
  top: 46.5%;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
