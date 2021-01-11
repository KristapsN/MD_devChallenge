<template>
      <h3>LOCATION</h3>
      <div>
        <input
          @change="onSubmit"
          placeholder="City, state, zip code or country"
          v-model="city"
          type="search"
        />
      </div>
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

const LocationSelection = defineComponent({
  props: {
  },
  emits: ['locationSubmitted'],
  data() {
    return {
      city: '',
      radioButtonLocations: ['London', 'Amsterdam', 'New York', 'Berlin'],
    };
  },
  methods: {
    onSubmit() {
      this.$emit('locationSubmitted', this.city);
    },
  },
});

export default LocationSelection;
</script>

<style src="./LocationSelection.scss" lang="scss" scoped></style>
