<template>
    <div>
      <input
        class="input-title"
        v-model="title"
        type="text"
        placeholder="Title, companies, expertise or benefits"
      />
      <button type="button" class="btn-search" @click="onSubmit">Search</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const JobSelection = defineComponent({
  props: {
  },
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
