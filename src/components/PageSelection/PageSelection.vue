<template>
    <div class="wrapper">
      <button class="button">
        <div class="arrow arrow-left"/>
      </button>
      <button class="button" @click="onSubmit" >
        {{ selectedPage  }}
      </button>
      <button class="button">
        10
      </button>
      <button class="button">
        <div class="arrow arrow-right"/>
      </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageSelection = defineComponent({
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

export default PageSelection;
</script>

<style lang="scss" scoped>
@import './PageSelection.scss';
</style>
