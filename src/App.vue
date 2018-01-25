<template>
  <layout-view id="app">
    <router-view slot="main" />
  </layout-view>
</template>

<script>
import LayoutView from './components/core-main';

export default {
  name: 'app',
  components: {
    LayoutView,
  },
};
</script>
