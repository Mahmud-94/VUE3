<script>



</script>

<template>
  <h1> Welcome Home</h1>

   <food-item food-name="Pizza"/>
   <food-item food-name="Burger"/>
   <food-item food-name="Sandwich"/>
   <hr>
   <product-item product-name="Shirt" product-desc="White cotton xl" v-bind:is-favorite="true"/>
   <product-item product-name="Pant" product-desc="Black Jeans 34" v-bind:is-favorite="false"/>
   <product-item product-name="Hoodie" product-desc="Gray L" v-bind:is-favorite="true"/>

</template>
<style>
 #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #app > div:hover {
  cursor: pointer;
}
  </style>