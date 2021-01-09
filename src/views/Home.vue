<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    const accessPoint = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://jobs.github.com/positions.json';
    return axios.get(`${accessPoint}/${url}?page=${1}`).then((response) => {
      this.info = response.data;
    });
  },
};
</script>
