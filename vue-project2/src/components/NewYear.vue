<template>
   
        <h1 v-bind:class="className">Happy New Year 2025 </h1>
        <img v-bind:src="url" alt="Hello" style="width: 600px;"/>

        <p v-if="typewritersInStock">
    in stock
  </p>
  <p v-else>
    not in stock
  </p>
</template>

<script>
    export default {

        data() {
    return {
      className: "head",
      url:require("@/assets/newyear.jpg"),
      typewritersInStock: true
      

    }
   }
    }
</script>

<style>
.head{
    color: crimson;
    font-size: xx-large;
}
</style>