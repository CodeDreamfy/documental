<template>
  <div class="index-page">
    <div class="taglist-wrap" >
      <a href="javascript:;" v-for="(tag, index) in taglist" :class="{'active' : index == 0}" :key="tag.id">{{ tag }}</a>
    </div>
    <div class="row at-row no-gutter flex-between list-wrap">
      <template v-for="item in items" >
        <at-card :body-style="{ padding: 0 }" :key="item.id">
          <div>
            <img style="width: 100%" src="http://placehold.it/220x113">
            <div style="padding: 14px;">
              <p>AT-UI 1 {{ item.msg }}</p>
              <p>DESC desciption</p>
            </div>
          </div>
        </at-card>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to My Blog',
      items: [
        { msg: 'blog1~~' },
        { msg: 'blog2~~' },
        { msg: 'blog3~~' },
        { msg: 'blog4~~' },
        { msg: 'blog5~~' },
        { msg: 'blog6~~' },
        { msg: 'blog7~~' },
      ],
      taglist: [
        '全部文章',
        'Web开发',
        '移动开发',
        'Nodejs',
      ],
    };
  },
  components: {
  },
  beforeCreate() {
    // this.$Loading.start();
  },
  mounted() {
    // this.$Loading.finish();
  },
};
</script>
