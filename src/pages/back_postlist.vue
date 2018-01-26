<template>
  <div class="back-postlist">
    <div class="back-head">
      <span class="head-tit">文章管理</span>
      <div class="inner">
        <at-input v-model="searchValue" placeholder="请输入关键字" icon="search"></at-input>
        <at-button type="primary" icon="icon-upload">上传新文章</at-button>
      </div>
    </div>
    <div class="back-list">
      <template v-for="(postItem, index) in postList">
        <at-card :key="postItem.id" class="postcard">
          <h4 slot="title">Card Title {{postItem.name}}</h4>
          <div slot="extra">
            <at-button-group >
              <at-button :icon="postItem.show ? 'icon-eye': 'icon-eye-off'" circle title="是否隐藏" @click="setPost(index)"></at-button>
              <at-button icon="icon-edit" circle title="编辑" @click="$router.push({name:'back_edit'})"></at-button>
              <at-button icon="icon-delete"  circle title="删除"></at-button>
            </at-button-group>
          </div>
          <div>
            Card Content
          </div>
        </at-card>
      </template>
    </div>
    <div class="pagination">
      <at-pagination :total="80" show-total></at-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      postList: [
        {
          name: 'heheheheheeheh',
          id: 1,
          tag: 'xx,xxx,xx,',
          show: true,
        },
        {
          name: 'ssseeeseesese',
          id: 12,
          tag: 'xx,xxx,xx,',
          show: true,
        },
        {
          name: 'wofuuuuuuck',
          id: 13,
          tag: 'xx,xxx,xx,',
          show: true,
        },
        {
          name: 'rrrlighhh',
          id: 21,
          tag: 'xx,xxx,xx,',
          show: true,
        },
        {
          name: 'gggvvvkke',
          id: 41,
          tag: 'xx,xxx,xx,',
          show: true,
        },
        {
          name: 'wofuuuuuuck',
          id: 123,
          tag: 'xx,xxx,xx,',
          show: true,
        },
      ],
    };
  },
  methods: {
    setPost(index) {
      setTimeout(() => {
        this.postList[index].show ? this.postList[index].show = false : this.postList[index].show = true; // eslint-disable-line
      }, 200);
    },
  },
};
</script>

