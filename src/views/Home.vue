<template>
  <div class="container">
    <div>
      <input
        class="input-title"
        v-model="title"
        type="text"
        placeholder="Title, companies, expertise or benefits"
      />
      <button type="button" class="btn-search">Search</button>
    </div>
    <div>
      <h3>Full time</h3>
      <input type="checkbox" v-model="fullTime" />
    </div>
    <div>
      <h3>LOCATION</h3>
      <div>
        <input
          placeholder="City, state, zip code or country"
          v-model="selectedCity"
          type="search"
        />
      </div>
    </div>
    <div>
      <input
        v-model="selectedCity"
        type="radio"
        id="London"
        name="location"
        value="London"
      />
      <label for="London">London</label><br />
      <input
        v-model="selectedCity"
        type="radio"
        id="Amsterdam"
        name="location"
        value="Amsterdam"
      />
      <label for="Amsterdam">Amsterdam</label><br />
      <input
        v-model="selectedCity"
        type="radio"
        id="NewYork"
        name="location"
        value="NewYork"
      />
      <label for="NewYork">New York</label><br />
      <input
        v-model="selectedCity"
        type="radio"
        id="Berlin"
        name="location"
        value="Berlin"
      />
      <label for="Berlin">Berlin</label><br />
    </div>
    <!-- <div v-for="item in info" :key="item.id">
      {{item.title}}
    </div> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import fetchData from '../api';
// import axios from 'axios';

// export default {
//   data() {
//     return {
//       info: null,
//     };
//   },
//   mounted() {
//     const accessPoint = 'https://cors-anywhere.herokuapp.com';
//     const url = 'https://jobs.github.com/positions.json';
//     return axios.get(`${accessPoint}/${url}?page=${1}`).then((response) => {
//       this.info = response.data;
//     });
//   },
// };

type Data = {
  jobs: [];
  selectedCity: string;
  fullTime: boolean;
  title: string;
};

export default defineComponent({
  components: {},

  data(): Data {
    return {
      jobs: [],
      selectedCity: '',
      fullTime: false,
      title: '',
    };
  },
  methods: {
    async createJobList() {
      const { data } = await fetchData();
      this.jobs = data;
      console.log(data);
    },
  },
});
</script>

<style lang="scss">
</style>
