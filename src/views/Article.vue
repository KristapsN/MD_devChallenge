<template>
<div class="container">
  <div class="row">
    <section v-if="errored">
      <div>
        We're sorry,
        we're not able to retrieve this information at the moment,
        please try back later
      </div>
    </section>
    <section v-else>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else class="row">
        <div class="col-xs-3">
          <div>
            arrow + back to search
            HOW TO APPLY
            Please email a copy of your resume and online portfolio to
            e-mail@email.com
          </div>
        </div>
          <div class="col-xs-9">
            <div v-for="item in jobs" :key="item.id">
              <div v-if=" $route.params.id === item.id">
                <div class="row">
                  <div>
                    {{ item.title }}
                  </div>
                  <div>
                    {{ item.type }}
                  </div>
                </div>
                <div class="row">
                  {{item.job.created_at}}
                </div>
                <div class="row">
                  <div class="image-wrapper">
                    <img :src="image" alt="company image" class="card-image"/>
                  </div>
                  <div>
                    <h1>
                      {{item.job.company}}
                    </h1>
                    <div>
                      {{item.job.location}}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <p>
                    {{item.description}}
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jobs: null,
      loading: true,
      errored: false,
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
      .finally(() => this.loading = false);
  },
};
</script>
