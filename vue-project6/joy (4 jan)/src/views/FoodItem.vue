<template>
  <div v-on:click="countClicks">
    <h1>{{ name }}</h1>
    <h1>{{ message }}</h1>
    <p id="">You have clicked me {{ clicks }} times</p>
    {{foodName}}
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      name: "Apple",
      message: "I like Apple",
      clicks: 0,
    };
  },
  methods: {
    countClicks() {
      this.clicks++;
    },
  },
  props: ["foodName"],
};
</script>

<style></style>
