<template>
    <div class="margin--botom--30">
      <label for="checkboxFulltime" class="input--label">
      <input id="checkboxFulltime" type="checkbox" v-model="isChecked" @change="onSubmit"/>
      Full time
    </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const FulltimeSelection = defineComponent({
  props: {
  },
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('fulltimeSubmitted', this.isChecked);
    },
  },
});

export default FulltimeSelection;
</script>

<style src="./FulltimeSelection.scss" lang="scss" scoped></style>
