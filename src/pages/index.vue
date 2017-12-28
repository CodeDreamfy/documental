<template>
  <div class="core-mix">
   <core-header></core-header>
  </div>
</template>

<script>
import coreHeader from '../components/core-header';

export default {
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
