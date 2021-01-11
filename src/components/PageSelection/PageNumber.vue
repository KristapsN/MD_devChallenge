<template>
      <button class="button" @click="onSubmit"  >
        {{ selectedPage  }}
      </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageNumber = defineComponent({
  props: {
    selectedPage: String,
    paginationLength: Number,
  },
  data() {
    return {
    };
  },
  methods: {
    onSubmit() {
      this.$emit('select', this.selectedPage);
    },
  },
});

export default PageNumber;
</script>

<style lang="scss" scoped>
@import './PageSelection.scss';
</style>
