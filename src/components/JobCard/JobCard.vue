<template>
  <div class="card-wrapper">
    <div class="image-wrapper">
      <img :src="image" alt="company image" class="card-image"/>
    </div>
    <div class="text-wrapper">
      <h4>
          {{company}}
      </h4>
      <h2>
          {{vacancy}}
      </h2>
      <div>
          {{position}}
      </div>
    </div>
    <div class="info-wrapper">
    <span>
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
  methods: {
    onSubmit() {
      // this.$emit('jobSubmitted', '');
    },
  },
});

export default JobCard;
</script>

<style src="./JobCard.scss" lang="scss" scoped></style>
