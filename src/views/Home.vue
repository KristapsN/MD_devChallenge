<template>
  <div class="home">
    <div v-for="item in info" :key="item.id">
      {{item.title}}
    </div>
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
