<template>
  <div class="new-item__page-header">
    <h2>Create a New Item</h2>
  </div>
  <div class="forms-container">
    <form
      class="inventory-form"
      method="POST"
      enctype="multipart/form-data"
      action="/add-new-gear"
    >
      <div class="form-row-1">
        <div class="item-name">
          <div class="item-name-container">
            <input
              class="item-name-input"
              type="text"
              name="item-name"
              placeholder="Item Name"
              required
              v-model="this.newInventory.newItemName"
            />
          </div>
        </div>
        <div class="item-category-container">
          <div class="item-category">
            <div class="category-label">Category:</div>
            <div class="category-form">
              <select v-model="this.newInventory.newCategory">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>
        </div>
        <div class="in-stock-container">
          <div class="in-stock">
            <input
              type="checkbox"
              id="in-stock"
              name="in-stock"
              value="in-stock"
              v-model="this.newInventory.newInStock"
            />
            <label for="in-stock">In Stock?</label>
          </div>
        </div>
      </div>
      <div class="form-row-2">
        <div class="item-price">
          <label for="price-min" class="price-label">Min:</label>
          <input
            class="price-input"
            type="number"
            min="1.00"
            step=".01"
            name="price-min"
            v-model="this.newInventory.newPrices.min"
          />
          <label for="price-max" class="price-label">Max:</label>
          <input
            class="price-input"
            type="number"
            min="1.00"
            step=".01"
            name="price-max"
            required
            v-model="this.newInventory.newPrices.max"
          />
        </div>
      </div>
      <div class="form-row-3">
        <div class="item-sizes">
          <div class="size-box">
            <input
              type="checkbox"
              id="xs"
              name="xs"
              value="xs"
              v-model="this.newInventory.newSizes.xs.selected"
            />
            <label for="xs">XS</label>
            <input
              type="number"
              v-model="this.newInventory.newSizes.xs.price"
              class="size-price"
            />
          </div>
          <div class="size-box">
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
          <div class="size-box">
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
          <div class="size-box">
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
          <div class="size-box">
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
          <div class="size-box">
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
      </div>
      <div class="form-row-4">
        <div class="images">
          <h5>Item Photos</h5>
          <div class="images__buttons">
            <div class="button-dec">
              <button
                class="buttons-left"
                v-if="this.imageCount > 1"
                @click.prevent="decreaseImageCount"
              >
                -
              </button>
            </div>
            <div class="button-inc">
              <button
                class="buttons-right"
                @click.prevent="increaseImageCount"
                v-if="this.imageCount < 5"
              >
                +
              </button>
            </div>
          </div>
          <div class="image-forms-container">
            <div class="image-form-container">
              <input type="file" v-on:change="this.addImage(0, $event)" />
            </div>
            <div class="image-form-container">
              <input
                type="file"
                v-if="this.imageCount >= 2"
                v-on:change="this.addImage(1, $event)"
              />
            </div>
            <div class="image-form-container">
              <input
                type="file"
                v-if="this.imageCount >= 3"
                v-on:change="this.addImage(2, $event)"
              />
            </div>
            <div class="image-form-container">
              <input
                type="file"
                v-if="this.imageCount >= 4"
                v-on:change="this.addImage(3, $event)"
              />
            </div>
            <div class="image-form-container">
              <input
                type="file"
                v-if="this.imageCount === 5"
                v-on:change="this.addImage(4, $event)"
              />
            </div>
          </div>
        </div>
        <div class="colors">
          <h5>Colors</h5>
          <div class="colors__buttons">
            <div class="button-dec">
              <button
                class="buttons-left"
                v-if="this.colorCount > 1"
                @click.prevent="decreaseColorCount"
              >
                -
              </button>
            </div>
            <div class="button-inc">
              <button
                class="buttons-right"
                @click.prevent="increaseColorCount"
                v-if="this.colorCount < 5"
              >
                +
              </button>
            </div>
          </div>
          <div class="colors-container">
            <input
              class="color-input"
              value="#FFFFFF"
              type="color"
              v-on:click="this.addColor(0, $event)"
            />
            <input
              class="color-input"
              type="color"
              value="#FFFFFF"
              v-if="this.colorCount >= 2"
              v-on:change="this.addColor(1, $event)"
            />
            <input
              class="color-input"
              type="color"
              v-if="this.colorCount >= 3"
              v-on:change="this.addColor(2, $event)"
            />
            <input
              class="color-input"
              type="color"
              v-if="this.colorCount >= 4"
              v-on:change="this.addColor(3, $event)"
            />
            <input
              class="color-input"
              type="color"
              v-if="this.colorCount === 5"
              v-on:change="this.addColor(4, $event)"
            />
          </div>
        </div>
      </div>
      <div class="form-row-5">
        <div class="submit-container">
          <button class="submit-button" @click.prevent="submitNewItem">
            Submit
          </button>
        </div>
        <div class="cancel-container">
          <button class="cancel-button" @click.prevent="cancelNewItem">
            Cancel
          </button>
        </div>
      </div>
    </form>
    <div class="inventory-preview">
      <!-- <div class="preview-row-1">
        <div class="preview-title">
          <h2>{{ this.newInventory.newItemName }}</h2>
        </div>

        <div class="preview-category">
          <h4>({{ this.newInventory.newCategory }})</h4>
        </div>
      </div>
      <div class="preview-prices">
        <h3 class="preview-min">${{ this.newInventory.newPrices.min }}</h3>
        <h3>-</h3>
        <h3 class="preview-max">${{ this.newInventory.newPrices.max }}</h3>
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
      </div> -->
      <div class="preview-row-1">
        <div><h1>Title</h1></div>
        <div><h3>(Category)</h3></div>
        <div><h4>$ - $</h4></div>
        <div><h4>In Stock</h4></div>
      </div>
      <div class="preview-row-2">
        <div>colors colors colors</div>
      </div>
      <div class="preview-row-3">
        <div>
          <div><p>XS: $25.00</p></div>
        </div>
      </div>
      <div class="preview-row-4">
        <div>PICTURE</div>
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
      this.state.newItemName = this.newInventory.newItemName
      this.state.newSizes = this.newInventory.newSizes
      this.state.newColors = this.newInventory.newColors
      this.state.newPrices = this.newInventory.newPrices
      this.state.newInStock = this.newInventory.newInStock
      this.state.newCategory = this.newInventory.newCategory
      setTimeout(() => {
        this.uploadImage(this.images, this.newInventory.newCategory)
      }, 1000)
    },
    cancelNewItem() {
      location.reload()
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
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
.new-item__page-header {
  position: relative;
  width: 20%;
  height: 10%;
  text-align: center;
  left: 15%;
  margin-top: 10%;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  background-color: rgba(151, 151, 151, 0.101);
  color: rgba(63, 63, 74, 0.967);
}

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
  user-select: none;
  color: rgba(63, 63, 74, 0.967);
}

.forms-container button {
  box-shadow: 1px 1px 1px 1px rgba(41, 43, 89, 0.488);
  border-radius: 5px;
  border: none;
}

.forms-container button:hover {
  cursor: pointer;
}

.forms-container button:active {
  transform: scale(0.9);
}
/* Form Container */
.button-dec,
.button-inc {
  width: 50%;
}

.cancel-container {
  position: relative;
  width: 50%;
  height: 100%;
}

.category-label,
.category-form {
  position: relative;
  width: 50%;
  height: 100%;
}

.color-input {
  width: 50%;
  position: relative;
  left: 25%;
  margin-bottom: 2%;
}

.colors {
  position: relative;
  user-select: none;
  width: 25%;
  height: 100%;
  left: 15%;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  background-color: whitesmoke;
}

.colors__buttons {
  position: relative;
  height: 10%;
  width: 50%;
  left: 25%;
  display: flex;
  margin-right: 5%;
  top: -5%;
}

.colors-container {
  position: relative;
  height: 75%;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
}

.form-row-1 {
  position: relative;
  height: 7%;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  top: -2.5%;
  background-color: whitesmoke;
}

.form-row-1 div,
.form-row-2 div {
  position: relative;
  padding-top: 2px;
  height: 100%;
  line-height: 25px;
}

.form-row-2 {
  position: relative;
  height: 7%;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  top: 2.5%;
  background-color: whitesmoke;
}

.form-row-3 {
  position: relative;
  height: 18%;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  top: 7.5%;
  background-color: whitesmoke;
}

.form-row-4 {
  position: relative;
  width: 80%;
  left: 10%;
  height: 50%;
  display: flex;
  top: 12.5%;
}

.form-row-5 {
  position: relative;
  width: 100%;
  height: 12%;
  display: flex;
  top: 15%;
}

.images {
  position: relative;
  width: 60%;
  height: 100%;
  box-shadow: 1px 1px 5px 5px rgba(41, 43, 89, 0.488);
  text-align: center;
  background-color: whitesmoke;
}

.images__buttons {
  position: relative;
  height: 10%;
  width: 20%;
  display: flex;
  left: 40%;
  top: -5%;
}

.image-form-container {
  position: relative;
  max-width: 75%;
  min-width: 50%;
  left: 15%;
}

.image-forms-container {
  position: relative;
}

.in-stock {
  position: relative;
  top: 5%;
}

.in-stock-container {
  position: relative;
  height: 100%;
  width: 25%;
}

.inventory-form {
  position: relative;
  height: 60vh;
  width: 35vw;
  top: 10%;
  left: 5%;
  text-align: center;
  padding: 2%;
  margin-bottom: 25px;
  justify-content: space-between;
  background-color: rgba(151, 151, 151, 0.258);
  box-shadow: 1px 1px 7px 7px rgba(41, 43, 89, 0.488);
}

.item-category-container {
  position: relative;
  height: 100%;
  width: 40%;
  display: flex;
}

.item-category {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  top: -5%;
}

.item-name {
  position: relative;
  height: 100%;
  width: 35%;
}

.item-name-input {
  padding-left: 5%;
}

.item-price {
  height: 100%;
}

.price-input {
  width: 80px;
  margin-left: 25px;
  margin-right: 25px;
  padding-left: 1%;
}

.item-sizes {
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5px;
  width: 100%;
  height: 100%;
}

.size-box {
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 25%;
  left: 5%;
  border: 1px grey solid;
}

.size-price {
  width: 65px;
}

.submit-container {
  width: 50%;
}

.submit-button,
.cancel-button {
  height: 50%;
  width: 50%;
  position: relative;
  top: 12.5%;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 3px rgba(41, 43, 89, 0.488) !important;
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
  position: relative;
  background-color: rgb(0, 255, 106);
  height: 50%;
  top: -5%;
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
  max-width: 50%;
  height: 10%;
  left: 50%;
  top: -10%;
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
  max-width: 50%;
  height: 10%;
  background-color: blue;
  padding: 5%;
}

.preview-row-1 {
  position: relative;
  height: 20%;
  background-color: green;
}

.preview-row-2 {
  position: relative;
  height: 20%;
  background-color: blue;
}

.preview-row-3 {
  position: relative;
  height: 20%;
  background-color: purple;
}

.preview-row-4 {
  position: relative;
  width: 100%;
  background-color: orange;
  height: 35%;
}
</style>
