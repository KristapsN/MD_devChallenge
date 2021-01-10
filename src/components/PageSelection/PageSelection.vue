<template>
    <div class="wrapper">
      <button class="button">
        <div class="arrow-left"/>
      </button>
      <button class="button">
        1
      </button>
      <button class="button">
        10
      </button>
      <button class="button">
        <div class="arrow-right"/>
      </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageSelection = defineComponent({
  props: {
  },
  data() {
    return {
      selectedPage: 1,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('', 'smth');
    },
  },
});

export default PageSelection;
</script>

<style scoped>@import './PageSelection.scss';</style>
