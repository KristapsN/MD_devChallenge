<template>
  <div class="container">
    <section v-if="loading">
            Loading...
    </section>
    <section v-else-if="errored">
      <div>
        We're sorry,
        we're not able to retrieve this information at the moment,
        please try back later
      </div>
    </section>
    <section v-else-if="jobs.length">
      <div class="row" v-for="filteredJob in jobs" :key="filteredJob.id">
        <div class="col-xs-2" v-if="filteredJob.id===$route.params.id">
          <div class="sidebar">
          <router-link to="/" class="back">
          <font-awesome-icon icon="long-arrow-alt-left" class="back-icon"/>
          <span class="back-text">Back to search</span>
          </router-link>
          <p class="apply-heading">HOW TO APPLY</p>
          <p class="text">Please email a copy of your resume and online portfolio to</p>
          <p class="apply-text" v-html="jobs.how_to_apply"></p>
          </div>
        </div>
        <div class="col-xs-8 col-xs-offset-2" v-if="filteredJob.id===$route.params.id">
          <div class="title-wrapper">
            <div class="job-title">
              {{filteredJob.title}}
              <div class="type-tag">
                {{filteredJob.type}}
              </div>
            </div>
          </div>
          <div class="time-wrapper">
            <font-awesome-icon icon="clock" class="clock"/>
            {{filteredJob.created_at}}
          </div>
          <div class="row">
            <div class="col-xs-7">
            <div class="company-image-wrapper">
            <div class="image-wrapper">
              <img :src="filteredJob.company_logo"
              alt="company image"
              class="card-image"/>
            </div>
            <div class="company-location-wrapper">
              <h1 class="company">
                {{filteredJob.company}}
              </h1>
              <div class="location-wrapper">
              <div class="location-text">
                <font-awesome-icon icon="globe-americas" class="globe-americas"/>
                {{filteredJob.location}}
                </div>
              </div>
            </div>
            </div>
           </div>
          </div>
          <div class="row">
            <p class="description">
              <span v-html="filteredJob.description"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
  jobs: Job[];
  loading: boolean;
  errored: boolean;
}

export default defineComponent({
  data(): Data {
    return {
      jobs: [],
      loading: true,
      errored: false,
    };
  },
  components: {
    FontAwesomeIcon,
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
});
</script>

<style lang="scss">
@import './Article.scss';
</style>
