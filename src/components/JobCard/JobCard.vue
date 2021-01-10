<template>
  <div class="card-wrapper">
    <div>
      <img :src="image" alt="company image" />
    </div>
    <div>
      <h4>
          {{company}}
      </h4>
      <h2>
          {{vacancy}}
      </h2>
      <div>
          {{vacancy}}
      </div>
    </div>
    <div>
        {{position}}
    </div>
    <div>
        {{date}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const JobCard = defineComponent({
  props: {},
  data() {
    return {
      image: '',
      company: '',
      vacancy: '',
      position: '',
      location: '',
      date: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('jobSubmitted', '');
    },
  },
});

export default JobCard;
</script>

<style src="./JobCard.scss" lang="scss" scoped></style>
