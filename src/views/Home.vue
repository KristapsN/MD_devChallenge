<template>
  <div class="container">
    <div>
      <JobSelection @jobSubmitted="addJob"/>
    </div>
    <div>
      <h3>Full time</h3>
      <input type="checkbox" v-model="fullTime" />
    </div>
    <div>
      <LocationSelection @locationSubmitted="addCity"/>
    </div>
    <div>
      <br><br>
      Location: {{selectedLocation}}
      <br>
      Job: {{selectedJob}}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import fetchData from '../api';
import LocationSelection from '../components/LocationSelection/LocationSelection.vue';
import JobSelection from '../components/JobSelection/JobSelection.vue';

type Data = {
  jobs: [];
  selectedJob: string;
  selectedLocation: string;
  fullTime: boolean;
};

export default defineComponent({
  components: {
    LocationSelection,
    JobSelection,
  },

  data(): Data {
    return {
      jobs: [],
      selectedJob: '',
      selectedLocation: '',
      fullTime: false,
    };
  },
  methods: {
    async createJobList() {
      const { data } = await fetchData();
      this.jobs = data;
      console.log(data);
    },
    addJob(job: string) {
      this.selectedJob = job;
    },
    addCity(city: string) {
      this.selectedLocation = city;
    },
  },
});
</script>

<style lang="scss">
</style>
