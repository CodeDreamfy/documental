<template>
  <div class="core-mix">
    <core-header></core-header>
    <core-main></core-main>
  </div>
</template>

<script>
import coreHeader from '../components/core-header';
import coreMain from '../components/core-main';

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to My Blog',
    };
  },
  components: {
    coreHeader,
    coreMain,
  },
};
</script>
