const minMax = {
  methods: {
    start() {
      this.$Loading.start();
    },
    finish() {
      this.$Loading.finish();
    },
    error() {
      this.$Loading.error();
    },
    update() {
      this.$Loading.update(50);
    },
  },
};


function configVue(Vue) {
  Vue.mixin(minMax);
}

export default configVue;
