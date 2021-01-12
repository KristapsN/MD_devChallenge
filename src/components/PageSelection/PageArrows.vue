<template>
    <button class="button" @click="onSubmit">
      <div :class="arrowDirection" class="arrow" />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageArrow = defineComponent({
  props: {
    arrowDirection: String,
    selectedPage: Number,
  },
  data() {
    return {};
  },
  emits: ['nextPrev'],
  methods: {
    onSubmit() {
      this.$emit('nextPrev', this.selectedPage);
    },
  },
});

export default PageArrow;
</script>

<style lang="scss" scoped>
@import "./PageSelection.scss";
</style>
