<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <JobSelection @jobSubmitted="addJob"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-3">
        <FulltimeSelection @fulltimeSubmitted="addFullTime"/>
        <LocationSelection @locationSubmitted="addCity"/>
        <br><br>
        Location: {{selectedLocation}}
        <br>
        Job: {{selectedJob}}
        <br>
        Full time: {{selectedFullTime}}
      </div>
      <div class="col-xs-9">
        Vieta darba sludinājumiem
        <div class="row">
          <div class="col-xs-12">
            <PageSelection/>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import fetchData from '../api';
import LocationSelection from '../components/LocationSelection/LocationSelection.vue';
import JobSelection from '../components/JobSelection/JobSelection.vue';
import FulltimeSelection from '../components/FulltimeSelection/FulltimeSelection.vue';
import PageSelection from '../components/PageSelection/PageSelection.vue';

type Data = {
  jobs: [];
  selectedJob: string;
  selectedLocation: string;
  selectedFullTime: boolean;
};

export default defineComponent({
  components: {
    LocationSelection,
    JobSelection,
    FulltimeSelection,
    PageSelection,
  },

  data(): Data {
    return {
      jobs: [],
      selectedJob: '',
      selectedLocation: '',
      selectedFullTime: false,
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
    addFullTime(fullTime: boolean) {
      this.selectedFullTime = fullTime;
    },
    addCity(city: string) {
      this.selectedLocation = city;
    },
  },
});
</script>

<style lang="scss">
</style>
