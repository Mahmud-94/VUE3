<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

    <div class="wrapper">


      <nav>
        <RouterLink to="/">Home</RouterLink> &nbsp;
        <RouterLink to="/food">Food Item</RouterLink> &nbsp;
        <RouterLink to="/todo">ToDo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
