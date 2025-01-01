<template>
    <div>
      <button @click="callData">Click Here</button>
      <pre v-if="mydata"><h1>{{ mydata }}</h1></pre>
     
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        mydata: null,
      };
    },
    methods: {
      async callData() {
        // let response = await fetch("src/assets/textfile.txt");

        let response = await axios.get("https://random-data-api.com/api/v2/users");
        this.mydata = await response;
      }
    }
  };
  </script>  
  