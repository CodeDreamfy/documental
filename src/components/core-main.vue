<template>
  <div class="core-mix">
    <core-header></core-header>
    <div class="core-container">
      <div class="grid">
        <core-slide></core-slide>
        <div class="main-area">
          <router-view />
        </div>
      </div>
    </div>
    <core-footer></core-footer>
  </div>
  
</template>

<script>
import coreHeader from './core-header';
import coreSlide from './core-slide';
import coreFooter from './core-footer';

export default {
  components: {
    coreHeader,
    coreSlide,
    coreFooter,
  },
};
</script>

