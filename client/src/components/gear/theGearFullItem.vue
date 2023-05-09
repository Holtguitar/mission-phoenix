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
      <h2 class="full-item-name">
        {{ itemName }}
      </h2>
      <hr />
    </div>
    <div class="display-price-container">
      <div class="display-price">
        <div class="price" v-if="displayPriceDefault">
          {{
            this.prices[0].min > 1
              ? `$${this.prices[0].min} - $${this.prices[0].max}`
              : `$${this.prices[0].max}`
          }}
        </div>
        <div class="price" v-else>${{ this.displayPrice * this.quantity }}</div>
      </div>
    </div>
    <div class="full-item-size-container" v-if="this.sizeArray.length > 1">
      <label class="size-label">Select your size:</label>
      <div v-for="item in this.sizeArray" class="size-selector-container">
        <button class="size-selector-button" @click.prevent="this.size(item)">
          {{ item.size }}
        </button>
      </div>
    </div>
    <div class="full-item-colors-container">
      <div class="color-container">
        <label class="color-title">Select your color:</label>
        <select class="color-selector">
          <option
            v-for="(color, index) in this.colors"
            :key="index"
            value="color"
          >
            {{ color }}
          </option>
        </select>
      </div>
    </div>
    <div class="quantity-selector-container">
      <label class="quantity-label">Quantity:</label>
      <input
        class="quantity-selector"
        type="number"
        placeholder="1"
        min="1"
        v-model="this.quantity"
      />
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
      displayPriceDefault: true,
      displayPrice: null,
      backgroundArray: [],
      activeColor: '',
      quantity: 1,
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
      this.displayPrice = selected.price
      this.displayPriceDefault = false
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
  top: 65%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.color-container {
  position: relative;
  width: 100%;
}

.color-title {
  position: relative;
  top: 15%;
}

.color-selector {
  position: relative;
  top: 20%;
}

.display-price-container {
  position: absolute;
  width: 20%;
  height: 5%;
  left: 55%;
  top: 25%;
  justify-content: center;
}

.display-price {
  position: relative;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
  justify-content: center;
}

.full-item-colors-container {
  position: absolute;
  width: 20%;
  height: 10%;
  left: 55%;
  top: 33%;
  text-align: center;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 3px 2px rgba(41, 43, 89, 0.488);
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

.size-label {
  position: relative;
  height: 45%;
  top: 35%;
  margin-right: 10px;
}

.full-item-size-container {
  position: absolute;
  width: 40%;
  height: 10%;
  left: 45%;
  top: 45%;
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
  left: 12%;
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
  left: 12%;
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

.quantity-label {
  height: 50%;
  position: relative;
  top: 25%;
}

.quantity-selector-container {
  position: absolute;
  width: 13%;
  height: 5%;
  left: 58.5%;
  top: 56%;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.price {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
