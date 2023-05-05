<template>
  <div class="forms-container">
    <form
      class="inventory-form"
      method="POST"
      enctype="multipart/form-data"
      action="/add-new-gear"
    >
      <div class="item-name">
        <input
          type="text"
          name="item-name"
          placeholder="Item Name"
          required
          v-model="this.newInventory.newItemName"
        />
      </div>
      <div class="item-category">
        <select v-model="this.newInventory.newCategory">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div class="item-price">
        <input
          type="number"
          min="1.00"
          step=".01"
          name="price-min"
          placeholder="Min"
          v-model="this.newInventory.newPrices.min"
        />
        <input
          type="number"
          min="1.00"
          step=".01"
          name="price-max"
          required
          placeholder="Max"
          v-model="this.newInventory.newPrices.max"
        />
      </div>
      <div class="item-sizes">
        <div>
          <input
            type="checkbox"
            id="xs"
            name="xs"
            value="xs"
            v-model="this.newInventory.newSizes.xs.selected"
            @change="this.tst"
          />
          <label for="xs">XS</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.xs.price"
            class="size-price"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="s"
            name="s"
            value="s"
            v-model="this.newInventory.newSizes.s.selected"
          />
          <label for="s">S</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.s.price"
            class="size-price"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="m"
            name="m"
            value="m"
            v-model="this.newInventory.newSizes.m.selected"
          />
          <label for="m">M</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.m.price"
            class="size-price"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="l"
            name="l"
            value="l"
            v-model="this.newInventory.newSizes.l.selected"
          />
          <label for="l">L</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.l.price"
            class="size-price"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="xl"
            name="xl"
            value="xl"
            v-model="this.newInventory.newSizes.xl.selected"
          />
          <label for="xl">XL</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.xl.price"
            class="size-price"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="xxl"
            name="xxl"
            value="xxl"
            v-model="this.newInventory.newSizes.xxl.selected"
          />
          <label for="xxl">XXL</label>
          <input
            type="number"
            v-model="this.newInventory.newSizes.xxl.price"
            class="size-price"
          />
        </div>
      </div>
      <div class="colors">
        <div class="colors__buttons">
          <button
            class="buttons-left"
            v-if="this.colorCount > 1"
            @click.prevent="decreaseColorCount"
          >
            -
          </button>
          <button
            class="buttons-right"
            @click.prevent="increaseColorCount"
            v-if="this.colorCount < 5"
          >
            +
          </button>
        </div>
        <br />
        <input
          value="#FFFFFF"
          type="color"
          v-on:click="this.addColor(0, $event)"
        />
        <input
          type="color"
          value="#FFFFFF"
          v-if="this.colorCount >= 2"
          v-on:change="this.addColor(1, $event)"
        />
        <input
          type="color"
          v-if="this.colorCount >= 3"
          v-on:change="this.addColor(2, $event)"
        />
        <input
          type="color"
          v-if="this.colorCount >= 4"
          v-on:change="this.addColor(3, $event)"
        />
        <input
          type="color"
          v-if="this.colorCount === 5"
          v-on:change="this.addColor(4, $event)"
        />
      </div>
      <div class="images">
        <div class="images__buttons">
          <button
            class="buttons-left"
            v-if="this.imageCount > 1"
            @click.prevent="decreaseImageCount"
          >
            -
          </button>
          <button
            class="buttons-right"
            @click.prevent="increaseImageCount"
            v-if="this.imageCount < 5"
          >
            +
          </button>
        </div>
        <br />
        <input type="file" v-on:change="this.addImage(0, $event)" />
        <input
          type="file"
          v-if="this.imageCount >= 2"
          v-on:change="this.addImage(1, $event)"
        />
        <input
          type="file"
          v-if="this.imageCount >= 3"
          v-on:change="this.addImage(2, $event)"
        />
        <input
          type="file"
          v-if="this.imageCount >= 4"
          v-on:change="this.addImage(3, $event)"
        />
        <input
          type="file"
          v-if="this.imageCount === 5"
          v-on:change="this.addImage(4, $event)"
        />
      </div>
      <div class="in-stock-container">
        <input
          type="checkbox"
          id="in-stock"
          name="in-stock"
          value="in-stock"
          v-model="this.newInventory.newInStock"
        />
        <label for="in-stock">In Stock?</label>
      </div>
      <div class="submit-container">
        <input
          type="submit"
          class="submit-button"
          @click.prevent="submitNewItem"
        />
      </div>
    </form>
    <div class="inventory-preview">
      <div class="preview-title">
        <h2>{{ this.newInventory.newItemName }}</h2>
      </div>
      <div class="preview-category">
        <h3>{{ this.newInventory.newCategory }}</h3>
      </div>
      <div class="preview-prices">
        <h3 class="preview-min">{{ this.newInventory.newPrices.min }}</h3>
        <p>-</p>
        <h3 class="preview-max">{{ this.newInventory.newPrices.max }}</h3>
      </div>
      <div class="preview-inStock">
        <p>
          {{
            this.newInventory.newInStock
              ? 'Currently in Stock'
              : 'Currently Out of Stock'
          }}
        </p>
      </div>
      <div class="preview-sizes">
        <p
          v-for="item in this.newInventory.newSizes"
          style="margin-right: 15px;"
        ></p>
      </div>
      <div class="preview-colors">
        <div
          class="preview-colors-item"
          v-for="item in this.newInventory.newColors"
          style="height: 50px; width: 50px;"
          :style="`background-color: ` + item"
        ></div>
      </div>
      <div class="preview-image__container">
        <img
          v-for="item in this.previewImages"
          :src="item"
          class="preview-image"
        />
      </div>
    </div>
  </div>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import theFooter from '../../theFooter.vue'
import gear from '../../modules/gear'
export default {
  data() {
    return {
      imageCount: 1,
      colorCount: 1,
      images: [],
      previewImages: [],
      colors: [],
      newColor: '',
      colorFormOpen: false,
      newInventory: {
        newItemName: '',
        newSizes: {
          xs: {
            size: 'XS',
            selected: false,
            price: 0,
          },
          s: {
            size: 'S',
            selected: false,
            price: 0,
          },
          m: {
            size: 'M',
            selected: false,
            price: 0,
          },
          l: {
            size: 'L',
            selected: false,
            price: 0,
          },
          xl: {
            size: 'XL',
            selected: false,
            price: 0,
          },
          xxl: {
            size: 'XXL',
            selected: false,
            price: 0,
          },
        },
        newColors: [],
        newPrices: {
          min: 0,
          max: 0,
        },
        newImageURLS: [],
        newInStock: true,
        newCategory: '',
      },
    }
  },
  setup() {
    const {
      state,
      GetAllGear,
      newItem,
      deleteItem,
      editItem,
      GetItemById,
      item,
      itemId,
      uploadImage,
    } = gear()

    return {
      state,
      GetAllGear,
      newItem,
      deleteItem,
      editItem,
      GetItemById,
      item,
      itemId,
      uploadImage,
    }
  },
  methods: {
    tst() {
      console.log(this.newInventory.newSizes.xs.selected)
    },
    increaseImageCount() {
      this.imageCount++
    },
    decreaseImageCount() {
      if (this.imageCount > 1) {
        this.imageCount--
        this.images.pop()
      }
    },
    increaseColorCount() {
      this.colorCount++
    },
    decreaseColorCount() {
      if (this.colorCount > 1) {
        this.colorCount--
        this.colors.pop()
      }
    },
    imagePreviewUrl(index, event) {
      const url = URL.createObjectURL(event.target.files[0])
      this.previewImages[index] = url
    },
    addImage(index, event) {
      if (this.images.length < index) {
        alert('Please add images in order.')
        if (this.images.length === 0) {
          this.imageCount = 1
        } else {
          this.imageCount = this.images.length
        }
      } else {
        this.images[index] = event.target.files
        this.imagePreviewUrl(index, event)
      }
    },
    submitNewItem() {
      // this.uploadImage(this.images)
      console.log(this.newInventory)
    },
    addColor(index, event) {
      if (this.newInventory.newColors.length < index) {
        alert('Please add colors in order.')
        if (this.newInventory.newColors.length === 0) {
          this.colorCount = 1
        } else {
          this.colorCount = this.newInventory.newColors.length
        }
      } else {
        this.newInventory.newColors[index] = event.target.value
      }
    },
    toggleColorForm() {
      this.colorFormOpen = !this.colorFormOpen
    },
  },
  components: {
    theFooter,
  },
}
</script>

<style>
.forms-container {
  position: absolute;
  margin: 0 auto;
  left: 0;
  top: 15%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* Form Container */

.colors {
  background-color: red;
  height: 25%;
}

.color-form p {
  position: relative;
  left: 85%;
  top: 0;
}

.images {
  background-color: blue;
}

.in-stock-container {
  background-color: orange;
}

.inventory-form {
  position: relative;
  height: 50vh;
  width: 35vw;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
  top: 15%;
  left: 5%;
  text-align: center;
  padding: 2%;
  margin-bottom: 25px;
  justify-content: space-between;
}

.item-name {
  background-color: green;
}

.item-category {
  background-color: purple;
}

.item-sizes {
  background-color: yellow;
  display: grid;
  grid-template-columns: auto auto auto;
}

.item-price {
  background-color: pink;
}

.size-price {
  width: 65px;
}

.submit-container {
  background-color: grey;
}

.colors__buttons,
.images__buttons {
  position: relative;
  width: 60px;
  left: 45%;
  top: 5%;
  background-color: black;
}

/* Preview Container */

.inventory-preview {
  position: relative;
  height: 90vh;
  width: 45vw;
  left: -5%;
  top: 5%;
  text-align: center;
  box-shadow: 1px 1px 10px 10px rgba(41, 43, 89, 0.488);
}

.preview-category {
  background-color: blue;
  height: 50px;
}

.preview-colors {
  display: flex;
  height: 50px;
  background-color: purple;
}

.preview-colors-item {
  border: grey 3px solid;
}

.preview-image__container {
  height: 300px;
  background-color: orange;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-left: 15%;
  padding-top: 5%;
}

.preview-image {
  width: 50%;
}

.preview-inStock {
  background-color: red;
  position: relative;
  max-width: 100%;
  height: 50px;
}

.preview-max {
  margin-left: 15px;
}

.preview-min {
  margin-right: 15px;
}

.preview-prices {
  position: relative;
  max-width: 100%;
  height: 50px;
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.preview-sizes {
  position: relative;
  background-color: rgb(116, 19, 35);
  max-width: 100%;
  height: 50px;
  justify-content: center;
  display: flex;
}

.preview-title {
  position: relative;
  max-width: 100%;
  height: 50px;
  background-color: blue;
}

.submit-button {
  height: 35px;
  width: 15%;
  position: relative;
  bottom: 0;
}
</style>
