<template>
      <div v-for="capital in radioButtonLocations" :key="capital">
        <label :for="capital">
          <input
            @change="onSubmit"
            v-model="city"
            type="radio"
            :id="capital"
            name="location"
            :value="capital"
          />
          {{capital}}
          </label>
          <br />
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const RadioButton = defineComponent({
  props: {
  },
  data() {
    return {
      city: '',
      radioButtonLocations: ['London', 'Amsterdam', 'New York', 'Berlin'],
    };
  },
  methods: {
    onSubmit() {
      const selectedCity: string = this.city;
      this.$emit('citySubmitted', selectedCity);
    },
  },
});

export default RadioButton;
</script>

<style src="./RadioButton.scss" lang="scss" scoped></style>
