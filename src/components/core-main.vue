<template>
  <div class="core-mix">
    <core-header></core-header>
    <div class="core-container grid mt20">
      <core-slide></core-slide>
      <div class="main-area">
        <router-view />
      </div>
    </div>
  </div>
  
</template>

<script>
import coreHeader from './core-header';
import coreSlide from './core-slide';

export default {
  components: {
    coreHeader,
    coreSlide,
  },
};
</script>

