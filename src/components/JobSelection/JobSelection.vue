<template>
  <div class="image-wrapper">
    <div class="form-wrapper">
      <font-awesome-icon icon="suitcase" class="suitcase"/>
      <input
        class="input-title"
        v-model="title"
        type="text"
        placeholder="Title, companies, expertise or benefits"
        @click="onSubmit"
        @keyup.enter="onSubmit"
      >
      <button type="button" class="btn-search" @click="onSubmit">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const JobSelection = defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
  },
  emits: ['jobSubmitted'],
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('jobSubmitted', this.title);
      this.title = '';
    },
  },
});

export default JobSelection;
</script>

<style src="./JobSelection.scss" lang="scss" scoped></style>
