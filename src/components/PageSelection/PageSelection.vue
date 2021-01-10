<template>
    <div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PageSelection = defineComponent({
  props: {
  },
  data() {
    return {
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

<style src="./PageSelection.scss" lang="scss" scoped></style>
