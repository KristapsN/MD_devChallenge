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
        {{location}}
    </span>
    <span>
        {{date}}
    </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const JobCard = defineComponent({
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
    };
  },
});

export default JobCard;
</script>

<style src="./JobCard.scss" lang="scss" scoped></style>
