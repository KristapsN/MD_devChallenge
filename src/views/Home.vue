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
        <div v-for="job in jobs" :key="job.id">
          <router-link :to="'/article/'+job.id">
            <JobCard
              :image="job.company_logo"
              :company="job.company"
              :vacancy="job.title"
              :position="job.type"
              :location="job.location"
              :date="job.created_at"
            />
          </router-link>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <PageSelection/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import axios from 'axios';
// import fetchData from '../api';
import LocationSelection from '../components/LocationSelection/LocationSelection.vue';
import JobSelection from '../components/JobSelection/JobSelection.vue';
import FulltimeSelection from '../components/FulltimeSelection/FulltimeSelection.vue';
import PageSelection from '../components/PageSelection/PageSelection.vue';
import JobCard from '../components/JobCard/JobCard.vue';

export default defineComponent({
  components: {
    LocationSelection,
    JobSelection,
    FulltimeSelection,
    PageSelection,
    JobCard,
  },

  data() {
    return {
      jobs: [],
      selectedJob: '',
      selectedLocation: '',
      selectedFullTime: false,
    };
  },
  created() {
    const accessPoint = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://jobs.github.com/positions.json';
    return axios.get(`${accessPoint}/${url}?page=${1}`).then((response) => {
      this.jobs = response.data;
    });
  },
  methods: {
    // async createJobList() {
    //   const { data } = await fetchData();
    //   this.jobs = data;
    //   console.log(data);
    // },
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
