
<!-- YourMainComponent.vue -->
<template>
  <div>
    <p @mouseover="showHoverComponent" @mouseleave="hideHoverComponent">
      Hover over me!
    </p>
    <hover-component v-if="isHovered" />
  </div>
</template>

<script setup>
import HoverComponent from './HoverComponent.vue';

// Define the reactive state
let isHovered = false;

// Define methods
const showHoverComponent = () => {
  isHovered = true;
};

const hideHoverComponent = () => {
  isHovered = false;
};
</script>

<style scoped>
/* YourMainComponent.vue styles */
p:hover + .hover-component,
.hover-component:hover {
  display: block;
}
</style>
