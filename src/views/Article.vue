<template>
  <div class="home">
    {{ $route.params.id }}
    <div v-for="item in info" :key="item.id">
      <div v-if=" $route.params.id === item.id">
        <h1>This is an article page with title: {{ item.title }}</h1>
      </div>
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
  created() {
    const accessPoint = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://jobs.github.com/positions.json';
    return axios.get(`${accessPoint}/${url}?page=${1}`).then((response) => {
      this.info = response.data;
    });
  },
};
</script>
