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
        <div class="col-xs-3" v-if="filteredJob.id===$route.params.id">
          <div class="sidebar">
            <div>
            arr + Back to search
          </div>
           <div>
            HOW TO APPLY
           </div>
            <div v-html="filteredJob.how_to_apply"/>
          </div>
        </div>
        <div class="col-xs-9" v-if="filteredJob.id===$route.params.id">
          <div class="row">
            <div>
              {{filteredJob.title}}
            </div>
            <div>
              {{filteredJob.type}}
            </div>
          </div>
          <div class="row">
            {{filteredJob.created_at}}
          </div>
          <div class="row">
            <div class="image-wrapper">
              <img :src="filteredJob.company_logo" alt="company image" class="card-image"/>
            </div>
            <div>
              <h1>
                {{filteredJob.company}}
              </h1>
              <div>
                {{filteredJob.location}}
              </div>
            </div>
          </div>
          <div class="row">
            <p>
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

export default {
  data(): Data {
    return {
      jobs: [],
      loading: true,
      errored: false,
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
  // computed: {
  //   filteredJob() {
  //     // eslint-disable-next-line no-undef
  //     return this.jobs.find((item) => item.id === this.$route.params.id).map((item) => item);
  //   },
  // },
};
</script>

<style lang="scss">
@import './Article.scss';
</style>
