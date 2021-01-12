<template>
  <div class="card-wrapper">
    <div class="image-wrapper" v-if="image">
      <img :src="image" alt="company image" class="card-image" width="90px"/>
    </div>
        <div class="image-wrapper" v-else>
      <span class="noimage">not found</span>
    </div>
    <div class="text-wrapper">
      <h4 class="company-title">
          {{company}}
      </h4>
      <h2 class="vacancy-title">
          {{vacancy}}
      </h2>
      <span class="possition-tag">
          {{position}}
      </span>
    </div>
    <div class="info-wrapper">
    <span class="info-location">
      <font-awesome-icon icon="globe-americas" class="globe-americas" />
        {{location}}
    </span>
    <span>
      <font-awesome-icon icon="clock" class="clock" />
         {{ moment(date).fromNow() }}
    </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

moment().format();

const JobCard = defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    image: String,
    company: String,
    vacancy: String,
    position: String,
    location: String,
    date: String,
  },
  data() {
    return {
      moment,
    };
  },
});

export default JobCard;
</script>

<style src="./JobCard.scss" lang="scss" scoped></style>
