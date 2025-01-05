<template>
  <div class="box">
    <h3>{{ productName }}</h3>
    <img src="/src/assets/img_quality.svg" alt="" v-show="isFavorite">
    <p>{{ productDesc }}</p>
  </div>
</template>

<script>
export default {
    props:['productName', 'productDesc','isFavorite']
}
</script>

<style>
.box{
    height: 150px;
    width: 110px;
    border: 1px solid greenyellow;
    float: left;
}
img {
    height: 1.9em;
    float: right;
  }
</style>