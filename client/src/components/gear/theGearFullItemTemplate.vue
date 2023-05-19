<template>
  <div class="preloader" v-if="this.loading"><thePreloader></thePreloader></div>
  <div class="full-inventory-item" v-if="this.images" v-bind:class="{blur: loading}">
    <h3 class="full-inventory-back-link">
      <theBackButtonGear :path="`/gear-${this.category}`"></theBackButtonGear>
    </h3>
    <div class="full-main-image-container">
      <img :src="this.activeImage" class="full-main-image" />
    </div>
    <div class="full-sub-images">
      <div
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
        {{ this.itemName }}
      </h2>
      <hr />
    </div>
    <div class="display-price-container">
      <div class="display-price">
        <!-- <div class="price" v-if="displayPriceDefault">
          {{
            this.prices[0].min > 1
              ? `$${this.prices[0].min} - $${this.prices[0].max}`
              : `$${this.prices[0].max}`
          }}
        </div>
        <div class="price" v-else>${{ this.quantity }}</div> -->
        <div class="price">
          {{
            this.prices[0].min > 1
              ? `$${this.prices[0].min} - $${this.prices[0].max}`
              : `$${this.prices[0].max * this.quantity}`
          }}
        </div>
      </div>
    </div>
    <div class="full-item-size-container" v-if="this.sizeArray.length > 0">
      <label class="size-label">Select your size:</label>
      <div v-for="item in this.sizeArray" class="size-selector-container">
        <button class="size-selector-button" @click.prevent="this.size(item)" v-bind:class="{activeSize: item.selected}">
          {{ item.size }}
        </button>
      </div>
    </div>

    <div class="full-item-colors-container" v-if="this.colors.length > 0">
      <div class="color-container">
        <label class="color-title">Select your color:</label>
        <select class="color-selector" v-model="this.selectedColor">
          <option
            v-for="(color, index) in this.colors"
            :key="index"
            :value="color"
          >
            {{ color }}
          </option>
        </select>
      </div>
    </div>
    <div class="quantity-selector-container">
      <label class="quantity-label" @change="">Quantity:</label>
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
  <theFooter></theFooter>
</template>

<script>
import { useRoute } from 'vue-router'
import gear from '../modules/gear'
import theBackButtonGear from '../base-buttons/theBackButtonGear.vue'
import thePreloader from '../preloader/thePreloader.vue'
import theFooter from '../theFooter.vue'
export default {
  props: ['_id', 'itemName', 'prices', 'sizes', 'images', 'colors', 'category'],
  components: {
    theBackButtonGear,
    thePreloader,
    theFooter
  },
  data() {
    return {
      loading: false,
      imageArray: [],
      sizeArray: [],
      activeImage: '',
      imageIndex: 0,
      displayPriceDefault: true,
      displayPrice: null,
      quantity: 1,
      selectedColor: '',
      selectedSize: '',
    }
  },
  computed: {
    selectedSizes() {
      this.sizeArray.forEach((e) => {
      })
    },
  },
  methods: {
    changeActiveImage(index) {
      this.imageArray.forEach((e) => {
        e.active = false
      })

      this.imageArray[index].active = true
      this.activeImage = this.images[index]
    },
    imageSetter() {
      if (this.images) {
        this.images.forEach((e) => {
          this.imageArray.push({
            url: e,
            active: false,
          })
        })
        this.activeImage = this.imageArray[0].url
      }
    },
    setColor($event) {
      console.log($event)
    },
    size(selected) {
      this.displayPrice = selected.price
      this.displayPriceDefault = false
      this.selectedSize = selected.size
      this.sizeArray.forEach((e) => {
        e.selected = false
      })

      this.sizeArray.forEach((e) => {
        if(e === selected) {
          e.selected = true
        }
      })
    },
    generateString(length) {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ' '
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        )
      }

      return result
    },
    addToCart() {
      const addToCart = {
        id: this._id,
        item: this.itemName,
        color: this.selectedColor,
        size: this.selectedSize,
        price: this.displayPrice * this.quantity,
        imageURL: this.images[0],
        quantity: this.quantity,
        cartID: this.generateString(32),
        category: this.category
      }

      this.$store.dispatch('AddToCart', addToCart)
    },
    getSizes() {
      const newArr = []
      if (this.sizes) {
        for (const object in this.sizes[0]) {
          if (this.sizes[0][object].selected) {
            newArr.push(this.sizes[0][object])
          }
        }
      }
      this.sizeArray = newArr
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getSizes()

    // this.changeActiveImage(0)
    this.$store.dispatch('SignInUserWithSessionStorage')
    setTimeout(() => {
      this.imageSetter()
    }, 1000)

    //Uses selected property of sizes to allow styling of the selected button.
    this.sizeArray.forEach((e) => {
        e.selected = false
      })
  },
}
</script>

<style>
/* re-formatting */
.activeSize {
  color: whitesmoke;
  background-color: rgba(123, 123, 123, 0.693);
}

.full-inventory-item {
  position: relative;
  width: 80vw;
  height: 80vh;
  margin-top: 12%;
  margin-bottom: 15%;
  left: 10%;
  background-color: white;
  border: 1px solid black;
}

.full-inventory-back-link {
  position: absolute;
  width: 5%;
  height: 5%;
  left: 3.5%;
  top: 2.5%;
  text-decoration: none;
  color: rgba(1, 1, 1, 0.627);
}

.full-main-image-container {
  position: absolute;
  height: 70%;
  width: 30%;
  top: 5%;
  left: 10%;
  /* border: rgba(99, 99, 99, 0.504) solid 2px; */
  overflow: hidden;
}

.full-main-image {
  position: absolute;
  max-width: 100%;
  width: fit-content;
  bottom: 100;
}

.full-sub-images {
  position: absolute;
  height: 17%;
  /* min-width: 30%; */
  width: 30%;
  left: 10%;
  top: 80%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 15px;
}

.full-sub-image-container {
  position: relative;
  width: 25%;
  height: 100%;
  overflow: hidden;
  /* box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488); */

}

.full-sub-image-container:active {
  transform: scale(0.98);
}

.full-sub-image {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.full-sub-image:hover {
  cursor: pointer;
  
}

.full-item-name-container {
  position: relative;
  width: 40%;
  left: 45%;
  top: 5%;
  text-align: center;
}

.full-item-name-container hr {
  width: 15%;
}

.full-item-name {
  position: relative;
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

.price {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}

.full-item-size-container {
  position: relative;
  width: 40%;
  height: 10%;
  left: 45%;
  top: 45%;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.size-label {
  position: relative;
  height: 45%;
  top: 35%;
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

.quantity-selector-container {
  position: absolute;
  width: 20%;
  height: 5%;
  left: 55%;
  top: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.quantity-label {
  height: 50%;
  position: relative;
  top: 25%;
}

.quantity-selector {
  position: relative;
  width: 25%;
  padding-left: 5px;
}


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
  top: 75%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.blur {
  filter: blur(5px);
}

/* Reformating - end */

/* .add-to-cart {
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

.blur {
  filter: blur(5px);
} */

/* .color-container {
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
} */

/* .display-price-container {
  position: absolute;
  width: 20%;
  height: 5%;
  left: 55%;
  top: 25%;
  justify-content: center;
} */

/* .display-price {
  position: relative;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
  justify-content: center;
} */

/* .full-item-colors-container {
  position: absolute;
  width: 20%;
  height: 10%;
  left: 55%;
  top: 33%;
  text-align: center;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 3px 2px rgba(41, 43, 89, 0.488);
} */

/* .full-item-name-container {
  position: absolute;
  width: 40%;
  left: 45%;
  top: 5%;
  text-align: center;
} */

/* .full-item-name-container hr {
  width: 15%;
} */

/* .full-item-name {
  position: relative;
} */

/* .full-item-size-container {
  position: absolute;
  width: 40%;
  height: 10%;
  left: 45%;
  top: 45%;
  text-align: center;
  display: flex;
  justify-content: center;
} */


/* .full-main-image-container {
  position: relative;
  height: 70%;
  width: 30%;
  left: 12%;
  top: 0%;
  border: rgba(99, 99, 99, 0.504) solid 2px;
  overflow: hidden;
} */

/* .full-sub-image {
  position: relative;
  width: 100%;
  display: none;
} */

/* .full-sub-image:hover {
  cursor: pointer;
} */

/* .full-sub-images {
  position: absolute;
  height: 15%;
  min-width: 30%;
  max-width: fit-content;
  top: 90%;
  left: 12%;
  display: flex;
  justify-content: space-between;
} */

/* .full-sub-image-container {
  position: relative;
  width: 25%;
  height: 100%;
  overflow: hidden;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
} */

/* .full-sub-image-container:active {
  transform: scale(0.98);
} */

/* .quantity-selector {
  position: relative;
  width: 25%;
  padding-left: 5px;
}

.quantity-label {
  height: 50%;
  position: relative;
  top: 25%;
  margin-right: 15px;
}

.quantity-selector-container {
  position: absolute;
  width: 18%;
  height: 5%;
  left: 58.5%;
  top: 56%;
  text-align: center;
  display: flex;
  justify-content: space-between;
} */

.preloader {
  position: absolute;
  width: 100vw;
  height: 50vh;
  margin-top: 25%;
}

/* .price {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
} */

/* .size-label {
  position: relative;
  height: 45%;
  top: 35%;
  margin-right: 15px;
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
} */
</style>
