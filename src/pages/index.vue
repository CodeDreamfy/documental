<template>
  <div class="core-mix">
   <core-header></core-header>
  </div>
</template>

<script>
import coreHeader from '../components/core-header';

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to My Blog',
    };
  },
  components: {
    coreHeader,
  },
};
</script>
