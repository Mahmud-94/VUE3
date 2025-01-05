<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

    <div class="wrapper">


      <nav>
        <RouterLink to="/">Home</RouterLink> &nbsp;
        <RouterLink to="/food">Food Item</RouterLink> &nbsp;
        <RouterLink to="/todo">ToDo</RouterLink> &nbsp;
        <RouterLink to="/ref">Ref Hook</RouterLink> &nbsp;
        <RouterLink to="/lifecycle">LifeCycle Hook</RouterLink> &nbsp;
        <RouterLink to="/form">Form Inputs</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
