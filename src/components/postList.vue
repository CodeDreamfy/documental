<template>
  <div class="postlist">
    <div class="taglist-wrap" >
      <a href="javascript:;" v-for="(tag, index) in taglist" :class="{'active' : index == 0}" :key="tag.id">{{ tag }}</a>
    </div>
    <div class="row at-row no-gutter flex-between list-wrap">
      <template v-for="item in items" >
        <at-card :body-style="{ padding: 0 }" :key="item.id" >
          <div class="postimg" @click="routerLink"><img style="width: 100%" src="http://placehold.it/240x113"></div>
          <div style="padding: 14px;" @click="routerLink">
            <p>{{ item.msg }}</p>
            <p>DESC desciption</p>
          </div>
        </at-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { msg: 'blog1~~' },
        { msg: 'blog2~~' },
        { msg: 'blog3~~' },
        { msg: 'blog4~~' },
      ],
      taglist: [
        '全部文章',
        'Web开发',
        '移动开发',
        'Nodejs',
      ],
    };
  },
  methods: {
    routerLink() {
      this.$router.push({ name: 'postItem', params: { id: 1 } });
    },
  },
};
</script>

