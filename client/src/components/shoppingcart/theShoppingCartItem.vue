<template>
  <div class="item-holder">
    <div class="remove-item" @click="removeItem(cartID)">&#10005</div>
    <div class="item-image__container">
      <img src="../../../public/gear/men/13-Stars-01.jpeg" class="item-image" />
    </div>
    <div class="item-name">{{ itemName }}</div>
    <div class="item-details">
      <div class="size">{{ size }}</div>
      <div class="color">{{ color }}</div>
      <div class="quantity">{{ quantity }}</div>
      <div class="price">{{ price }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['itemName', 'size', 'color', 'quantity', 'price', 'imageURL', 'cartID'],
  data(){
    return{}
  },
  methods: {
    removeItem(id){
        console.log(id)
    }
  }
}
</script>
<style>
.item-details {
  width: 50%;
  display: flex;
  justify-content: center;
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
}

.item-image__container {
  position: relative;
  width: 15%;
}

.item-image {
  width: 100%;
  position: relative;
  top: 15%;
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
  width: 25%;
  height: 25%;
  top: 37.5%;
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
