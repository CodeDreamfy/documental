<template>
  <div class="index">
    <core-slide></core-slide>
    <router-view></router-view>
  </div>
</template>

<script>
import CoreSlide from '../components/core-slide';

export default {
  components: {
    CoreSlide,
  },
};
</script>

