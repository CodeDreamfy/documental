<template>
  <div class="index core-post">
    <core-slide></core-slide>
    <div class="main-area">
      <postList></postList>
    </div>
  </div>
</template>

<script>
import postList from '../components/postList';
import CoreSlide from '../components/core-slide';

export default {
  components: {
    CoreSlide,
    postList,
  },
};
</script>

