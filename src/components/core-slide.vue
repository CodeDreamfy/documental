<template>
  <aside class="main-slide">
    <div class="core-list-box">
      <div class="clb-title"><span>浏览最多的文章</span></div>
      <ul class="clb-content">
        <li v-for="hispost in hispostList" :key="hispost.id">
          <a href="javascript:;"> {{ hispost.tit }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'main-slide',
  data() {
    return {
      msg: 'hello slide',
      hispostList: [
        { tit: 'Vue 探索与实践' },
        { tit: '京东2016版首页改版前端总结' },
        { tit: '前端优化实践总结' },
        { tit: '某超长文档的探索之路' },
        { tit: '精致化页面重构' },
      ],
    };
  },
};
</script>

