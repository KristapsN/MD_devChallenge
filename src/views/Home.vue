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
      <RadioButton @citySubmitted="addCity"/>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import fetchData from '../api';
import RadioButton from '../components/RadioButton/RadioButton.vue';

type Data = {
  jobs: [];
  selectedCity: string;
  fullTime: boolean;
  title: string;
};

export default defineComponent({
  components: {
    RadioButton,
  },

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
    addCity(city: string) {
      this.selectedCity = city;
    },
  },
});
</script>

<style lang="scss">
</style>
