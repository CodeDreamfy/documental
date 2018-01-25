<template>
  <div class="core-mix">
    <core-header></core-header>
    <div class="core-container">
      <div class="grid">
        <slot name="main"></slot>
      </div>
    </div>
    <core-footer></core-footer>
  </div>
  
</template>

<script>
import coreHeader from './core-header';
import coreFooter from './core-footer';

export default {
  components: {
    coreHeader,
    coreFooter,
  },
};
</script>

