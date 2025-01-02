<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Fruits/>
  
  <NewYear/>
</template>

<script>

import Fruits from './components/Fruits.vue';
import NewYear from './components/NewYear.vue';




export default {
  name: 'App',
  components: {
   
    NewYear,
    Fruits
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>