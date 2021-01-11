<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <JobSelection @jobSubmitted="addJob" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-3">
        <FulltimeSelection @fulltimeSubmitted="addFullTime" />
        <LocationSelection @locationSubmitted="addCity" />
        <br /><br />
        Location: {{ selectedLocation }}
        <br />
        Job: {{ selectedJob }}
        <br />
        Full time: {{ selectedFullTime }}
      </div>
      <div class="col-xs-9">

        <div v-for="job in evenNumbers" :key="job.id">
          <router-link :to="'/article/' + job.id">
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
            <div  v-for="(job, index) in jobs" :key="job.id">
            <PageSelection :selectedPage="index" @selectedPage="chosePage" />
            </div>

        <section v-if="errored">
          <p>
            We're sorry,
            we're not able to retrieve this information at the moment,
            please try back later
          </p>
        </section>
        <section v-else>
          <div v-if="loading">
            Loading...
          </div>  
         </section>
          </div>
          <div v-else class="row">
            <div class="col-xs-12">
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
            </div>
            <div class="row">
              <div class="col-xs-12">
                <PageSelection/>
              </div>
            </div>
          </div>
        </section>
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
      loading: true,
      errored: false,
      selectedJob: '',
      selectedLocation: '',
      selectedFullTime: false,
      pageNumber: 1,
    };
  },
  mounted() {
    const accessPoint = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://jobs.github.com/positions.json';
    return axios
      .get(`${accessPoint}/${url}?page=${1}`)
      .then((response) => {
        this.jobs = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      // eslint-disable-next-line no-return-assign
      .finally((): boolean => this.loading = false);
  },
  computed: {
    evenNumbers() {
      return this.jobs.filter(
        // eslint-disable-next-line max-len
        (number: any, index: number) => index < 5 * this.pageNumber && index >= 5 * this.pageNumber - 5,
      );
    },
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
    chosePage(selectedPage: number) {
      this.pageNumber = selectedPage;
      console.log('Cilk works', selectedPage);
    },
  },
});
</script>

<style lang="scss">
</style>
