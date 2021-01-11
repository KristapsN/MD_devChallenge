<template>
    <div class="wrapper">
      <button class="button">
        <div :class="`arrow` && {arrowDirection}"/>
      </button>

      <!-- <button class="button">
        <div class="arrow arrow-right"/>
      </button> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageArrow = defineComponent({
  props: {
    selectedPage: String,
    arrowDirection: String,
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

export default PageArrow;
</script>

<style lang="scss" scoped>
@import './PageSelection.scss';
</style>
