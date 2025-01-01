<template>
    <div>
      <button @click="callData">Click Here</button>
      <pre v-if="mydata"><h1>{{ mydata }}</h1></pre>
     
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mydata: null,
      };
    },
    methods: {
      async callData() {
        // let response = await fetch("src/assets/textfile.txt");

        let response = await fetch("src/assets/myData.json");
        this.mydata = await response.json();
      }
    }
  };
  </script>  
  