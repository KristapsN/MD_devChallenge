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
        <section v-if="errored">
          <p>
            We're sorry, we're not able to retrieve this information at the
            moment, please try back later
          </p>
        </section>
        <section v-else>
          <div v-if="loading">Loading...</div>
          <div v-else class="row">
            <div class="col-xs-12">
              <div v-for="job in filterProducts" :key="job.id">
                <router-link :to="'/article/' + job.id" class="card--router">
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
            <div class="col-xs-12 display--flex" id="range">
              <PageArrow  arrowDirection="arrow-left" @nextPrev="setPrev"/>
                <div v-for="n in filterProducts.length" :key="n">
                  <PageNumber
                    :selectedPage="n"
                    @select="chosePage"
                    :paginationLength="jobs.length"
                    :activePage="pageNumber"
                  />
              </div>
              <PageArrow  arrowDirection="arrow-right" @nextPrev="setNext" />
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
import LocationSelection from '../components/LocationSelection/LocationSelection.vue';
import JobSelection from '../components/JobSelection/JobSelection.vue';
import FulltimeSelection from '../components/FulltimeSelection/FulltimeSelection.vue';
import PageNumber from '../components/PageSelection/PageNumber.vue';
import PageArrow from '../components/PageSelection/PageArrows.vue';
import JobCard from '../components/JobCard/JobCard.vue';

type Job = {
    id: string;
    type: string;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
    how_to_apply: string;
    company_logo: string;
};

type Data = {
  jobs: Job[] | undefined;
  loading: boolean;
  errored: boolean;
  selectedJob: string;
  selectedLocation: string;
  selectedFullTime: boolean;
  pageNumber: number;
}

export default defineComponent({
  components: {
    LocationSelection,
    JobSelection,
    FulltimeSelection,
    JobCard,
    PageNumber,
    PageArrow,
  },

  data(): Data {
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
    return (
      axios
        .get(`${accessPoint}/${url}?page=${1}`)
        .then((response) => {
          this.jobs = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        // eslint-disable-next-line no-return-assign
        .finally((): boolean => (this.loading = false))
    );
  },
  computed: {
    filterProducts() {
      let filteredFullTime = this.jobs;
      if (this.selectedFullTime) {
        filteredFullTime = this.jobs
          .filter((item: { type: string}) => item.type === 'Full Time');
      }
      let filteredCity = filteredFullTime;
      if (this.selectedLocation.length > 0) {
        filteredCity = filteredFullTime
          .filter((item: { type: string}) => item.location.includes(this.selectedLocation));
      }
      let filterSearch = filteredCity;
      if (this.selectedJob.length > 0) {
        filterSearch = filteredCity
          .filter((item: { type: string}) => item.title.includes(this.selectedJob)
          || item.company.includes(this.selectedJob)
          || item.description.includes(this.selectedJob));
      }
      const pageCounter = filterSearch
        .filter((item: Job, index: number) => index < 5 * this.pageNumber
        && index >= 5 * this.pageNumber - 5);
      return pageCounter;
    },
  },
  methods: {
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
    },
    setNext() {
      this.pageNumber += 1;
    },
    setPrev() {
      this.pageNumber -= 1;
    },
  },
});
</script>

<style lang="scss">
</style>
