<template>
  <div class="item-holder">
    <div class="remove-item" @click="removeItem(cartID)">&#10005</div>
    <div class="item-image__container">
      <router-link :to="`/gear/${this.itemID}`"><img :src="this.imagePreview" class="item-image" /></router-link>
    </div>
    <router-link :to="`/gear/${this.itemID}`"><div class="item-name">{{ itemName}}</div></router-link>
    <div class="item-details">
      <div class="size" v-if="size !== ''">Size: {{ size }}</div>
      <div class="color" v-if="color !== ''">Color: {{ color }}</div>
      <div class="quantity">Quantity: {{ quantity }}</div>
      <div class="price">Total: {{ price }}</div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
  props: ['itemName', 'size', 'color', 'quantity', 'price', 'image', 'cartID', 'itemID'],
  data(){
    return{
      imagePreview: this.image,
      store: useStore()
    }
  },
  methods: {
    removeItem(id){
      this.store.dispatch("RemoveFromCart", id)
    }
  },
  mounted(){
  }
}
</script>
<style>
.item-details {
  width: 50%;
  padding-top: 5%;
}

.item-holder {
  position: relative;
  width: 70%;
  left: 15%;
  height: 270px;
  display: flex;
  justify-content: center;
  gap: 2.5%;
  box-shadow: 1px 1px 7px 7px rgba(41, 43, 89, 0.488);
  margin-bottom: 25px;
  overflow: hidden;
  background-color: white;
  padding: 10px;
 
}

.item-image__container {
  position: relative;
  width: 50%;
  overflow: hidden;
  text-align: center;
}

.item-image {
  max-width: 100%;
  position: relative;
}

.item-name {
  position: relative;
  height: 25%;
  width: 25%;
  top: 37.5%;
  text-align: center;
}

.size,
.color,
.price,
.quantity {
  width: 55%;
  height: 20%;
  left: 22.5%;
  text-align: center;
  position: relative;
}


.remove-item {
  width: 25px;
  height: 30px;
  position: relative;
  left: 95%;
  top: 5%;
  font-size: 20px !important;
}

.remove-item:hover {
    cursor: pointer;
    transform: scale(.95);
}

.remove-item:active {
    transform: scale(.90);
}
</style>
