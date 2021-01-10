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
      <LocationSelection @locationSubmitted="addCity"/>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import fetchData from '../api';
import LocationSelection from '../components/LocationSelection/LocationSelection.vue';

type Data = {
  jobs: [];
  selectedLocation: string;
  fullTime: boolean;
  title: string;
};

export default defineComponent({
  components: {
    LocationSelection,
  },

  data(): Data {
    return {
      jobs: [],
      selectedLocation: '',
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
    addCity(city: string) {
      this.selectedLocation = city;
    },
  },
});
</script>

<style lang="scss">
</style>
