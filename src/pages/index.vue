<template>
  <div class="core-box">
    <div class="row at-row no-gutter flex-between">
      <at-card class="at-card-item" :body-style="{ padding: 0 }">
        <div>
          <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
          <div style="padding: 14px;">
            <p>AT-UI 1</p>
            <p>DESC desciption</p>
          </div>
        </div>
      </at-card>
      <at-card  class="at-card-item" :body-style="{ padding: 0 }">
        <div>
          <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
          <div style="padding: 14px;">
            <p>AT-UI 2</p>
          </div>
        </div>
      </at-card>
      <at-card  class="at-card-item" :body-style="{ padding: 0 }">
        <div>
          <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
          <div style="padding: 14px;">
            <p>AT-UI 3</p>
          </div>
        </div>
      </at-card>
      <at-card style="width: 300px;" :body-style="{ padding: 0 }">
        <div>
          <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
          <div style="padding: 14px;">
            <p>AT-UI</p>
          </div>
        </div>
      </at-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to My Blog',
    };
  },
  components: {
  },
  beforeCreate() {
    this.$Loading.start();
  },
  mounted() {
    this.$Loading.finish();
  },
};
</script>
