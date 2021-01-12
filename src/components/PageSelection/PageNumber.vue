<template>
<div v-if="activePage === selectedPage">
      <button class="button activeButton" @click="onSubmit"  >
        {{ selectedPage }}
      </button>
</div>
<div v-else>
  <button class="button" @click="onSubmit"  >
        {{ selectedPage }}
      </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageNumber = defineComponent({
  props: {
    selectedPage: String,
    activePage: Number,
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
