<template>
  <div class="mod-wrap nav">
    <nav class="grid">
      <a class="logo" href="javascript:;">
        <img src="../assets/logo.png" alt="">
      </a>
      <div class="navlist">
        <router-link :to="'/'" exact>首页</router-link>
        <router-link :to="'/lifenotes'" exact>生活随笔</router-link>
        <router-link :to="'/demo'" exact>案例实践</router-link>
        <router-link :to="'/links'" exact>导航推荐</router-link>
        <router-link :to="'/music'" exact>音乐分享</router-link>
        <router-link :to="'/movie'" exact>电影推荐</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigator',
};
</script>
